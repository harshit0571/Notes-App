import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  return <div>hello</div>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" Component={Home} />
      </Routes>
    </Router>
  );
};

export default App;
