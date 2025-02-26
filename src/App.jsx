
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "../components/footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
