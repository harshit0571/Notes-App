import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Sidebar from "../components/sidebar/Sidebar";
import Container from "../components/container/Container";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user, "home");
  return (
    <div className="flex w-full h-full flex-col md:flex-row gap-3 md:gap-0">
      <Sidebar />
      <Container />
    </div>
  );
};

export default Home;
