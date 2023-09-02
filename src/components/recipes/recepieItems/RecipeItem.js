import styles from "./RecipeItem.module.css";
import { Fragment, useState } from "react";
import FocusRecipe from "./FocusRecipe";
import Rating from "../../UI/Rating";

import defaultImage from "../../../assets/default_recipe_image.png";

const RecipeItem = (props) => {
  const [isFocused, setIsFocued] = useState(false);

  let recipe = props.recipeInfo;

  if (!recipe.image) {
    recipe.image = defaultImage;
  }

  const focusFullRecipeHandler = () => {
    setIsFocued(true);
  };

  const unfocusFullRecipeHandler = () => {
    setIsFocued(false);
  };

  return (
    <Fragment>
      {isFocused && (
        <FocusRecipe onClose={unfocusFullRecipeHandler} recipeInfo={recipe} />
      )}

      <div onClick={focusFullRecipeHandler} className={styles.wrapper}>
        <img src={recipe.image} className={styles.image} />
        <div className={styles.title}>{recipe.name}</div>
        <div className={styles.description}>
          {recipe.description.substring(0, 150)} ...
        </div>
        <Rating static={true} value={recipe.rating - 1} />
      </div>
    </Fragment>
  );
};

export default RecipeItem;
