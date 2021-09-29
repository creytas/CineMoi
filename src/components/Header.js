import logo from "../img/icons/cinema_popcorn_icon-icons.com_66128.svg";
import search from "../img/icons/3643762-find-glass-magnifying-search-zoom_113420.svg";

const Header = () => {
  return (
    <div className="page page--background nav-band">
      <img src={logo} alt="cinemoi logo" className="header__logo" />
      <div className="header__description">
        <h1>CINEMOI</h1>
        <small>
          Conjuguez le <strong>Ciné</strong> au personnel...
        </small>
      </div>
      <div className="nav-container">
        <div className="nav__items">
          <input
            type="search"
            name="searchbar"
            id="searchbar"
            placeholder="Ex : Film, Serie, Anime..."
          />
          <img
            src={search}
            alt="search for a movie"
            className="header__icons"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
