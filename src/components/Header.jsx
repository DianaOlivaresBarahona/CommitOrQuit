import Navbar from "./Navbar";
import "../stylesheet/header.css";

const Header = ({ showFavorite, setShowFavorite }) => {
  return (
    <header>
      <Navbar showFavorite={showFavorite} setShowFavorite={setShowFavorite} />
    </header>
  );
};

export default Header;
