import Navigation from "../../components/navigation/navigation";
import cover from "../../../public/assets/cover2.jpg";
import rick from "../../../public/assets/rickMccallum.jpg";
import gary from "../../../public/assets/garyKurtz.jpg";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getFilm } from "../../store/slice/filmSlice";
import Footer from "../../components/footer/footer";
import FilmDetailsCard from "../../components/films/FilmDetailsCard";
import FilmSecondaryInfo from "../../components/films/filmSecondaryInfo";

const FilmDetails = (_) => {
  const router = useRouter();
  const id = router.query.title;

  const dispatch = useDispatch();
  const { film } = useSelector((state) => state, shallowEqual);

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
        <figure className="films__media">
          <img
            src={cover.src}
            alt={data.title}
            className="films__media__image"
          />
        </figure>

        <div className="films__info">
          <h2 className="films__info__header">{data.title}</h2>

          <p className="films__info__crawl">
            <span>Opening Crawl: </span>
            {data.opening_crawl}
          </p>
        </div>
      </section>

      <section className="film__details">
        <span className="film__details__line"></span>

        <div className="film__details__producers">
          <div className="film__details__producers__wrapper">
            <figure className="film__details__media">
              <img
                src={rick.src}
                alt={data.title}
                className="film__details__media__image"
              />
            </figure>
            <div className="film__details__producers__box">
              <h4 className="film__details__producers__header">
                {data.producer}
              </h4>
              <p className="film__details__producers__desc">
                Richard McCallum (born August 22, 1954) is an American film
                producer. He is mostly known for his work on The Young Indiana
                Jones Chronicles as well as the Star Wars Special Editions and
                prequel trilogy. He is best known for his frequent
                collaborations with American producer George Lucas, though he
                was also a long-time producer for British television playwright
                Dennis Potter.
              </p>

              <a className="film__details__producers__button">Read more</a>
            </div>
          </div>

          <div className="film__details__producers__wrapper">
            <figure className="film__details__media">
              <img
                src={gary.src}
                alt={data.title}
                className="film__details__media__image"
              />
            </figure>

            <div className="film__details__producers__box">
              <h4 className="film__details__producers__header">
                {data.producer}
              </h4>
              <p className="film__details__producers__desc">
                Richard McCallum (born August 22, 1954) is an American film
                producer. He is mostly known for his work on The Young Indiana
                Jones Chronicles as well as the Star Wars Special Editions and
                prequel trilogy. He is best known for his frequent
                collaborations with American producer George Lucas, though he
                was also a long-time producer for British television playwright
                Dennis Potter.
              </p>

              <a href="" className="film__details__producers__button">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FilmDetails;
