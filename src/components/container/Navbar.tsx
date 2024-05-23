const Navbar = () => {
  return (
    <div className="w-full h-[8vh] flex justify-between px-2 items-center">
      <input
        type="text"
        placeholder="search"
        className="w-[80%] md:w-[40%] h-[70%] p-1 outline-none focus:bg-slate-100 rounded-lg px-2"
      />
      <div className="w-max h-max ">
        <div className="bg-orange-400 h-[30px] w-[30px]  min-h-[25px] min-w-[25px]  text-xl rounded-full transition-all hover:bg-gray-100 text-center pt-[0.9] text-white">
          H
        </div>
      </div>
    </div>
  );
};

export default Navbar;
