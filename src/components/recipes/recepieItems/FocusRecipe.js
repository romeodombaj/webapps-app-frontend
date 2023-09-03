import styles from "./FocusRecipe.module.css";
import leftArrow from "../../../assets/leftarrow.png";
import Rating from "../../UI/Rating";
import UserContext from "../../store/user-context";
import { useContext } from "react";

import tempImg from "../../../assets/food.jpg";

const FocusRecipe = (props) => {
  const userCtx = useContext(UserContext);

  const onCloseFocus = () => {
    props.onClose();
  };

  const userRating = () => {
    if (
      props.recipeInfo.rating.some((el) => el.userId === userCtx.userData._id)
    ) {
      const index = props.recipeInfo.rating.findIndex(
        (el) => el.userId === userCtx.userData._id
      );
      console.log(props.recipeInfo.rating[index].rating);
      return props.recipeInfo.rating[index].rating;
    } else {
      return -1;
    }
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
          <Rating data={props.recipeInfo} static={false} value={userRating()} />
        </div>
      </div>
    </div>
  );
};

export default FocusRecipe;
