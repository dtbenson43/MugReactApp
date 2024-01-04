import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import useApiClients from '../ApiProvider/useApiClients';
import { AccessTokenResponse, InfoResponse, LoginRequest } from '@/api';
import { AxiosResponse } from 'axios';

// // Define the shape of the user data
// interface User {
//   id: string;
//   name: string;
//   // ... other user fields
// }

// Define the shape of the context data
interface UserContextData {
  user: InfoResponse | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  checkUserStatus: () => void;
  login: (loginRequest: LoginRequest) => Promise<AxiosResponse<AccessTokenResponse, unknown> | null>; // Add this line
  logout: () => Promise<void>
}

interface UserProviderProps {
  children: ReactNode;
}

// Create the user context
export const UserContext = createContext<UserContextData | undefined>(undefined);

// UserProvider component
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<InfoResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { mugClient } = useApiClients();

  const checkUserLoggedIn = useCallback(async () => {
    setIsLoading(true);
    try {
      // Replace this with your actual API call
      const response = await mugClient.manageInfoGet();
      console.log(response)
      setUser(response.data);
    } catch (error) {
      // do nothing
    } finally {
      setIsLoading(false);
    }
  }, [mugClient]);

  const login = useCallback(async (loginRequest: LoginRequest) => {
    setIsLoading(true);
    let prom = null;
    try {
      // Replace this with your actual login API call
      prom = mugClient.loginPost(true, false, loginRequest);
      await prom;
      setUser({ email: loginRequest.email });
    } catch (error) {
      console.error('Login error', error);
    } finally {
      setIsLoading(false);
    }
    return prom;
  }, [mugClient]);

  const logout = useCallback(async () => {
    setUser(null);
  }, []);

  useEffect(() => {
    checkUserLoggedIn();
  }, [checkUserLoggedIn]);

  return (
    <UserContext.Provider value={{ user, isLoading, isLoggedIn: !!user, checkUserStatus: checkUserLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
