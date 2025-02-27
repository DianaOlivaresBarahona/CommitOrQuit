import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "./stylesheet/navbar.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Auth from "./components/Auth";  
import Profile from "./pages/Profile"; 
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />  
        <Route path="/profile" element={<Profile />} />  
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
