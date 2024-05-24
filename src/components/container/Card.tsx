import { useState } from "react";

interface props {
  notes: string;
  date: string;
  editing: boolean;
}

const Card = ({ notes, date, editing }: props) => {
  const [isEditing, setIsEditing] = useState(editing);
  const [text, setText] = useState(notes);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    // Handle delete action here
    console.log("Delete clicked");
  };

  return (
    <div className="relative w-[250px] p-4 min-h-[200px] overflow-scroll pt-6 bg-red-400 rounded-2xl flex flex-col justify-between group gap-4 h-[250px]">
      <div className="overflow-auto h-[70%] max-h-[150px]">
        {isEditing ? (
          <textarea
            value={text}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-red-400 min-h-[150px] ring-1 ring-white outline-none"
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
