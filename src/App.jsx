import { BrowserRouter, Routes, Route } from "react-router-dom";
import Members from "./components/page/Main/Members.jsx";
import RootLayout from "./components/layout/RootLayout";
import Recruit from "./components/page/Recruit/Recruit.jsx";
import Project from "./components/page/Project/Project.jsx";
import Login from "./components/page/Login/Login.jsx";
import TopSection from "./components/page/TopSection/TopSection.jsx";
import Members13 from "./components/page/Main/Members13.jsx";
import Members12 from "./components/page/Main/Members12.jsx";
import Members11 from "./components/page/Main/Members11.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Members />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members13" element={<Members13 />} />
          <Route path="/members12" element={<Members12 />} />
          <Route path="/members11" element={<Members11 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;