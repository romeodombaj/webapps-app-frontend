import { Fragment, useEffect, useState, useContext } from "react";
import styles from "./InputRecipe.module.css";
import UserContext from "../store/user-context";
import Error from "../UI/Error";

import defaultImg from "../../assets/default_recipe_image.png";

const InputRecipe = (props) => {
  const editName = props.info ? props.info.name : "";
  const editDescription = props.info ? props.info.description : "";
  const editCategory = props.info ? props.info.category : "";

  const userCtx = useContext(UserContext);

  const [name, setName] = useState(editName);
  const [description, setDescription] = useState(editDescription);
  const [category, setCategory] = useState(editCategory);
  const [image, setImage] = useState();
  const [error, setError] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    let data = {};

    if (
      name.length < 30 &&
      name.length > 0 &&
      category.length < 30 &&
      category.length > 0 &&
      description.length < 1000 &&
      description.length > 0
    ) {
      if (image) {
        reader.readAsDataURL(image);
        reader.onload = () => {
          data = {
            name: name,
            description: description,
            category: category,
            user: userCtx.userData.username,
            image: reader.result,
          };

          setError("");
          props.handleData(data);
        };
      } else {
        data = {
          name: name,
          description: description,
          category: category,
          user: userCtx.userData.username,
          image: defaultImg,
        };

        setError("");
        props.handleData(data);
      }
    } else {
      setError("Error");
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

  const onImageUpdate = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Fragment>
      <div onClick={props.onClose} className={styles.backdrop} />
      <form onSubmit={onSubmitHandler}>
        <div className={styles.wrapper}>
          <Error error={error} />
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
          <input
            type="file"
            onChange={onImageUpdate}
            className={styles["image-select"]}
          />
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
