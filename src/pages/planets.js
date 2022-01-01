import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getPlanets } from "../store/slice/planetSlice";

import Navigation from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import Header from "../components/headers/header";
import Subheader from "../components/headers/subheader";
import PlanetsSkeleton from "../components/loading/PlanetsSkeleton";
import PlanetsCardWrapper from "../components/planets/PlanetsCardWrapper";

const Planets = (_) => {
  const dispatch = useDispatch();
  const { planets } = useSelector((state) => state, shallowEqual);

  const loading = planets.loading;
  const data = planets.planets;

  useEffect(() => {
    dispatch(getPlanets());
  }, []);

  const html = (_) => {
    if (loading === "rejected") return "Error!";
    if (loading === "pending") {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <PlanetsSkeleton key={item} />
      ));
    }
    if (loading === "fulfilled") {
      return data.map((planet) => (
        <PlanetsCardWrapper
          key={planet.name}
          name={planet.name}
          rotationPeriod={planet.rotation_period}
          orbitalPeriod={planet.orbital_period}
          diameter={planet.diameter}
          climate={planet.climate}
          gravity={planet.gravity}
          terrain={planet.terrain}
          surfaceWater={planet.surface_water}
          population={planet.population}
        />
      ));
    }
  };

  return (
    <>
      <Navigation />

      <section className="hero">
        <Header title="Planets" />

        <span className="hero__line"></span>

        <div className="hero__info">
          <Subheader text="Director • Producer • Writer • Entrepreneur" />

          <Subheader text="May 14, 1944 (age 77)" />

          <Subheader text="(2021), all rights reserved" />
        </div>
      </section>

      <section className="planets">
        <div className="planets__grid">{html()}</div>
      </section>

      <Footer />
    </>
  );
};

export default Planets;
