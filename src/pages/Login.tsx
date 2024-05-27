import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log("login page");
    if (user) {
      navigation("/");
    }
  }, [user]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((user) => {
        console.log(user);
        navigation("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[20%] h-auto flex flex-col items-center justify-around text-center py-5 rounded-lg shadow-lg bg-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-white">NOTES</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <input
            type="text"
            placeholder="Email"
            className="w-3/4 p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-3/4 p-2 mb-5 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-3/4 py-2 bg-slate-600 text-white font-semibold rounded hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <p className="mt-5 text-gray-400">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-500 hover:text-indigo-400">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
