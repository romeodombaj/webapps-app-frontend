import { useEffect, useState } from "react";
import UserContext from "./user-context";
import { useNavigate } from "react-router";

const UserProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem("loginStatus"));
  const localUserData = JSON.parse(localStorage.getItem("user"));

  const [isLoggedIn, setIsLoggedIn] = useState(localData);
  const [userData, setUserData] = useState(localUserData);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const setUser = (data) => {
    setUserData(data);
  };

  const setLoginStatus = (value) => {
    setIsLoggedIn(value);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem("loginStatus", JSON.stringify(false));
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/signup");
    } else {
      localStorage.setItem("loginStatus", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(userData));
    }
  }, [isLoggedIn]);

  const userContext = {
    isLoggedIn: isLoggedIn,
    token: token,
    userData: userData,
    setUser: setUser,
    setLoginStatus: setLoginStatus,
    setToken: setToken,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
