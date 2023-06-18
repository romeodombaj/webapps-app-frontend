import styles from "./FocusRecipe.module.css";
import leftArrow from "../../../assets/leftarrow.png";

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
    </div>
  );
};

export default FocusRecipe;
