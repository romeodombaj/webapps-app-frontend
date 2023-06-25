import styles from "./FocusRecipe.module.css";
import leftArrow from "../../../assets/leftarrow.png";
import Rating from "../../UI/Rating";

const FocusRecipe = (props) => {
  const onCloseFocus = () => {
    props.onClose();
  };

  return (
    <div className={styles.wrapper}>
      <img
        onClick={onCloseFocus}
        className={styles[`back-button`]}
        src={leftArrow}
      ></img>

      <h1 className={styles.title}> {props.recipeInfo.name} </h1>
      <h2 className={styles.description}> {props.recipeInfo.description} </h2>
      <Rating static={false} value={0} />
    </div>
  );
};

export default FocusRecipe;
