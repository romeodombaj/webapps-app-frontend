import styles from "./PostedRecipe.module.css";

const PostedRecipe = (props) => {
  return (
    <div className={styles.wrapper}>
      <div>{props.recipeInfo.title}</div>
      <div>{props.recipeInfo.description}</div>
      <div>{props.recipeInfo.rating}</div>
    </div>
  );
};

export default PostedRecipe;
