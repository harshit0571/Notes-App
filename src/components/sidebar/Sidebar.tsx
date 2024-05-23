import { useState } from "react";
import Colors from "./Colors";

const Sidebar = () => {
  const [colors, setColors] = useState(false);
  return (
    <div className="w-screen mt-3 md:mt-0 h-max align-baseline flex-row md:w-max px-4 md:h-screen flex md:flex-col border-r-2 border-slate-100 text-center justify-start gap-2 md:gap-10 items-center">
      <p className="text-xl w-max font-semibold h-max md:mt-3">Notes</p>
      <div className="flex md:flex-col items-center gap-5">
        <button
          className="h-max w-max bg-black text-xl text-white p-1 px-3 rounded-full transition-all hover:bg-slate-100 hover:text-black"
          onClick={() => {
            setColors(!colors);
          }}
        >
          +
        </button>
        <div
          className={`transition-opacity duration-500 ${
            colors ? "opacity-100" : "opacity-0"
          }`}
        >
          {colors && <Colors />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
