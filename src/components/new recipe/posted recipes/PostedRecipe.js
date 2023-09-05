import styles from "./PostedRecipe.module.css";
import { useState } from "react";

//images

import editSymbol from "../../../assets/edit_symbol.png";
import deleteSymbol from "../../../assets/delete_symbol.png";
import { Fragment } from "react";
import InputRecipe from "../InputRecipe";
import Rating from "../../UI/Rating";

const PostedRecipe = (props) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const onEditHandler = () => {
    setIsUpdating(true);
  };

  const onUpdateHandler = (data) => {
    fetch(
      `https://webapps-app-backend-7q54.vercel.app/recipes/patch/${props.recipeInfo._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
        }),
      }
    ).then(() => props.fetchData());
    setIsUpdating(false);
  };

  const onDeleteHandler = (e) => {
    fetch(
      `https://webapps-app-backend-7q54.vercel.app/recipes/delete/${props.recipeInfo._id}`,
      {
        method: "delete",
      }
    ).then(() => props.fetchData());
  };

  return (
    <Fragment>
      {isUpdating && (
        <InputRecipe handleData={onUpdateHandler} info={props.recipeInfo} />
      )}
      <div className={styles.wrapper}>
        <div className={styles[`info-wrapper`]}>
          <div className={styles.name}>{props.recipeInfo.name}</div>
          <div className={styles.description}>
            {props.recipeInfo.description}
          </div>
        </div>
        <div className={styles[`actions-wrapper`]}>
          <img
            className={styles[`action-symbol`]}
            src={editSymbol}
            onClick={onEditHandler}
          />
          <img
            className={styles[`action-symbol`]}
            src={deleteSymbol}
            onClick={onDeleteHandler}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PostedRecipe;
