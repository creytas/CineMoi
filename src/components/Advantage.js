import responsive from '../img/icons/PV_Benefits_Devices_UPDATED.png'
import dataSaver from '../img/icons/PV_Benefits_DataSaver.png'
import easyDownload from '../img/icons/PV_Benefits_Download_UPDATED.png'
import cheap from '../img/icons/PV_Benefits_DataSaver.png'
const Advantage = () => {
    return (
        <div className = "page page--background">
            <div className="advantage">
                <img src={dataSaver} alt="data saver"/>
                <p>
                    <h2><em>Consommez moins</em> de DATA pour plus de QUALITE</h2>
                </p>
            </div>
            <div>
                <img src={easyDownload} alt=" a good movie download tool"/>
            </div>
            <div>
                <img src={responsive} alt="responsive"/>
            </div>
            <div>
                <img src={cheap} alt="less expensive"/>
            </div>            
        </div>
    );
}

export default Advantage;
