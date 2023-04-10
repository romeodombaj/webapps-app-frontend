import { Fragment, useEffect, useState } from "react";
import styles from "./NewRecipe.module.css";
import addIcon from "../../assets/plus.png";
import AddNewRecipeWindow from "./AddNewRecipeWindow";
import PostedRecipe from "./posted recipes/PostedRecipe";
import { renderIntoDocument } from "react-dom/test-utils";

const NewRecipe = () => {
  const [isAddingNewRecipe, setIsAddingNewRecipe] = useState(false);
  const [recipeList, setRecepieList] = useState();

  const username = "BOBI";

  const openNewRecipeWindowHandler = () => {
    setIsAddingNewRecipe(true);
  };

  const closeNewRecipeWindowHandler = () => {
    setIsAddingNewRecipe(false);
  };

  const fetchUserPostsHandler = () => {
    fetch(`http://localhost:5000/recipes/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setRecepieList(data);
      });
  };

  useEffect(() => {
    fetchUserPostsHandler();
  }, []);

  return (
    <Fragment>
      {isAddingNewRecipe && (
        <AddNewRecipeWindow
          fetchData={fetchUserPostsHandler}
          onClose={closeNewRecipeWindowHandler}
        />
      )}

      <div className={styles["wrapper"]}>
        <div className={styles[`posted-recipes-wrapper`]}>
          <div className={styles["posted-recipes"]}>
            {recipeList &&
              recipeList.map((recipe) => {
                return (
                  <PostedRecipe
                    key={recipe._id}
                    recipeInfo={recipe}
                  ></PostedRecipe>
                );
              })}
          </div>
        </div>
        <img
          onClick={openNewRecipeWindowHandler}
          src={addIcon}
          className={styles["add-button"]}
        />
      </div>
    </Fragment>
  );
};

export default NewRecipe;
