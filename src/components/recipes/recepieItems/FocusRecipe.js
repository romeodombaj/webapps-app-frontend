import styles from "./FocusRecipe.module.css";
import leftArrow from "../../../assets/leftarrow.png";
import Rating from "../../UI/Rating";
import UserContext from "../../store/user-context";
import { useContext, useState } from "react";
import saveIcon from "../../../assets/save_icon.png";
import tempImg from "../../../assets/food.jpg";

const FocusRecipe = (props) => {
  const userCtx = useContext(UserContext);

  const [isSaved, setIsSaved] = useState(
    userCtx.userData.saved.includes(props.recipeInfo._id)
  );

  //console.log(userCtx.userData.saved);

  const toggleSaved = () => {
    let mode;

    if (isSaved) {
      mode = "unsaveRecipe";
    } else {
      mode = "saveRecipe";
    }

    fetch(`http://localhost:5000/users/${mode}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userCtx.userData._id,
        recipeId: props.recipeInfo._id,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);

          if (data === undefined) {
            userCtx.setUser({
              ...userCtx.userData,
              saved: [],
            });
          } else {
            userCtx.setUser({
              ...userCtx.userData,
              saved: data,
            });
          }
          setIsSaved((prevVal) => !prevVal);
        });
      } else {
        console.log("Error");
      }
    });
  };

  const onCloseFocus = () => {
    props.onClose();
  };

  const userRating = () => {
    if (
      props.recipeInfo.rating.some((el) => el.userId === userCtx.userData._id)
    ) {
      const index = props.recipeInfo.rating.findIndex(
        (el) => el.userId === userCtx.userData._id
      );
      return props.recipeInfo.rating[index].rating;
    } else {
      return -1;
    }
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={props.recipeInfo.image} />
      <img
        onClick={onCloseFocus}
        className={styles[`back-button`]}
        src={leftArrow}
      />

      <div className={styles["info-wrapper"]}>
        <div className={styles.title}> {props.recipeInfo.name} </div>
        <div className={styles.category}>
          <strong>Category:</strong> {props.recipeInfo.category}
        </div>
        <div className={styles.description}>{props.recipeInfo.description}</div>

        <img
          onClick={toggleSaved}
          src={saveIcon}
          className={`${styles["save-button"]} ${
            styles[isSaved && "save-button-active"]
          }`}
        />

        <div>
          <label className={styles["label-rating"]}>OCJENI:</label>
          <Rating data={props.recipeInfo} static={false} value={userRating()} />
        </div>
      </div>
    </div>
  );
};

export default FocusRecipe;
