import { useState, useContext } from "react";
import styles from "./SignUp.module.css";
import userEvent from "@testing-library/user-event";
import UserContext from "../store/user-context";
import { useNavigate } from "react-router";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const isLoggingInHandler = () => {
    setIsLoggingIn(true);
    setIsRegistering(false);
  };
  const isRegisteringHandler = () => {
    setIsLoggingIn(false);
    setIsRegistering(true);
  };

  const guestLogin = () => {
    userCtx.setUser({ id: "guest" });
    userCtx.setLoginStatus(true);
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.option} onClick={isLoggingInHandler}>
        Login
      </div>
      {isLoggingIn && <SignUpForm action="Login" />}
      <div className={styles.option} onClick={isRegisteringHandler}>
        Register
      </div>
      {isRegistering && <SignUpForm action="Register" />}
      <div className={styles.option} onClick={guestLogin}>
        Continue as guest
      </div>
    </div>
  );
};

export default SignUp;
