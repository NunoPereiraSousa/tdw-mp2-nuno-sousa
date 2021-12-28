import cover from "../../../public/assets/cover2.jpg";
import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const ROUTE_FILM_ID = "films/[id]";

const FilmCard = ({ id, title, date, director, producer }) => {
  const image = useRef(null);
  const card = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const onMouseEnterHandler = _ => {};

  const onMouseMoveHandler = e => {};

  const ouMouseLeaveHandler = e => {};

  return (
    <Link
      href={{
        pathname: ROUTE_FILM_ID,
        query: { id: id }
      }}
    >
      <div
        className="films__card"
        onMouseEnter={onMouseEnterHandler}
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={ouMouseLeaveHandler}
        ref={card}
      >
        <div className="films__card__wrapper">
          <h5 className="films__card__category">Films</h5>
          <h5 className="films__card__date">{date}</h5>
        </div>
        <h4 className="films__card__title">{title}</h4>
        <div className="films__card__wrapper">
          <h5 className="films__card__producer">
            <span>Producer:</span> {producer}
          </h5>
          <h5 className="films__card__director">
            <span>Director: </span>
            {director}
          </h5>
        </div>

        <figure className="films__card__media" ref={image}>
          <img
            src={cover.src}
            alt="Film Cover"
            className="films__card__media__image"
          />
        </figure>
      </div>
    </Link>
  );
};

export default FilmCard;
