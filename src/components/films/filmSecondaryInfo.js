import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getPlanet } from "../../store/slice/planetSlice";

const FilmSecondaryInfo = ({ data, header }) => {
  const [id, setId] = useState([]);

  console.log(data);

  const fetchPlanetsURLs = planets => {
    planets.forEach(url => {
      getIdFromURL(url);
      console.log(url);

      // axios
      //   .get(url)
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    });
  };

  fetchPlanetsURLs(data);

  const dispatch = useDispatch();
  const { planet } = useSelector(state => state, shallowEqual);

  useEffect(() => {
    dispatch(getPlanet());
  }, []);

  // const getIdFromURL = url => {
  //   const ids = url.split("/")[5];
  //   // setId([...ids]);
  //   // console.log(id);

  //   console.log(ids);
  // };

  return (
    <div className="film__details__card">
      <p className="film__details__card__label">
        <span>{header}: </span> {data}
      </p>
    </div>
  );
};

export default FilmSecondaryInfo;
