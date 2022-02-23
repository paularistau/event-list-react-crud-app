import React, { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SUBSCRIBE_GET,
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
} from "./services";
import { IEventSubscribed } from "./types/types";

interface IUser {
  role?: string[];
}

export interface Idata {
  email: string;
  id: number;
  name: string;
  role?: string;
  username: string;
  user?: IUser;
  subscribedEvents: IEventSubscribed[];
  src: string;
}

interface IUserContext {
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => void;
  data: Idata | undefined;
  error: any;
  loading: boolean;
  login: boolean;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserStorage = ({ children }: any) => {
  const [data, setData] = useState<Idata>();
  const [login, setLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function fetchUserEvents() {
    if (data?.user) {
      const { url, options } = SUBSCRIBE_GET();
      const response = await fetch(url, options);
      const json = await response.json();

      setData({ ...data, subscribedEvents: json });
    }
  }

  async function getUser(token: string) {
    const { url, options } = USER_GET();
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);

    fetchUserEvents();
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/");
    } catch (err: any) {
      setError(err.message.toString());
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = useCallback(
    async function () {
      setData(undefined);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
