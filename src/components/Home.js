import catalog from "../img/screens/Welcome.png"
const Home = () => {
    return (
        <div className = "page">
            <div className="welcome-text">
                <h2>BIENVENUE SUR CINEMOI</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi pariatur quos blanditiis consequatur rerum voluptatem sed, sit minima odio maxime praesentium cum, adipisci, iste totam veniam qui ut tempore! Delectus?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi pariatur quos blanditiis consequatur rerum voluptatem sed, sit minima odio maxime praesentium cum, adipisci, iste totam veniam qui ut tempore! Delectus?
                </p>
            </div>
            <img src={catalog} alt="catalog" className="welcome-picture"/>
        </div>
    );
}

export default Home;
