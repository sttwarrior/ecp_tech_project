import React, { ReactNode, createContext } from 'react';
import { useGetAuthorization } from '../../services/query';
import { ProgressCircle } from '@adobe/react-spectrum'
import "../index.css";
import { renderErrorState } from '../helpers';

// Set the API key here or on your browser's session storage
const API_KEY = sessionStorage.getItem("ECP_API_KEY");

interface AuthContextProps {
  auth: string | undefined;
}

export const AuthContext = createContext<AuthContextProps>({ auth: undefined });

export const AuthProvider = ({ children }: {children: ReactNode}) => {
  const { authToken, error, isLoading } = useGetAuthorization(API_KEY);

  if(isLoading) {
    return (
      <div className="absoluteCenter">
        <ProgressCircle aria-label="Loading…" isIndeterminate />
      </div>
    );
  }

  if(!authToken || error) {
    return renderErrorState("Authorization Error", "Please check your API key and try again")
  }
  
  return (
    <AuthContext.Provider value={{ auth: authToken }}>
      { children }
    </AuthContext.Provider>
  );
};