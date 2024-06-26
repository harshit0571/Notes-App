import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import Sidebar from "../components/sidebar/Sidebar";
import Container from "../components/container/Container";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  console.log(user, "home");
  return (
    <div className="flex w-full h-full flex-col md:flex-row md:gap-0">
      <Sidebar />
      <Container />
    </div>
  );
};

export default Home;
