"use client"

import { userProfile } from "@/services/authServices";
import { Member } from "@/types/member";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export interface AuthContextValues {
  user: Member | null;
  setUser : Dispatch<SetStateAction<Member | null>>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextValues >({
  user: null,
  setUser: () => {},
  isLoading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Member | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const handleUser = async () => {
      setLoading(true);
      const data = await userProfile();
      setUser(data || null);
      setLoading(false);
    };
    handleUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
