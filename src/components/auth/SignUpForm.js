import { useState } from "react";
import styles from "./SignUpForm.module.css";

const SignUpForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    props.onSub(data);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.wrapper}>
      {props.error && <div>{props.error}</div>}
      <div className={styles.property}>
        <div>Username</div>
        <input
          className={styles.input}
          onChange={onUsernameChangeHandler}
          value={username}
        />
      </div>

      <div className={styles[`property`]}>
        <div>Password</div>
        <input
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
