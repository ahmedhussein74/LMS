import "../css/App.css";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Navbar from "../layouts/Navbar";
import Login from "../components/forms/Login";
import Signup from "../components/forms/Signup";
import { Route, Routes } from "react-router-dom";
import Places from "../pages/Places";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/places" element={<Places />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
