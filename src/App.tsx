import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dasboard";
import Login from "./pages/Login";
import HelpCenter from "./pages/HelpCenter";
import ContactSupport from "./pages/ContactSupport";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/Hero";
import FrontPage from "./pages/FrontPage";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/" element={<HelpCenter />} />
        <Route path="/contactsupport" element={<ContactSupport />} />
      </Routes> */}

      <div className="">
        <FrontPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
