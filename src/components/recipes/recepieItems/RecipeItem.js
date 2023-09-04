import styles from "./RecipeItem.module.css";
import { Fragment, useEffect, useState } from "react";
import FocusRecipe from "./FocusRecipe";
import Rating from "../../UI/Rating";
import { useContext } from "react";
import UserContext from "../../store/user-context";


const RecipeItem = (props) => {
  const recipe = props.recipeInfo;
  const [isFocused, setIsFocued] = useState(false);

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
