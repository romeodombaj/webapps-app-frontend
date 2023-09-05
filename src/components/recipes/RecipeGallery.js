import styles from "./RecipesGallery.module.css";
import RecipeItem from "./recepieItems/RecipeItem";
import leftArrow from "../../assets/leftarrow.png";
import rightArrow from "../../assets/rightarrow.png";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import UserContext from "../store/user-context";
import saveIcon from "../../assets/save_icon.png";

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
  const [isShowingSaved, setIsShowingSaved] = useState(false);
  const [currentList, setCurrentList] = useState();

  const location = useLocation().state;
  const userCtx = useContext(UserContext);

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
        setCurrentList(data);
      });
  }, [location]);

  const toggleSaved = () => {
    if (isShowingSaved) {
      setCurrentList(recipeList);
      setRecipeIndex(0);
    } else {
      setCurrentList(
        recipeList.filter((el) => userCtx.userData.saved.includes(el._id))
      );
      setRecipeIndex(0);
    }
    setIsShowingSaved((prevVal) => !prevVal);
  };

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
        currentList.filter(
          (el) =>
            el.name.includes(searchValue) || el.category.includes(searchValue)
        )
      );
      setRecipeIndex(0);
    } else {
      setFilteredRecipeList(currentList);
      setRecipeIndex(0);
    }
  }, [searchValue, currentList]);

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

      <div className={styles.filters}>
        <input
          placeholder="Search..."
          onChange={onChangeSearch}
          className={styles.search}
          value={searchValue}
        />
        <img
          onClick={toggleSaved}
          src={saveIcon}
          className={`${styles["save-button"]} ${
            styles[isShowingSaved && "save-button-active"]
          }`}
        />
      </div>

      {recipeList && (
        <RecipeItem recipeInfo={filteredRecipeList[recipeIndex]} />
      )}
    </div>
  );
};

export default RecipesGallery;
