import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import MenuModel from "./MenuModel.jsx";
import ModelPart1 from "./ModelPart1.jsx";
import ModelPart2 from "./ModelPart2.jsx";
import ModelPart3 from "./ModelPart3.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/BracketorMountingArm " element={<ModelPart1 />}></Route>
        <Route path="/BasePlatewithBracket" element={<ModelPart2 />}></Route>
        <Route path="/GENEVAwheel" element={<ModelPart3 />}></Route>
        <Route path="/model" element={<MenuModel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
