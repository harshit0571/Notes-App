import Navbar from "./Navbar";
import Notes from "./Notes";

const Container = () => {
  return (
    <div className="w-screen h-screen overflow-auto ">
      <Navbar />
      <Notes />
    </div>
  );
};

export default Container;
