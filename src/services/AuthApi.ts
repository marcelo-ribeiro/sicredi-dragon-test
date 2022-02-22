import { IUser } from "models/IUser";

const tokenKey = "@sicredi:token";

const getToken = () => {
  const token = localStorage.getItem(tokenKey);
  return token ? token : null;
};

const setToken = (token: string) => {
  localStorage.setItem(tokenKey, token);
};

const removeToken = () => {
  localStorage.removeItem(tokenKey);
};

const signin = async (signinData: {
  email: string;
  password: string;
}): Promise<{ user: IUser; token: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        signinData.email === "sicredi@teste.com.br" &&
        signinData.password === "123456"
      ) {
        setToken("exemplodetoken");
        resolve({ user: { id: "1", ...signinData }, token: "exemplodetoken" });
      } else {
        reject({ message: "Usuário ou senha inválidos" });
      }
    }, 300);
  });
};

const signout = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    removeToken();
    setTimeout(resolve, 300);
  });
};

export const AuthApi = {
  getToken,
  setToken,
  removeToken,
  signin,
  signout,
};
