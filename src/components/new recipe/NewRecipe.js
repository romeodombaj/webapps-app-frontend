import { Fragment, useState } from "react";
import styles from "./NewRecipe.module.css";
import addIcon from "../../assets/plus.png";
import AddNewRecipeWindow from "./AddNewRecipeWindow";

const NewRecipe = () => {
  const [isAddingNewRecipe, setIsAddingNewRecipe] = useState(false);

  const openNewRecipeWindowHandler = () => {
    setIsAddingNewRecipe(true);
  };

  const closeNewRecipeWindowHandler = () => {
    setIsAddingNewRecipe(false);
  };

  return (
    <Fragment>
      <h1>NEW RECIPE</h1>
      {isAddingNewRecipe && (
        <AddNewRecipeWindow onClose={closeNewRecipeWindowHandler} />
      )}

      <div className={styles["wrapper"]}>
        <div className={styles["posted-recipes"]}></div>
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
