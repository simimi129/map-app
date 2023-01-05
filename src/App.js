import { useEffect, useState } from "react";
import { getPlacesData } from "./api";
import classes from "./App.module.css";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.body}>
        <List
          places={places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
        <Map
          coordinates={coordinates}
          places={places}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          setChildClicked={setChildClicked}
        />
      </div>
    </div>
  );
}

export default App;
