import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase";

interface AuthContextType {
  user: object;
  setUser: (user: object) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
interface props {
  children: ReactNode;
}

const AuthProvider = ({ children }: props) => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user, uid, "hello");
      } else {
        console.log("user, uid");
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
