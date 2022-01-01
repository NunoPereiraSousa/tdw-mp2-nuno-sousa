const FilmDetailsCard = ({
  producer,
  date,
  director,
  planets,
  vehicles,
  species,
}) => {
  const validateIfProducerExists = (producer, planets) => {
    if (producer) {
      return (
        <p className="film__details__card__label">
          <span>Producer: </span> {producer}
        </p>
      );
    } else if (planets) {
      return (
        <p className="film__details__card__label">
          <span>Planets: </span> {planets.map((planet) => planet)}
        </p>
      );
    } else if (vehicles) {
      return (
        <p className="film__details__card__label">
          <span>Vehicles: </span> {vehicles.map((vehicle) => vehicle)}
        </p>
      );
    }
  };

  return (
    <div className="film__details__card">
      {validateIfProducerExists(producer, planets)}

      <p className="film__details__card__label">
        {typeof date === undefined ? "" : date}
      </p>

      <p className="film__details__card__label">
        {typeof director === undefined ? "" : director}
      </p>
    </div>
  );
};

export default FilmDetailsCard;
