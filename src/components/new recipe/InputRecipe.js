import { Fragment, useEffect, useState } from "react";
import styles from "./InputRecipe.module.css";

const InputRecipe = (props) => {
  const editName = props.info ? props.info.name : null;
  const editDescription = props.info ? props.info.description : null;

  const [name, setName] = useState(editName);
  const [description, setDescription] = useState(editDescription);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {};
    props.handleData(data);
  };

  const onNameUpdate = (event) => {
    console.log("update");
    setName(event.target.value);
  };

  const onDescriptionUpdate = (event) => {};

  return (
    <Fragment>
      <div onClick={props.onClose} className={styles.backdrop} />
      <form onSubmit={onSubmitHandler}>
        <div className={styles.wrapper}>
          <div className={styles[`form-wrapper`]}>
            <div className={styles[`title-input-wrapper`]}>
              <div className={styles[`horizontal-label`]}>title</div>
              <input onChange={onNameUpdate} value={name} />
            </div>
            <div className={styles[`description-input-wrapper`]}>
              <div className={styles[`vertical-label`]}>description</div>
              <textarea />
            </div>
          </div>
          <div className={styles[`action-buttons`]}>
            <button type="submit">SUBMIT</button>
            <button onClick={props.onClose}>CANCEL</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default InputRecipe;
