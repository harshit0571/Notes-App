import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" Component={Home} />
        <Route index path="/register" Component={Register} />
        <Route index path="/login" Component={Register} />
      </Routes>
    </Router>
  );
};

export default App;
