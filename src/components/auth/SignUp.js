import { useState, useContext } from "react";
import styles from "./SignUp.module.css";
import userEvent from "@testing-library/user-event";
import UserContext from "../store/user-context";
import { useInRouterContext, useNavigate } from "react-router";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const isLoggingInHandler = () => {
    setIsLoggingIn(true);
    setIsRegistering(false);
    setError("");
  };
  const isRegisteringHandler = () => {
    setIsLoggingIn(false);
    setIsRegistering(true);
    setError("");
  };

  const guestLogin = () => {
    userCtx.setUser({ id: "guest" });
    userCtx.setLoginStatus(true);
    navigate("/");
  };

  async function request(mode, data) {
    const response = await fetch(
      `https://webapps-app-backend-7q54.vercel.app/users/${mode}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      }
    ).then((response) => {
      if (response.ok) {
        if (mode === "login") {
          response.json().then((resp) => {
            userCtx.setUser(resp.user);
            userCtx.setLoginStatus(true);
            userCtx.setToken(resp.token);

            navigate("/");
            setError("");
            return true;
          });
        } else {
          request("login", data);
        }
      } else {
        setError("Error");
        return false;
      }
    });
  }

  const registerSubmit = (data) => {
    request("register", data);
  };

  const loginSubmit = (data) => {
    request("login", data);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.option} onClick={isLoggingInHandler}>
        Login
      </div>
      <div>*u placeholerima ispisan default login</div>
      {isLoggingIn && (
        <SignUpForm error={error} onSub={loginSubmit} action="Login" />
      )}
      <div className={styles.option} onClick={isRegisteringHandler}>
        Register
      </div>
      {isRegistering && (
        <SignUpForm error={error} onSub={registerSubmit} action="Register" />
      )}
      <div className={styles.option} onClick={guestLogin}>
        Continue as guest
      </div>
    </div>
  );
};

export default SignUp;
