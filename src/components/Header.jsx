import Navbar from "./Navbar";

const Header = ({ showFavorite, setShowFavorite }) => {
  return (
    <header>
      <Navbar showFavorite={showFavorite} setShowFavorite={setShowFavorite} />
    </header>
  );
};

export default Header;
