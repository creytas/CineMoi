import moviesBackdrop from "../img/screens/fordVferrari.jpeg";
import pinIcon from "../img/icons/3643743-hook-mark-needle-pin-pricker_113398.svg";
import pinedIcon from "../img/icons/3643743-hook-marked-needle-pin-pricker_113398.svg";
import likeIcon from "../img/icons/3643770-favorite-heart-like-likes-love-loved_113432.svg";
import likedIcon from "../img/icons/3643770-favorite-heart-likes-loved_113432.svg";
import commentIcon from "../img/icons/commentblackrectangularspeechbubbleinterfacesymbol_79974.svg";
import release from "../img/icons/eventcalendarsymbol_79791.svg";
import runtime from "../img/icons/circularalarmclock_79953.svg";
import rating from "../img/icons/3643731-bookmark-favorite-rate-rating-star_113418.svg";
import synopsis from "../img/icons/3643768-info-information-letter-mark-sign_113438.svg";
import director from "../img/icons/chair-svgrepo-com.svg";
import casting from "../img/icons/award-svgrepo-com.svg";

const ShowCardDetails = () => {
  return (
    <div className="modal-card page--background">
      <div className="show-detail">
        <div className="detail-option">
          <h2>TITRE DU SHOW</h2>
          <img src={moviesBackdrop} alt="movie" className="backdrop" />
          <div className="option-icons">
            <img src={pinIcon} alt="add to your playlist" />
            <img src={likeIcon} alt="add to your favorite" />
            <img src={commentIcon} alt="comment on this show" />
          </div>
        </div>
        <div className="detail-items">
          <div>
            <h3>
              <img src={release} alt="release" />
              SORTIE :
            </h3>
            <p> 11/11/2001</p>
          </div>
          <div>
            <h3>
              <img src={runtime} alt="synopsis" />
              DUREE :
            </h3>
            <p>2h 33m</p>
          </div>
          <div>
            <h3>
              <img src={rating} alt="synopsis" />
              NOTE :
            </h3>
            <p> 8.0</p>
          </div>
        </div>
      </div>
      <div className="items">
        <div>
          <h3>
            <img src={synopsis} alt="synopsis" />
            SYNOPSIS :
          </h3>
          <p>
            Relate l’histoire vraie qui a conduit l’ingénieur automobile
            visionnaire américain Caroll Shelby à faire équipe avec le pilote de
            course britannique surdoué Ken Miles. Bravant l’ordre établi,
            défiant les lois de la physique et luttant contre leurs propres
            démons, les deux hommes n’avaient qu’un seul but : construire pour
            le compte de Ford Motor Company un bolide révolutionnaire capable de
            renverser la suprématie de l’écurie d’Enzo Ferrari sur le mythique
            circuit des 24 heures du Mans en 1966…
          </p>
        </div>
        <div className="cast">
          <h3>
            <img src={director} alt="casting" />
            REALISATEUR :
          </h3>
        </div>
        <div className="cast">
          <h3>
            <img src={casting} alt="casting" />
            CASTING :
          </h3>
        </div>
      </div>

      <div className="similar-show">
        <h2>SHOW SIMILAIRE</h2>
      </div>
    </div>
  );
};

export default ShowCardDetails;
