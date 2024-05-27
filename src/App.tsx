import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" Component={Home} />
        <Route  path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
};

export default App;
