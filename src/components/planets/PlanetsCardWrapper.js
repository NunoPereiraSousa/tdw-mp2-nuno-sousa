import PlanetsCard from "./PlanetsCard";

const PlanetsCardWrapper = ({
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
  return (
    <div className="planets__grid__wrapper">
      {/* {html()} */}
      <PlanetsCard type="name" name={name} />
      <PlanetsCard type="rotationPeriod" rotationPeriod={rotationPeriod} />
      <PlanetsCard type="orbitalPeriod" orbitalPeriod={orbitalPeriod} />
      <PlanetsCard type="diameter" diameter={diameter} />
      <PlanetsCard type="climate" climate={climate} />
      <PlanetsCard type="gravity" gravity={gravity} />
      <PlanetsCard type="terrain" terrain={terrain} />
      <PlanetsCard type="surfaceWater" surfaceWater={surfaceWater} />
      <PlanetsCard type="population" population={population} />
    </div>
  );
};

export default PlanetsCardWrapper;
