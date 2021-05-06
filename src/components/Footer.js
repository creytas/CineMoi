import logo from "../img/icons/cinema_popcorn_icon-icons.com_66128.svg"
import facebook from "../img/icons/fb_icon-icons.com_65534.svg"
import twitter from "../img/icons/twitter_icon-icons.com_65536.svg"
import insta from "../img/icons/instagram_icon-icons.com_65535.svg"
import youtube from "../img/icons/youtube_icon-icons.com_65537.svg"

const Footer = () => {
    return (
        <div className = "page">
            <img src={logo} alt="cinemoi logo" className="footer-logo"/>
            <div>
                <div className="footer__info">
                    <p>
                        <h3>NOUS</h3>
                        <ul className="list">
                            <li><a href="#newsletter">Newsletter</a></li>
                            <li><a href="#forum">Forum - Espace Membres</a></li>
                            <li><a href="#us">Qui sommes-nous</a></li>
                            <li><a href="#contact">Contactez-nous</a></li>
                        </ul>
                    </p>
                    <p>
                        <h3>CINEMA</h3>
                        <ul className="list">
                            <li><a href="#actu">Actus</a></li>
                            <li><a href="#boxoffice">Box-Offices</a></li>
                            <li><a href="#cine">Votre Agenda</a></li>
                        </ul>
                    </p>
                    <p>
                        <h3>RESEAUX SOCIAUX</h3>
                        <ul className="list">
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook"/> Facebook</a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter"/>Twitter</a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram"/>Instagram</a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="youtube"/>Youtube</a></li>
                        </ul>
                    </p>
                </div>
                <div className="footer__legal">© Copyright Imagin'Soft 2021 - Tous droits reserves.</div>
            </div>

        </div>
    );
}

export default Footer;
