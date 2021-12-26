import Navigation from "../../components/navigation/navigation";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getFilm } from "../../store/slice/filmSlice";

const FilmDetails = _ => {
  const router = useRouter();
  const id = router.query.title;

  const dispatch = useDispatch();
  const { film } = useSelector(state => state, shallowEqual);

  const loading = film.loading;
  const data = film.film;

  useEffect(() => {
    dispatch(getFilm(id));
  }, [id]);

  if (loading === "pending") return "loading!";
  if (loading === "rejected") return "Error!";

  return (
    <>
      <Navigation />

      <section className="film">
        <h1>{data.title}</h1>
      </section>
    </>
  );
};

export default FilmDetails;
