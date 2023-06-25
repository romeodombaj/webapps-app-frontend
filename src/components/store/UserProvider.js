import { useEffect, useState } from "react";
import UserContext from "./user-context";
import { useNavigate } from "react-router";

const UserProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem("loginStatus"));
  const [isLoggedIn, setIsLoggedIn] = useState(localData);
  const [userData, setUserData] = useState({});

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
      navigate("/signup");
    } else {
      localStorage.setItem("loginStatus", JSON.stringify(true));
    }
  }, [isLoggedIn]);

  const userContext = {
    isLoggedIn: isLoggedIn,
    userData: userData,
    setUser: setUser,
    setLoginStatus: setLoginStatus,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
