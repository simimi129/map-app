import classes from "./PlaceDetails.module.css";

function PlaceDetails({ place, selected, refProp }) {
  if (selected)
    refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start" });
  return (
    <div className={classes.place}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${
            place.photo
              ? place.photo.images.medium.url
              : "https://i.pinimg.com/originals/0e/b9/8b/0eb98b8677f20999ec1bc6f9afe88bdc.jpg"
          })`,
        }}
      ></div>
      <div className={classes.content}>
        <h5 className={classes.h5}>{place.name}</h5>
        <div className={classes.container}>
          <div className={classes.rating}>{Number(place.rating)}</div>
          <span>out of {place.num_reviews} reviews</span>
        </div>
        <div className={classes.container}>
          <span>Price</span>
          <span>{place.price_level}</span>
        </div>
        <div className={classes.container}>
          <span>Rating</span>
          <span>{place.ranking}</span>
        </div>
        {place.cuisine?.map(({ name }) => (
          <div className={classes.cuisine} key={name}>
            {name}
          </div>
        ))}
        {place.address && <span>{place.address}</span>}
        {place.phone && <span>{place.phone}</span>}
        <button onClick={() => window.open(place.web_url, "_blank")}>
          Trip Advisor
        </button>
        {place.website && (
          <button onClick={() => window.open(place.website, "_blank")}>
            Website
          </button>
        )}
      </div>
    </div>
  );
}

export default PlaceDetails;
