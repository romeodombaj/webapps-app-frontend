import styles from "./FocusRecipe.module.css";
import leftArrow from "../../../assets/leftarrow.png";
import Rating from "../../UI/Rating";

import tempImg from "../../../assets/food.jpg";

const FocusRecipe = (props) => {
  const onCloseFocus = () => {
    props.onClose();
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={tempImg} />
      <img
        onClick={onCloseFocus}
        className={styles[`back-button`]}
        src={leftArrow}
      />
      <div className={styles["info-wrapper"]}>
        <div className={styles.title}> {props.recipeInfo.name} </div>
        <div className={styles.category}>
          <strong>Category:</strong> {props.recipeInfo.category}
        </div>
        <div className={styles.description}>{props.recipeInfo.description}</div>
        <div>
          <label className={styles["label-rating"]}>OCJENI:</label>
          <Rating static={false} value={0} />
        </div>
      </div>
    </div>
  );
};

export default FocusRecipe;
