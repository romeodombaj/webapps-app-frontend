import styles from "./NavBar.module.css";
import addIcon from "../../assets/plus.png";
import profileIcon from "../../assets/profile.png";
import categoryIcon from "../../assets/category.png";
import itemListIcon from "../../assets/itemList.png";
import { useState, useEffect, useContext, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../store/user-context";

const navigationButtonArray = [
  { id: 0, icon: itemListIcon, link: "/" },
  { id: 1, icon: categoryIcon, link: "/categories" },
  { id: 2, icon: addIcon, link: "/newrecipe" },
  { id: 3, icon: profileIcon, link: "/profile" },
];

const NavBar = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(
    localStorage.getItem("navIndex")
  );

  const onNavigatingHandler = (event) => {
    setCurrentIndex(event.target.getAttribute("value"));
  };

  const logoutHandler = () => {
    userCtx.setLoginStatus(false);
    navigate("/signup");
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--filler-position",
      currentIndex * 30 + "%"
    );

    localStorage.setItem("navIndex", currentIndex);
  }, [currentIndex]);

  return (
    <Fragment>
      <div className={styles.logout} onClick={logoutHandler}>
        Log Out
      </div>
      <div className={styles.wrapper}>
        <div className={styles.icons}>
          {navigationButtonArray.map((button) => {
            return (
              <Link key={button.id} to={button.link}>
                <img
                  key={button.id}
                  value={button.id}
                  onClick={onNavigatingHandler}
                  src={button.icon}
                  className={styles[`action`]}
                />
              </Link>
            );
          })}
        </div>

        <div className={styles[`selection-container`]}>
          <div className={styles[`selection-filler`]}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
