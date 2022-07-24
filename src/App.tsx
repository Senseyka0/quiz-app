import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Content from "./layouts/Content";

import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Settings from "./pages/Settings/Settings";

const App = () => {
  return (
    <>
      <Header />

      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Content>
    </>
  );
};

export default App;
