import classes from "./Map.module.css";
import GoogleMapReact from "google-map-react";

function Map({
  coordinates,
  places,
  setCoordinates,
  setBounds,
  setChildClicked,
}) {
  function handleMapChange({ center: { lat, lng }, marginBounds: { ne, sw } }) {
    setCoordinates({ lat: lat, lng: lng });
    setBounds({ ne: ne, sw: sw });
  }

  return (
    <div className={classes["map-container"]}>
      {coordinates ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBN70u6szTA6sBKGy4_BC_Dsd9lQr8LroA" }}
          defaultCenter={{ lat: 0, lng: 0 }}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={handleMapChange}
          onChildClick={(child) => setChildClicked(child)}
        >
          {places?.map((place, i) => (
            <div
              className={classes["marker-container"]}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              <div className={classes.card}>
                <span>{place.name}</span>
                <div
                  className={classes.img}
                  style={{
                    backgroundImage: `url(${
                      place.photo
                        ? place.photo.images.small.url
                        : "https://i.pinimg.com/originals/0e/b9/8b/0eb98b8677f20999ec1bc6f9afe88bdc.jpg"
                    })`,
                  }}
                ></div>
                <div className={classes.rating}>{Number(place.rating)}</div>
              </div>
            </div>
          ))}
        </GoogleMapReact>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default Map;
