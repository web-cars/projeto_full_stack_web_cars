import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { instance } from "../services/instance";
import { FieldValues } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { IUser, IUserContext, IUserReturn } from "../interface";
import { iErrorAxios } from "../interfaces/carAds.interface";
import { iAxiosData } from "../interfaces/carAds.interface";
import { iProviderProps } from "../interfaces/carAds.interface";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const location = useLocation()

  const [login, setLogin] = useState(true);
  const [resetToken, setResetToken] = useState(
    localStorage.getItem("RESETTOKEN@WEBCARS") || ""
  );
  const [user, setUser] = useState<IUserReturn | null>(null);
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

  const createUser = (formData: FieldValues) =>{
    console.log(formData)
    instance
      .post("users", formData)
      .then( (response) =>{
        console.log(response.data)
        toast.success("User created successfully");
        navigate("/login")
      })
      .catch(err => console.log(err))
      toast.error("Dados invalidos")
  }

  const onSubmitSendEmail = (data: FieldValues) => sendEmail(data);
  const postLogin = async (obj: FieldValues) => {
    instance
      .post<iAxiosData>("session", obj)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("TOKEN@WEBCARS", token);
        setToken(token);
        const toNavigate = location.state?.from?.pathname || '/';
        toast.success("Usuário logado");
        navigate("/", { replace: true })
      })
      .catch((err: iErrorAxios) => {
        console.log(err);
        toast.error("Email ou senha incorreta")
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
        .patch<IUserReturn>(`users/${user?.id}`, obj)
        .then((response) => {
          console.log(response);
          toast.success("Usuario atualizado com sucesso");
          setUser(response.data);
          setProfile(false);
        })
        .catch((err: iErrorAxios) => {
          console.log(err);
          // toast.error("Fail to update user");
        });
    }
  };

  const editAdress = (obj: FieldValues) => {
    if (token) {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      instance
        .patch<IUserReturn>(`adress/${user?.address.id}`, obj)
        .then((response) => {
          console.log(response);
          toast.success("Enderesso atualizado com sucesso");
          // setUser(response.data);
          // setProfile(false);
        })
        .catch((err: iErrorAxios) => {
          console.log(err);
          toast.error("Fail to update adress");
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
          setLogin(false);
          setToken("");
          localStorage.setItem("TOKEN@WEBCARS", "");
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
        const { data } = await instance.get<IUserReturn>("users/infos");
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
          const { data } = await instance.get<IUserReturn>("users/infos");
          setUser(data);
        } catch (err) {
          localStorage.clear();
          console.log(err);
        }
      }
    };
    loadUser();
  }, [token]);


  const logout = () => {
    window.localStorage.removeItem("TOKEN@WEBCARS")
    const toNavigate = location.state?.from?.pathname || '/'
    navigate(toNavigate, { replace: true })
    window.location.reload()
  }

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
        logout,
        postLogin,
        deleteProfile,
        onSubmitSendEmail,
        onSubmitResetPassword,
        resetToken,
        createUser,
        editProfile,
        editAdress
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
