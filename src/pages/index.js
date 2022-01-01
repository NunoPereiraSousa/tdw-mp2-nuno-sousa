// import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation/navigation";
import creator from "../../public/assets/creator.png";
import axios from "axios";
import FilmsCard from "../components/films/filmCard";
import Footer from "../components/footer/footer";
import Header from "../components/headers/header";
import Subheader from "../components/headers/subheader";
import SkeletonLoading from "../components/loading/SkeletonLoading";
// import Component from "../classes/Component";
// import gsap from "gsap";
// import { SplitText } from "../utils/SplitText";
// import { calculate, split } from "../utils/text";
// import { each, forEach } from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllFilms } from "../store/slice/starWarsSlice";

export default function Home() {
  // const getFilms = async _ => {
  //   const response = await axios
  //     .get(`https://swapi.dev/api/films/`)
  //     .then(res => res.data.results)
  //     .catch(err => err);

  //   console.log(response);
  //   return response;
  // };

  // console.log(getFilms());

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const response = axios
  //     .get(`https://swapi.dev/api/films/`)
  //     .then(res => {
  //       setData(res.data.results);
  //     })
  //     .catch(err => {
  //       setError(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return "Loading...";
  // if (error) return "Error!";

  const dispatch = useDispatch();
  const { films } = useSelector(state => state, shallowEqual);

  console.log(films);
  useEffect(() => {
    dispatch(getAllFilms());
  }, []);

  const html = _ => {
    if (films.loading === "rejected") return "Error!";
    if (films.loading === "pending") {
      return [1, 2, 3, 4, 5, 6].map(item => <SkeletonLoading key={item} />);
    }
    if (films.loading === "fulfilled") {
      return films.films
        .filter(item => item.episode_id)
        .sort((prev, next) => prev.episode_id - next.episode_id)
        .map(film => (
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
      {/* <p>
        {loading === "pending" || loading === "idle" ? "Loading..." : "Films: "}
      </p>
      <ul>
        {films.map(film => (
          <li key={film.episode_id}>{film.title}</li>
        ))}
      </ul>
      <h1 data-animation="paragraph">Home page</h1>
      <h1 data-animation="paragraph">Home page</h1> */}
      <section className="hero">
        <Header title="George Lucas" />

        <span className="hero__line"></span>

        <div className="hero__info">
          <Subheader text="Director • Producer • Writer • Entrepreneur" />

          <Subheader text="May 14, 1944 (age 77)" />

          <Subheader text="(2021), all rights reserved" />
          {/* <h3 className="hero__info__label">
            Director • Producer • Writer • Entrepreneur
          </h3>

          <h3 className="hero__info__label">May 14, 1944 (age 77)</h3>

          <h3 className="hero__info__label">(2021), all rights reserved</h3> */}
        </div>

        <figure className="hero__media">
          <img
            src={creator.src}
            alt="George Lucas"
            className="hero__media__image"
          />
        </figure>
      </section>

      <section className="home__films">
        <div className="home__films__grid">{html()}</div>
      </section>

      <Footer />
    </>
  );

  // const [load, setLoad] = useState(false);
  // let paragraph;

  // if (typeof window !== "undefined") {
  //   paragraph = document.querySelectorAll("[data-animation='paragraph']");
  // }

  // useEffect(() => {
  //   setLoad(true);

  //   if (load) {
  //     forEach(paragraph, el => {
  //       split({
  //         element: el,
  //         append: true
  //       });
  //       split({
  //         element: el,
  //         append: true
  //       });
  //     });
  //   }

  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         // this.animateIn()

  //         let attribute = entry.target.getAttribute("data-animation");

  //         switch (attribute) {
  //           case "paragraph":
  //             animateIn(entry.target);
  //             break;

  //           default:
  //             break;
  //         }
  //       }
  //     });
  //   });

  //   paragraph.forEach(el => {
  //     if (el) observer.observe(el);
  //   });

  //   return _ => {
  //     paragraph.forEach(el => {
  //       if (!el) {
  //         observer.unobserve(el);
  //         animateOut(el);
  //       }
  //     });
  //   };
  // }, [load]);

  // const animateIn = element => {
  //   let elementLinesSpans;

  //   let timelineIn = gsap.timeline({
  //     delay: 1
  //   });

  //   if (typeof window !== "undefined") {
  //     elementLinesSpans = element.querySelectorAll("span span");
  //   }

  //   each(calculate(elementLinesSpans), (el, index) => {
  //     console.log(el);
  //     timelineIn.fromTo(
  //       el,
  //       {
  //         y: "100%"
  //       },
  //       {
  //         duration: 1,
  //         y: "0%",
  //         ease: "expo.out"
  //       }
  //     );
  //   });
  // };

  // const animateOut = element => {
  //   gsap.set(element, {
  //     autoAlpha: 0
  //   });
  // };
}
