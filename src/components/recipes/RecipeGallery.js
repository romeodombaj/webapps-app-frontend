import styles from "./RecipesGallery.module.css";
import RecipeItem from "./recepieItems/RecipeItem";
import leftArrow from "../../assets/leftarrow.png";
import rightArrow from "../../assets/rightarrow.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

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
  const [recipeList, setRecipeList] = useState();
  const [filteredRecipeList, setFilteredRecipeList] = useState();
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation().state;

  useEffect(() => {
    let catString;
    location ? (catString = location.catString) : (catString = "");
    fetch(`http://localhost:5000/recipes/${catString}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipeList(data);
        setFilteredRecipeList(data);
        setSearchValue("");
        setRecipeIndex(0);
      });
  }, [location]);

  const onNextRecipeHandler = () => {
    if (recipeIndex < filteredRecipeList.length - 1) {
      setRecipeIndex((prevState) => prevState + 1);
    }
  };

  const onPreviousRecipeHandler = () => {
    if (recipeIndex > 0) {
      setRecipeIndex((prevState) => prevState + -1);
    }
  };

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue != "") {
      setFilteredRecipeList(
        recipeList.filter((el) => el.name.includes(searchValue))
      );
      setRecipeIndex(0);
    } else {
      setFilteredRecipeList(recipeList);
      setRecipeIndex(0);
    }
  }, [searchValue]);

  return (
    <div className={styles.wrapper}>
      <div className={styles[`navigation-arrows`]}>
        <img
          className={styles["left-arrow"]}
          onClick={onPreviousRecipeHandler}
          src={leftArrow}
        />

        <img
          onClick={onNextRecipeHandler}
          className={styles[`right-arrow`]}
          src={rightArrow}
        ></img>
      </div>
      <input
        placeholder="Search..."
        onChange={onChangeSearch}
        className={styles.search}
        value={searchValue}
      />
      {recipeList && (
        <RecipeItem recipeInfo={filteredRecipeList[recipeIndex]} />
      )}
    </div>
  );
};

export default RecipesGallery;
