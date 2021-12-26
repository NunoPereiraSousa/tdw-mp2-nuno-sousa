import Navigation from "../components/navigation/navigation";
import Header from "../components/headers/header";
import FilmsCard from "../components/films/filmCard";
import Subheader from "../components/headers/subheader";
import Footer from "../components/footer/footer";

import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllFilms } from "../store/slice/starWarsSlice";

const Films = _ => {
  const dispatch = useDispatch();
  const { films } = useSelector(state => state, shallowEqual);

  useEffect(() => {
    dispatch(getAllFilms());
  }, []);

  if (films.loading === "rejected") return "Error!";

  return (
    <>
      <Navigation />

      <section className="hero">
        <Header title="Films" />
      </section>

      <section className="home__films">
        <div className="home__films__grid">
          {films.films.map(film => (
            <FilmsCard
              key={film.episode_id}
              id={film.episode_id}
              title={film.title}
              date={film.release_date}
              director={film.director}
              producer={film.producer}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Films;
