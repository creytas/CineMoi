import Button from "../components/Button";
import ShowCard from "../components/ShowCard";

const Show = ({ shows, icon, title }) => {
  return (
    <div className="shows-band">
      <h2 className="shows-band__title">
        <img src={icon} alt={title} />
        {title.toUpperCase()}
      </h2>
      <div className="shows-slide">
        {shows.map((show) => {
          return <ShowCard show={show} />;
        })}
      </div>
      <Button width="10%" text="VOIR PLUS" bgColor="#9cbdf3" color="#202732" />
    </div>
  );
};

export default Show;
