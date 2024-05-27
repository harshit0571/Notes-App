// Colors.tsx

import { useContext } from "react";
import { colorsArray } from "./ColorsArray";
import { AuthContext } from "../../context/AuthProvider";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Colors = () => {
  const { notes, setNotes, user } = useContext(AuthContext);
  interface NoteInterface {
    id: string;
    note: string;
    [key: string]: any;
  }
  const pushTask = async (newNote: NoteInterface) => {
    const taskDocRef = doc(db, "tasks", newNote.id);
    await setDoc(taskDocRef, newNote);
  };
  const handleColorClick = async (color: any) => {
    const currentDate = new Date().toISOString().split("T")[0];
    const randomId = generateRandomId();
    const newNote = {
      id: randomId,
      note: "",
      date: currentDate,
      color: color,
      uid: user.uid,
    };

    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    pushTask(newNote);
  };

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  };

  return (
    <div className="flex md:flex-col w-[100%] items-center gap-3 overflow-auto md:overflow-visible">
      {colorsArray.map((color, index) => (
        <button
          key={index}
          className={`h-[25px] w-[25px]  min-h-[25px] min-w-[25px]  text-xl rounded-full transition-all hover:bg-gray-100 ${color} `}
          onClick={() => handleColorClick(color)}
        ></button>
      ))}
    </div>
  );
};

export default Colors;
