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
  useEffect(() => {
    const loadUser = async () => {

      if (token) {
        try {
          instance.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await instance.get<IUser>("users");
          setUser(data);
        } catch (err) {
          console.log(err);
          localStorage.clear();
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
        postLogin
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
