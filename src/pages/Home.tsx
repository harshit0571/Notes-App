import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const Home = () => {
  const {user}=useContext(AuthContext);
  console.log(user,"home")
  return (
    <div>j</div>
  )
}

export default Home