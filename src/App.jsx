import { BrowserRouter, Routes, Route } from "react-router-dom";
import Members from "./components/page/Main/Members.jsx";
import RootLayout from "./components/layout/RootLayout";
import Recruit from "./components/page/Recruit/Recruit.jsx";
import Project from "./components/page/Project/Project.jsx";
import Login from "./components/page/Login/Login.jsx";
import TopSection from "./components/page/TopSection/TopSection.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Members />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:generation" element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;