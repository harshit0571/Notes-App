import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

interface AuthContextType {
  user: any;
  setUser: (user: any) => void;
  notes: any;
  setNotes: any;
}

export const AuthContext = createContext<AuthContextType | any>(undefined);
interface props {
  children: ReactNode;
}

const AuthProvider = ({ children }: props) => {
  const [user, setUser] = useState<any>(null);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        //console.log(user, uid, "hello");
        setUser(user);
      } else {
        console.log("user, uid");
      }
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (user) {
        const q = query(collection(db, "tasks"), where("uid", "==", user?.uid));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot, "qwerty");
        const notesArray: any = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          notesArray.push(doc.data());
        });
        setNotes(notesArray);
        console.log(notes);
      }
    };
    getData();
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, setUser, notes, setNotes }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
