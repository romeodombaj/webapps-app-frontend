import { Fragment, useState } from "react";
import styles from "./SignUpForm.module.css";
import Error from "../UI/Error";

const SignUpForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const onUsernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onSurnameChangeHandler = (e) => {
    setSurname(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let data = {};

    if (props.action === "Register") {
      data = {
        username: username,
        name: name,
        surname: surname,
        age: age,
        password: password,
      };
    } else {
      data = {
        username: username,
        password: password,
      };
    }

    props.onSub(data);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.wrapper}>
      <Error error={props.error} />
      <div className={styles.property}>
        <div>Username</div>
        <input
          placeholder="user1"
          className={styles.input}
          onChange={onUsernameChangeHandler}
          value={username}
        />
      </div>

      {props.action === "Register" && (
        <Fragment>
          <div className={styles[`property`]}>
            <div>Name</div>
            <input
              className={styles.input}
              onChange={onNameChangeHandler}
              value={name}
            />
            <div className={styles[`property`]}>
              <div>Surname</div>
              <input
                className={styles.input}
                onChange={onSurnameChangeHandler}
                value={surname}
              />
            </div>
            <div className={styles[`property`]}>
              <div>Age</div>
              <input
                className={styles.input}
                onChange={onAgeChangeHandler}
                value={age}
              />
            </div>
          </div>
        </Fragment>
      )}

      <div className={styles[`property`]}>
        <div>Password</div>
        <input
          placeholder="user1"
          type="password"
          className={styles.input}
          onChange={onPasswordChangeHandler}
          value={password}
        />
      </div>
      <button type="submit"> {props.action} </button>
    </form>
  );
};

export default SignUpForm;
