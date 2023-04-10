import { Fragment } from "react";
import styles from "./AddNewRecipeWindow.module.css";
import InputRecipe from "./InputRecipe";

const AddNewRecipeWindow = (props) => {
  const username = "BOBI";

  const closeWindowHandler = () => {
    props.onClose();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/new", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "mello",
        description: "jello",
        rating: "0",
        user: username,
      }),
    }).then(() => props.fetchData());

    closeWindowHandler();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div onClick={closeWindowHandler} className={styles.backdrop} />
      <div className={styles.wrapper}>
        <InputRecipe />
        <div className={styles[`action-buttons`]}>
          <button type="submit">SUBMIT</button>
          <button onClick={closeWindowHandler}>CANCEL</button>
        </div>
      </div>
    </form>
  );
};

export default AddNewRecipeWindow;
