import styles from "./NavBar.module.css";
import addIcon from "../../assets/plus.png";
import profileIcon from "../../assets/profile.png";
import categoryIcon from "../../assets/category.png";
import itemListIcon from "../../assets/itemList.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigationButtonsArray = [
    { id: 0, icon: itemListIcon, link: "/" },
    { id: 1, icon: categoryIcon, link: "/categories" },
    { id: 2, icon: addIcon, link: "/newrecipe" },
    { id: 3, icon: profileIcon, link: "/profile" },
  ];

  const onNavigatingHandler = (event) => {
    setCurrentIndex(event.target.getAttribute("value"));
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--filler-position",
      currentIndex * 30 + "%"
    );
    //const location = useLocation();
    //console.log(location.pathname);
  }, [currentIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.icons}>
        {navigationButtonsArray.map((button) => {
          return (
            <Link to={button.link}>
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
  );
};

export default NavBar;
