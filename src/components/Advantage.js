import responsive from "../img/icons/PV_Benefits_Devices_UPDATED.png";
import dataSaver from "../img/icons/PV_Benefits_DataSaver.png";
import easyDownload from "../img/icons/PV_Benefits_Download_UPDATED.png";
import cheap from "../img/icons/PV_Benefits_DataSaver.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Advantage = () => {
  return (
    <div className="page page--background advantage-band">
      <h2>
        AVEC <span>CINEMOI</span> VOUS AVEZ LA GARANTIE D'AVOIR ACCES A UN{" "}
        <span>CONTENU DE CHOIX</span> ET DE BENEFICIER DE{" "}
        <span>NOMBREUX AVANTAGES</span>
      </h2>
      <div className="advantage">
        <div className="advantage-card">
          <img src={dataSaver} alt="data saver" />
          <p>
            <h3>
              Suivez vos PROGRAMMES de QUALITES en consommant moins de DATA
            </h3>
          </p>
        </div>
        <div className="advantage-card">
          <img src={easyDownload} alt=" a good movie download tool" />
          <p>
            <h3>
              Telechargez et stoquez facilement vos FAVORIS pour plus de
              PROXIMITE
            </h3>
          </p>
        </div>
        <div className="advantage-card">
          <img src={responsive} alt="responsive" />
          <p>
            <h3>
              Visionnez vos PROGRAMMES sur toute sorte d'ecrans, sans en
              amoindrir la QUALITE
            </h3>
          </p>
        </div>
        <div className="advantage-card">
          <img src={cheap} alt="less expensive" />
          <p>
            <h3>
              PAYEZ MOINS (via plusieurs supports de paiements) et de maniere
              plus SECURISEE
            </h3>
          </p>
        </div>
      </div>
      <Button
        text="Debutez votre AVENTURE..."
        bgColor="#202732"
        color="#9cbdf3"
        onClick={() => console.log("Ouvrir la Showroom")}
      />
    </div>
  );
};

export default Advantage;
