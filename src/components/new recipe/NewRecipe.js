import { Fragment, useContext, useEffect, useState } from "react";
import styles from "./NewRecipe.module.css";
import addIcon from "../../assets/plus.png";
import saveIcon from "../../assets/save_icon.png";
import AddNewRecipeWindow from "./AddNewRecipeWindow";
import PostedRecipe from "./posted recipes/PostedRecipe";
import UserContext from "../store/user-context";

const NewRecipe = () => {
  const [isAddingNewRecipe, setIsAddingNewRecipe] = useState(false);
  const [recipeList, setRecepieList] = useState();
  const [savedRecipeList, setSavedRecipeList] = useState();
  const [isShowingSaved, setIsShowingSaved] = useState(false);

  const userCtx = useContext(UserContext);

  const openNewRecipeWindowHandler = () => {
    setIsAddingNewRecipe(true);
  };

  const closeNewRecipeWindowHandler = () => {
    setIsAddingNewRecipe(false);
  };

  const toggleSaved = () => {
    setIsShowingSaved((prevVal) => !prevVal);
    console.log(savedRecipeList);
  };

  const fetchHandler = () => {
    fetch(`http://localhost:5000/recipes/${userCtx.userData.username}`)
      .then((response) => response.json())
      .then((data) => {
        setRecepieList(data);
      });
  };

  const fetchSavedHandler = () => {
    fetch(`http://localhost:5000/recipes/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(userCtx.userData.saved);
        setSavedRecipeList();
        //data.filter((el) => userCtx.userData.saved.includes(el._id))
      });
  };

  useEffect(() => {
    fetchHandler();
    fetchSavedHandler();
  }, []);

  return (
    <Fragment>
      {isAddingNewRecipe && (
        <AddNewRecipeWindow
          fetchData={fetchHandler}
          onClose={closeNewRecipeWindowHandler}
        />
      )}

      {userCtx.userData.id === "guest" ? (
        <h1>Logged in as a guest</h1>
      ) : (
        <Fragment>
          <div className={styles["wrapper"]}>
            <div className={styles[`posted-recipes-wrapper`]}>
              <div className={styles["posted-recipes"]}>
                {recipeList &&
                  recipeList.reverse().map((recipe) => {
                    return (
                      <PostedRecipe
                        onEdit={openNewRecipeWindowHandler}
                        fetchData={fetchHandler}
                        key={recipe._id}
                        recipeInfo={recipe}
                      />
                    );
                  })}
              </div>
            </div>
            <div className={styles["button-wrapper"]}>
              <img
                onClick={openNewRecipeWindowHandler}
                src={addIcon}
                className={styles["add-button"]}
              />
              <img
                onClick={toggleSaved}
                src={saveIcon}
                className={`${styles["save-button"]} ${
                  styles[isShowingSaved && "save-button-active"]
                }`}
              />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default NewRecipe;
