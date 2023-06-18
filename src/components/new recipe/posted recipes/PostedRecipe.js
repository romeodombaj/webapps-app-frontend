import styles from "./PostedRecipe.module.css";

//images

import editSymbol from "../../../assets/edit_symbol.png";
import deleteSymbol from "../../../assets/delete_symbol.png";

const PostedRecipe = (props) => {
  const onEditHandler = () => {
    props.onEditHandler();
  };

  const onDeleteHandler = (e) => {
    const postId = e.currentTarget.getAttribute("value");
    console.log(postId);
    fetch(`http://localhost:5000/recipes/delete/${postId}`, {
      method: "delete",
    }).then(() => props.fetchData());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles[`info-wrapper`]}>
        <div className={styles.name}>{props.recipeInfo.name}</div>
        <div className={styles.description}>{props.recipeInfo.description}</div>
        <div className={styles.rating}>{props.recipeInfo.rating}</div>
      </div>
      <div className={styles[`actions-wrapper`]}>
        <img className={styles[`action-symbol`]} src={editSymbol} />
        <img
          className={styles[`action-symbol`]}
          src={deleteSymbol}
          value={props.recipeInfo._id}
          onClick={onDeleteHandler}
        />
      </div>
    </div>
  );
};

export default PostedRecipe;
