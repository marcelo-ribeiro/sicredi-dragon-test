import { IUser } from "models/IUser";

const getCurrentUser = (): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: "1", email: "sicredi@teste.com" });
    }, 300);
  });
};

export const UserApi = {
  getCurrentUser,
};
