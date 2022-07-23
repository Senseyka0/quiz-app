import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Settings from "./Pages/Settings/Settings";

const App = () => {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
