import styles from "./RecipeItem.module.css";

const RecipeItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{props.recipeInfo.name}</div>
      <div className={styles.description}>{props.recipeInfo.description}</div>
    </div>
  );
};

export default RecipeItem;
