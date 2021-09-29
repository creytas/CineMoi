import logo from "../img/icons/cinema_popcorn_icon-icons.com_66128.svg";
import news from "../img/icons/4124816-journal-news-newsletter-newspaper-publication_113895.svg";
import agenda from "../img/icons/eventcalendarsymbol_79791foot.svg";
import boxOffice from "../img/icons/video-camera-svgrepo-com.svg";
import newsletter from "../img/icons/emailbackoutlinedenvelopeinterfacesymbol_79828.svg";
import forum from "../img/icons/3643728-balloon-chat-conversation-speak-word_113413.svg";
import aboutUs from "../img/icons/popcorn-svgrepo-comfoot.svg";
import contactUs from "../img/icons/3643727-balloon-message-speak-speaking-word_113427.svg";
import facebook from "../img/icons/fb_icon-icons.com_65534.svg";
import twitter from "../img/icons/twitter_icon-icons.com_65536.svg";
import insta from "../img/icons/instagram_icon-icons.com_65535.svg";
import youtube from "../img/icons/youtube_icon-icons.com_65537.svg";

const Footer = () => {
  return (
    <div className="page footer-band">
      <div className="footer-brand__container">
        <img src={logo} alt="cinemoi logo" className="footer-logo" />
        <span>CINEMOI</span>
      </div>
      <div>
        <div className="footer__info">
          <p>
            <h3>NOUS</h3>
            <ul className="list">
              <li>
                <a href="#newsletter">
                  <img src={newsletter} alt="newsletter" />
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#forum">
                  <img src={forum} alt="forum" />
                  Forum - Espace Membres
                </a>
              </li>
              <li>
                <a href="#us">
                  <img src={aboutUs} alt="about us" />
                  Qui sommes-nous
                </a>
              </li>
              <li>
                <a href="#contact">
                  <img src={contactUs} alt="contact us" />
                  Contactez-nous
                </a>
              </li>
            </ul>
          </p>
          <p>
            <h3>CINEMA</h3>
            <ul className="list">
              <li>
                <a href="#actu">
                  <img src={news} alt="news" />
                  Actus
                </a>
              </li>
              <li>
                <a href="#boxoffice">
                  <img src={boxOffice} alt="box-office" />
                  Box-Offices
                </a>
              </li>
              <li>
                <a href="#cine">
                  <img src={agenda} alt="agenda" />
                  Votre Agenda
                </a>
              </li>
            </ul>
          </p>
          <p>
            <h3>RESEAUX SOCIAUX</h3>
            <ul className="list">
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="facebook" /> Facebook
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="twitter" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={insta} alt="instagram" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={youtube} alt="youtube" />
                  Youtube
                </a>
              </li>
            </ul>
          </p>
        </div>
        <div className="footer__legal">
          © Copyright Imagin'Soft 2021 - Tous droits reserves.
        </div>
      </div>
    </div>
  );
};

export default Footer;
