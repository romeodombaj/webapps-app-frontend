import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import UserContext from "../store/user-context";
import { Fragment, useContext } from "react";

const dummy_profile = {
  id: 0,
  name: "Bob",
  surname: "Doe",
  username: "bDoe23",
  age: "32",
};

const Profile = () => {
  const userCtx = useContext(UserContext);
  const user = userCtx.userData;

  return (
    <div className={styles.wrapper}>
      <h1>PROFILE</h1>
      {user.id === "guest" ? (
        <div>Logged in as a guest</div>
      ) : (
        <Fragment>
          <div className={styles[`personal-info-wrapper`]}>
            <div className={styles.text}>Name: {dummy_profile.name}</div>
            <div className={styles.text}>Surname: {dummy_profile.surname}</div>
            <div className={styles.text}>Age: {dummy_profile.age}</div>
            <div className={styles.text}>Username: {user.username}</div>
          </div>
          <div className={styles[`personal-info-wrapper`]}>
            <Link to="/newrecipe" className={styles[`show-recipes-button`]}>
              SEE YOUR RECIPES
            </Link>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Profile;
