import { Fragment, useEffect, useState } from "react";
import styles from "./NewRecipe.module.css";
import addIcon from "../../assets/plus.png";
import AddNewRecipeWindow from "./AddNewRecipeWindow";
import PostedRecipe from "./posted recipes/PostedRecipe";

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

  const fetchHandler = () => {
    console.log("fetching");
    fetch(`http://localhost:5000/recipes/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setRecepieList(data);
      });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <Fragment>
      {isAddingNewRecipe && (
        <AddNewRecipeWindow
          fetchData={fetchHandler}
          onClose={closeNewRecipeWindowHandler}
        />
      )}

      <div className={styles["wrapper"]}>
        <div className={styles[`posted-recipes-wrapper`]}>
          <div className={styles["posted-recipes"]}>
            {recipeList &&
              [...recipeList].reverse().map((recipe) => {
                return (
                  <PostedRecipe
                    onEdit={openNewRecipeWindowHandler}
                    fetchData={fetchHandler}
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
