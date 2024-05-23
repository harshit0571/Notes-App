import { colorsArray } from "./ColorsArray";

const Colors = () => {
  return (
    <div className="flex md:flex-col items-center gap-3 overflow-auto md:overflow-visible">
      {colorsArray.map((color, index) => (
        <button
          key={index}
          className={`h-[25px] w-[25px]  min-h-[25px] min-w-[25px]  text-xl rounded-full transition-all hover:bg-gray-100 ${color} `}
        ></button>
      ))}
    </div>
  );
};

export default Colors;
