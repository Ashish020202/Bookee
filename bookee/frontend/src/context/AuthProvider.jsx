import React, { useContext } from "react"
import { createContext } from "react";
import { useState } from "react";


export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const intialUser = localStorage.getItem('Users')

  const [Authuser, setAuthuser] = useState(
    intialUser?JSON.parse(intialUser):undefined
  );

  return (
    <AuthContext.Provider value={[Authuser, setAuthuser ]}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth= () =>useContext(AuthContext);


