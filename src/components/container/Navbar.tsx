import { signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, notes, setNotes,  } = useContext(AuthContext);
  const [tempArray, settempArray] = useState(notes);
  const [showSignOut, setShowSignOut] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [FetchOnce, setFetchOnce] = useState(false);
  useEffect(() => {
    if (notes.length > 0 && !FetchOnce || notes.lenght>tempArray.length) {
      settempArray(notes);
      setFetchOnce(true);
    }
  }, [notes]);
  const handleAvatarClick = () => {
    setShowSignOut(!showSignOut);
  };
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Sign out clicked");
  };

  const handleSearchChange = (e: any) => {
    const searchItem = e.target.value.toLowerCase();
    setSearchTerm(searchItem);
    console.log(searchItem, "ddhkskdjs");

    const filteredNotes = tempArray.filter((note: any) =>
      note.note.toLowerCase().includes(searchItem)
    );

    setNotes(filteredNotes);
    console.log(tempArray, searchItem);
  };

  return (
    <div className="w-full h-[8vh] z-50 flex justify-between px-2 bg-white items-center top-0 sticky">
      <input
        type="text"
        placeholder="🔎 search"
        value={searchTerm} // Bind input value to searchTerm state
        onChange={handleSearchChange} // Update searchTerm state on input change
        className="w-[80%] md:w-[40%] h-[70%] p-1 outline-none focus:bg-slate-100 rounded-lg px-2"
      />
      <div className="relative w-max h-max">
        {user && (
          <div
            onClick={handleAvatarClick}
            className="bg-orange-400 h-[30px] w-[30px] min-h-[25px] min-w-[25px] text-xl rounded-full transition-all hover:bg-gray-100 text-center pt-[0.9] text-white cursor-pointer"
          >
            H
          </div>
        )}
        {showSignOut && (
          <button
            onClick={handleSignOut}
            className="absolute right-0 mt-2 bg-red-500 text-white p-2 rounded-lg shadow-lg transition-all hover:bg-red-600 w-max text-center py-1 z-50"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
