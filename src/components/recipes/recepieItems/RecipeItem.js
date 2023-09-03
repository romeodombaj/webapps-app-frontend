import styles from "./RecipeItem.module.css";
import { Fragment, useEffect, useState } from "react";
import FocusRecipe from "./FocusRecipe";
import Rating from "../../UI/Rating";

import defaultImage from "../../../assets/default_recipe_image.png";

const RecipeItem = (props) => {
  const [isFocused, setIsFocued] = useState(false);

  let recipe = props.recipeInfo;

  const focusFullRecipeHandler = () => {
    setIsFocued(true);
  };

  const unfocusFullRecipeHandler = () => {
    setIsFocued(false);
  };

  const averageRating = () => {
    let array = recipe.rating.map((el) => el.rating);
    let average = array.reduce((a, b) => a + b, 0) / array.length;

    return average;
  };

  return (
    <Fragment>
      {isFocused && (
        <FocusRecipe onClose={unfocusFullRecipeHandler} recipeInfo={recipe} />
      )}

      {recipe && (
        <div onClick={focusFullRecipeHandler} className={styles.wrapper}>
          <img src={recipe.image} className={styles.image} />
          <div className={styles.title}>{recipe.name}</div>
          <div className={styles.description}>
            {recipe.description.substring(0, 150)} ...
          </div>
          {recipe && <Rating static={true} value={averageRating()} />}
        </div>
      )}
    </Fragment>
  );
};

export default RecipeItem;
