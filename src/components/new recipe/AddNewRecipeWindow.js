import { Fragment } from "react";
import styles from "./AddNewRecipeWindow.module.css";
import InputRecipe from "./InputRecipe";

const AddNewRecipeWindow = (props) => {
  const closeWindowHandler = () => {
    props.onClose();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    fetch();

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
