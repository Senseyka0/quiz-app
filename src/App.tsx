import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Settings from "./pages/Settings/Settings";

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
