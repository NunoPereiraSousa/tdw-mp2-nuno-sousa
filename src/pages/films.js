import Navigation from "../components/navigation/navigation";
import Header from "../components/headers/header";
import FilmsCard from "../components/films/filmCard";
import Subheader from "../components/headers/subheader";
import Footer from "../components/footer/footer";
import SkeletonLoading from "../components/loading/SkeletonLoading";

import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllFilms } from "../store/slice/starWarsSlice";

const Films = _ => {
  const dispatch = useDispatch();
  const { films } = useSelector(state => state, shallowEqual);

  useEffect(() => {
    dispatch(getAllFilms());
  }, []);

  const html = _ => {
    if (films.loading === "rejected") return "Error!";
    if (films.loading === "pending") {
      return [1, 2, 3, 4, 5, 6].map(item => <SkeletonLoading key={item} />);
    }
    if (films.loading === "fulfilled") {
      return films.films.map(film => (
        <FilmsCard
          key={film.episode_id}
          id={film.episode_id}
          title={film.title}
          date={film.release_date}
          director={film.director}
          producer={film.producer}
        />
      ));
    }
  };

  return (
    <>
      <Navigation />

      <section className="hero">
        <Header title="Films" />
      </section>

      <section className="home__films">
        <div className="home__films__grid">{html()}</div>
      </section>

      <Footer />
    </>
  );
};

export default Films;
