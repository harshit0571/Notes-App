// Card.tsx

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

interface Props {
  note: string;
  date: string;
  editing: boolean;
  color: string;
  index: number;
}

const Card = ({ note, date, editing, color, index }: Props) => {
  const [isEditing, setIsEditing] = useState(editing || note === "");
  const [text, setText] = useState(""); // Initialize text with an empty string
  const { notes, setNotes } = useContext(AuthContext);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSaveClick = () => {
    // Create a copy of the notes array
    const updatedNotes = [...notes];
    // Update the note at the specified index with the new text
    updatedNotes[index].note = text;
    // Update the state with the new notes array
    setNotes(updatedNotes);
    // Set editing mode to false
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    // Create a copy of the notes array
    const updatedNotes = [...notes];
    // Remove the note at the specified index
    updatedNotes.splice(index, 1);
    // Update the state with the new notes array
    setNotes(updatedNotes);
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
        <p>{date}</p>
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
