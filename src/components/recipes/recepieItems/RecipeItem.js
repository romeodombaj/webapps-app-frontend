import styles from "./RecipeItem.module.css";
import { Fragment, useState } from "react";
import FocusRecipe from "./FocusRecipe";

const RecipeItem = (props) => {
  const [isFocused, setIsFocued] = useState(false);

  const focusFullRecipeHandler = () => {
    setIsFocued(true);
  };

  const unfocusFullRecipeHandler = () => {
    setIsFocued(false);
  };

  return (
    <Fragment>
      {isFocused && (
        <FocusRecipe
          onClose={unfocusFullRecipeHandler}
          recipeInfo={props.recipeInfo}
        />
      )}
      <div onClick={focusFullRecipeHandler} className={styles.wrapper}>
        <div className={styles.title}>{props.recipeInfo.title}</div>
        <div className={styles.description}>{props.recipeInfo.description}</div>
      </div>
    </Fragment>
  );
};

export default RecipeItem;
