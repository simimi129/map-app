import classes from "./Header.module.css";
import { Autocomplete } from "@react-google-maps/api";

function Header() {
  return (
    <div className={classes.header}>
      <h5 className={classes.h5}>Travel Advisor</h5>
      <div className={classes["search-container"]}>
        <h6 className={classes.title}>Explore new places</h6>
        {/* <Autocomplete> */}
        <div className={classes.search}>
          <ion-icon
            className={classes["search-icon"]}
            name="search-outline"
          ></ion-icon>
          <input
            className={classes.input}
            placeholder="Search..."
            type="text"
          />
        </div>
        {/* </Autocomplete> */}
      </div>
    </div>
  );
}

export default Header;
