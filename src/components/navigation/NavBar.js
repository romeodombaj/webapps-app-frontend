import styles from "./NavBar.module.css";
import addIcon from "../../assets/plus.png";
import profileIcon from "../../assets/profile.png";
import categoryIcon from "../../assets/category.png";

const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <img src={categoryIcon} className={styles[`action`]} />
      <img src={addIcon} className={styles[`action`]} />
      <img src={profileIcon} className={styles[`action`]} />
    </div>
  );
};

export default NavBar;
