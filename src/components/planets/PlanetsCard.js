const PlanetsCard = ({
  type,
  name,
  rotationPeriod,
  orbitalPeriod,
  diameter,
  climate,
  gravity,
  terrain,
  surfaceWater,
  population
}) => {
  const setHeader = _ => {
    switch (type) {
      case "name":
        return {
          header: "Name",
          value: name
        };

      case "rotationPeriod":
        return {
          header: "Rotation Period",
          value: rotationPeriod
        };

      case "orbitalPeriod":
        return {
          header: "Orbital Period",
          value: orbitalPeriod
        };

      case "diameter":
        return {
          header: "Diameter",
          value: diameter
        };

      case "climate":
        return {
          header: "Climate",
          value: climate
        };

      case "gravity":
        return {
          header: "Gravity",
          value: gravity
        };

      case "terrain":
        return {
          header: "Terrain",
          value: terrain
        };

      case "surfaceWater":
        return {
          header: "Surface Water",
          value: surfaceWater
        };

      case "population":
        return {
          header: "Population",
          value: population
        };

      default:
        return "Unknown Data";
    }
  };

  return (
    <div className="planets__grid__card">
      <h4 className="planets__grid__card__header">{setHeader().header}</h4>
      <p
        className="planets__grid__card__label"
        style={{ color: setHeader().header === "Name" ? "#f7eb1f" : "#ffffff" }}
      >
        {setHeader().value}
      </p>
    </div>
  );
};

export default PlanetsCard;
