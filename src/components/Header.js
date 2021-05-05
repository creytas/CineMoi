import logo from "../img/icons/cinema_popcorn_icon-icons.com_66128.svg"
import login from "../img/icons/3643745-human-man-people-person-profile_113435.svg"
import notification from "../img/icons/3643784-bell-notification-notify-reminder-ring_113451.svg"
import cart from "../img/icons/3643737-cart-drop-shop-shopping-trolly_113425.svg"
import lang from "../img/icons/wondicon-ui-free-website_111210.svg"
import search from "../img/icons/3643762-find-glass-magnifying-search-zoom_113420.svg"
const Header = () => {
    return (
        <div className = "page page--dark-background">
            <img src = {logo} alt = "cinemoi logo" className = "header__logo"/>
            <div className = "header__description">
                <h1>CINEMOI</h1>
                <small>Faites de tout lieu un <strong>Ciné</strong>...</small>
            </div>
            <div className = "nav-container">
                <div className = "nav__items">
                    <img src = {search} alt="search for a movie" className = "header__icons"/>
                </div>
                <div className = "nav__items">
                    <img src = {lang} alt="select a language" className = "header__icons"/>
                    <select name="lang" id="lang">
                        <option value="" selected>FR </option>
                        <option value="">EN</option>
                    </select>
                </div>
                <div className = "nav__items">
                    <img src = {cart} alt="movies on my cart" className = "header__icons"/>
                </div>
                <div className = "nav__items">
                    <img src = {notification} alt="notifications" className = "header__icons"/>
                </div>
                <div className = "nav__items">
                    <img src = {login} alt="user login" className = "header__icons"/>
                </div>
            </div>     
        </div>
    );
}

export default Header;
