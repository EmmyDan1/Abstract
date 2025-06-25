import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dasboard";
import Login from "./pages/Login";
import HelpCenter from "./pages/HelpCenter";
import ContactSupport from "./pages/ContactSupport";
import Footer from "./components/layout/Footer";
import FrontPage from "./pages/FrontPage";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideFooterRoutes = ["/dashboard"];
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/" element={<HelpCenter />} />
        <Route path="/contactsupport" element={<ContactSupport />} />
        <Route path="/frontpage" element={<FrontPage />} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
