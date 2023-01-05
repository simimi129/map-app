import classes from "./List.module.css";
import { useState, useEffect, createRef } from "react";
import PlaceDetails from "../place-details/PlaceDetails";

function List({ places, childClicked, isLoading }) {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  function selectType({ target }) {
    setType(target.value);
  }

  function selectRating({ target }) {
    setRating(target.value);
  }

  return (
    <div className={classes["list-container"]}>
      <h4 className={classes.h4}>
        Restaurants, Hotels and Attractions around you
      </h4>
      {isLoading ? (
        <div className={classes.loading}>Loading...</div>
      ) : (
        <>
          <div className={classes.select}>
            <label className={classes.label} htmlFor="type">
              Type
            </label>
            <select name="type" id="type" value={type} onChange={selectType}>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
            <label className={classes.label} htmlFor="rating">
              Rating
            </label>
            <select
              name="rating"
              id="rating"
              value={rating}
              onChange={selectRating}
            >
              <option value={0}>All</option>
              <option value={1}>1 Star</option>
              <option value={2}>2 Star</option>
              <option value={3}>3 Star</option>
              <option value={4}>4 Star</option>
              <option value={4.5}>4.5 Star</option>
            </select>
          </div>
          <div className={classes.list}>
            {places?.map(
              (place, i) =>
                place.name && (
                  <PlaceDetails
                    place={place}
                    key={i}
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                  />
                )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default List;
