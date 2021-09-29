import pinIcon from "../img/icons/3643743-hook-mark-needle-pin-pricker_113398.svg";
import bandeAnnonce from "../img/icons/movie-play-button_icon-icons.com_56260.svg";
import moreInfo from "../img/icons/4213434-control-list-menu-more-options_115397.svg";

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <div>
        <img
          src={"https://image.tmdb.org/t/p/original/" + show.backdrop_path}
          alt="movie"
        />
      </div>
      <div className="show-card--transparent"></div>
      <div className="show-card__details">
        <div className="show-card__options">
          <img
            src={"https://image.tmdb.org/t/p/original/" + show.poster_path}
            alt={show.title}
            className="alternate-poster"
          />
          <div className="show-card__button">
            <a href="#bande" title="Voir la Bande Annonce">
              <img
                src={bandeAnnonce}
                alt="Voir la Bande Annonce"
                className="bande-annonce-img"
              />
            </a>
            <a href="#pin" title="Ajouter a ma Playlist">
              <img
                src={pinIcon}
                alt="add to your playlist"
                className="more-info-img"
              />
            </a>
            <a href="#more" title="Plus d'Info">
              <img src={moreInfo} alt="Plus d'Info" className="more-info-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
