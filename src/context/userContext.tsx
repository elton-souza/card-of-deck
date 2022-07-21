import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContextType } from "../types/user";

interface userProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>(null as any);

export function UserProvider({ children }: userProviderProps) {

  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const newUser = (name: string) => {
    if (name.length > 0) {
      localStorage.setItem('user', JSON.stringify(name))
      setUser(name);
      navigate("/cards");
    }
  };

  const logout = () => {
    setUser("");
    localStorage.removeItem('user');
    localStorage.removeItem('cards');
    navigate("/");
  }

  useEffect(()=>{
    const recoveredUser = localStorage.getItem('user');
    if(recoveredUser){
      setUser(JSON.parse(recoveredUser));
    }
  },[])

  return (
    <UserContext.Provider value={{ user, newUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}
