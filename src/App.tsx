import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Settings from "./Pages/Settings/Settings";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Route path="/Home" element={<Home />} />
      <Route path="/Quiz" element={<Quiz />} />
      <Route path="/Settings" element={<Settings />} />
    </div>
  );
};

export default App;
