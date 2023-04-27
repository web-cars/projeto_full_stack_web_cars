import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { instance } from "../services/instance";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUser, IUserContext } from "../interface";
import { iErrorAxios } from "../interfaces/carAds.interface";
import { iAxiosData } from "../interfaces/carAds.interface";
import { iProviderProps } from "../interfaces/carAds.interface";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [login, setLogin] = useState(true);
  const [resetToken, setResetToken] = useState(
    localStorage.getItem("RESETTOKEN@WEBCARS") || ""
  );
  const [user, setUser] = useState<IUser | null>(null);
  const [profile, setProfile] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("TOKEN@WEBCARS") || ""
  );

  const navigate = useNavigate();

  const onSubmitSignUp = (data: FieldValues) => postSignUp(data);
  const onSubmitLogin = (data: FieldValues) => postLogin(data);
  const onSubmitUpdate = (data: FieldValues) => editProfile(data);
  const onSubmitDelete = (data: FieldValues) => deleteProfile();
  const onSubmitResetPassword = (data: FieldValues) => {
    resetPassword(data);
    navigate("/login");
  };

  const onSubmitSendEmail = (data: FieldValues) => sendEmail(data);
  const postLogin = async (obj: FieldValues) => {
    instance
      .post<iAxiosData>("session", obj)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("TOKEN@WEBCARS", token);
        setToken(token);
        navigate("/dashboard");
      })
      .catch((err: iErrorAxios) => {
        console.log(err);
      });
  };

  const postSignUp = (obj: FieldValues) => {
    instance
      .post<IUser>("users", obj)
      .then((response) => {
        setLogin(true);
      })
      .catch((err: iErrorAxios) => {
        console.log(err);
      });
  };
  const editProfile = (obj: FieldValues) => {
    if (token) {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      instance
        .patch<IUser>(`users/${user?.id}`, obj)
        .then((response) => {
          console.log(response);
          toast.success("User updated successfully");
          setUser(response.data);
          setProfile(false);
        })
        .catch((err: iErrorAxios) => {
          console.log(err);
          toast.error("Fail to update user");
        });
    }
  };
  const deleteProfile = () => {
    if (token) {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      instance
        .delete<IUser>(`users/${user?.id}`)
        .then((response) => {
          toast.success("User deleted successfully");
          setProfile(false);
        })
        .catch((err: iErrorAxios) => {
          console.log(err);
          toast.error("Fail to delete user");
        });
    }
  };
  const getProfile = async () => {
    if (token) {
      try {
        instance.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await instance.get<IUser>("users/infos");
        setUser(data);
      } catch (err) {
        console.log(err);
        localStorage.clear();
      }
    }
  };

  const sendEmail = async (email: FieldValues) => {
    try {
      const { data } = await instance.post("users/resetPassword", email);
      console.log(data);
      localStorage.setItem("RESETTOKEN@WEBCARS", data.resetToken);
      setResetToken(data.resetToken);
      toast.success("E-mail enviado");
    } catch (err) {
      console.log(err);
      toast.error("E-mail não encontrado");
    }
  };

  const resetPassword = async (obj: FieldValues) => {
    if (resetToken) {
      try {
        await instance.patch(`users/resetPassword/${resetToken}`, obj);
        localStorage.removeItem("RESETTOKEN@WEBCARS");
        toast.success("Senha trocada com sucesso");
      } catch (err) {
        toast.error("Algo deu errado");
      }
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          instance.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await instance.get<IUser>("users/infos");
          setUser(data);
        } catch (err) {
          localStorage.clear();
          console.log(err);
        }
      }
    };
    loadUser();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        onSubmitLogin,
        onSubmitSignUp,
        login,
        setLogin,
        onSubmitUpdate,
        setProfile,
        profile,
        onSubmitDelete,
        token,
        setToken,
        getProfile,
        postLogin,
        onSubmitSendEmail,
        onSubmitResetPassword,
        resetToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
