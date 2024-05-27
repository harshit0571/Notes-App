// Card.tsx

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

interface Props {
  note: string;
  date: string;
  editing: boolean;
  color: string;
  index: number;
}
interface NoteInterface {
  id: string;
  note: string;
  [key: string]: any;
}
const Card = ({ note, date, editing, color, index }: Props) => {
  const [isEditing, setIsEditing] = useState(editing || note === "");
  const [text, setText] = useState(note); // Initialize text with an empty string
  const { notes, setNotes } = useContext(AuthContext);

  console.log(note, "d");

  const updateTask = async (updatedNote: NoteInterface) => {
    const taskDocRef = doc(db, "tasks", updatedNote.id);
    console.log(taskDocRef, "d");
    await updateDoc(taskDocRef, updatedNote);
  };
  const deleteTask = async (taskId: string) => {
    const taskDocRef = doc(db, "tasks", taskId);
    console.log(taskDocRef, "delete");
    await deleteDoc(taskDocRef)
      .then((d) => {
        console.log(d, "d");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSaveClick = () => {
    const updatedNotes = [...notes];
    updatedNotes[index].note = text;
    setNotes(updatedNotes);
    updateTask(updatedNotes[index]);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    const updatedNotes = [...notes];
    const id = updatedNotes[index].id;
    console.log(id, "dnj");
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    deleteTask(id);
  };

  return (
    <div
      className={
        "relative w-[250px] p-4 min-h-[200px] overflow-scroll pt-6 rounded-2xl flex flex-col justify-between group gap-4 h-[250px] " +
        color
      }
    >
      <div className="overflow-auto h-[70%] max-h-[150px]">
        {isEditing ? (
          <textarea
            value={text}
            onChange={handleInputChange}
            className={
              "w-full p-2 rounded min-h-[150px] outline-none border-blue-200 " +
              color
            }
          />
        ) : (
          <p>{text}</p>
        )}
      </div>
      <div className="flex justify-between h-max items-baseline">
        <p>{date.split("T")[0]}</p>
        <div className="w-max flex space-x-2">
          <button
            onClick={handleDeleteClick}
            className="h-max w-max bg-black text-xl text-white p-1 px-3 rounded-full transition-all hover:bg-slate-100 hover:text-black opacity-0 group-hover:opacity-100"
          >
            <i className="fa fa-trash text-lg" aria-hidden="true"></i>
          </button>
          <button
            onClick={isEditing ? handleSaveClick : handleEditClick}
            className="h-max w-max bg-black text-xl text-white p-1 px-3 rounded-full transition-all hover:bg-slate-100 hover:text-black"
          >
            {isEditing ? (
              <i className="fa fa-check text-lg" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-pencil text-lg" aria-hidden="true"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
