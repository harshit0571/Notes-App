import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user, "home");
  return (
    <div className="flex w-full h-full">
      <Sidebar />
    </div>
  );
};

export default Home;
