import "../css/App.css";
import Home from "../pages/Home";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Login from "../components/forms/Login";
import Signup from "../components/forms/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Login />
      <Signup />
    </>
  );
}

export default App;
