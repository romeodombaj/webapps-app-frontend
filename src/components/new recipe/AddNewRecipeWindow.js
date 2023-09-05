import { Fragment } from "react";
import styles from "./AddNewRecipeWindow.module.css";
import InputRecipe from "./InputRecipe";

const AddNewRecipeWindow = (props) => {
  const username = "BOBI";

  const closeWindowHandler = () => {
    props.onClose();
  };

  const postDataHandler = (data) => {
    fetch("https://webapps-app-backend-7q54.vercel.app/new", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        rating: []
      }),
    }).then(() => props.fetchData());

    closeWindowHandler();
  };

  return (
    <Fragment>
      <InputRecipe onClose={closeWindowHandler} handleData={postDataHandler} />
    </Fragment>
  );
};

export default AddNewRecipeWindow;
