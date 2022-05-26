import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Dimensions from "./pages/Dimensions";
import Attributes from "./pages/Attributes";
import Questions from "./pages/Questions";
import Tdd from "./pages/Tdd";
import Forms from "./pages/Forms";
import Reports from "./pages/Reports";
import Logout from "./pages/Logout";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register/dimensions" element={<Dimensions />} />
          <Route path="/register/attributes" element={<Attributes />} />
          <Route path="/register/questions" element={<Questions />} />
          <Route path="/tdd" element={<Tdd />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
