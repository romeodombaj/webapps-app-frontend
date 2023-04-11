import styles from "./RecipesGallery.module.css";
import RecipeItem from "./recepieItems/RecipeItem";
import leftArrow from "../../assets/leftarrow.png";
import rightArrow from "../../assets/rightarrow.png";
import { useState, useEffect } from "react";

const dummy_recipes = [
  {
    id: 0,
    name: "first recipe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 1,
    name: "Second recipe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 2,
    name: "Thrid recipe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

const RecipesGallery = () => {
  const [recipeIndex, setRecipeIndex] = useState(0);
  const [recepieList, setRecepieList] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/recipes/category-list/Chicken")
      .then((response) => response.json())
      .then((data) => {
        setRecepieList(data);
      });
  }, []);

  const onNextRecipeHandler = () => {
    if (recipeIndex < recepieList.length - 1) {
      setRecipeIndex((prevState) => prevState + 1);
    }
  };

  const onPreviousRecipeHandler = () => {
    if (recipeIndex > 0) {
      setRecipeIndex((prevState) => prevState + -1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <img
        onClick={onPreviousRecipeHandler}
        className={styles[`navigation-arrows`]}
        src={leftArrow}
      ></img>
      {recepieList && <RecipeItem recipeInfo={recepieList[recipeIndex]} />}
      <img
        onClick={onNextRecipeHandler}
        className={styles[`navigation-arrows`]}
        src={rightArrow}
      ></img>
    </div>
  );
};

export default RecipesGallery;
