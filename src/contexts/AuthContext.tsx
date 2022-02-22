import React, { createContext, useEffect, useState } from "react";
import { AuthApi } from "services/AuthApi";
import { IUser } from "models/IUser";
import { UserApi } from "services/UserApi";

export interface IAuthContext {
  user: IUser | null;
  signin: (object: { email: string; password: string }) => Promise<void>;
  signout: () => Promise<void>;
  error: string;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContext>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    setIsLoading(true);
    UserApi.getCurrentUser()
      .then(setUser)
      .catch(setError)
      .finally(() => setIsLoading(false));
  };

  const signin = async (signinData: { email: string; password: string }) => {
    const { user } = await AuthApi.signin(signinData);
    setUser(user);
  };

  const signout = async () => {
    await AuthApi.signout();
    setUser(null);
  };

  useEffect(() => {
    if (!AuthApi.getToken()) {
      setIsLoading(false);
    } else {
      fetchUser();
    }
  }, []);

  const value = { user, signin, signout, error, isLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
