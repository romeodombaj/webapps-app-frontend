import { Fragment, useEffect, useState } from "react";
import styles from "./InputRecipe.module.css";

const InputRecipe = (props) => {
  const editName = props.info ? props.info.name : "";
  const editDescription = props.info ? props.info.description : "";
  const editCategory = props.info ? props.info.category : "";

  const [name, setName] = useState(editName);
  const [description, setDescription] = useState(editDescription);
  const [category, setCategory] = useState(editCategory);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("did");
    if (
      name.length < 30 &&
      name.length > 0 &&
      category.length < 30 &&
      category.length > 0 &&
      description.length < 300 &&
      description.length > 0
    ) {
      const data = {
        name: name,
        description: description,
        category: category,
        user: "BOBI",
      };

      props.handleData(data);
    }
  };

  const onNameUpdate = (e) => {
    setName(e.target.value);
  };

  const onDescriptionUpdate = (e) => {
    setDescription(e.target.value);
  };

  const onCategoryUpdate = (e) => {
    setCategory(e.target.value);
  };

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

            <div className={styles[`title-input-wrapper`]}>
              <div className={styles[`horizontal-label`]}>category</div>
              <input onChange={onCategoryUpdate} value={category} />
            </div>

            <div className={styles[`description-input-wrapper`]}>
              <div className={styles[`vertical-label`]}>description</div>
              <textarea onChange={onDescriptionUpdate} value={description} />
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
