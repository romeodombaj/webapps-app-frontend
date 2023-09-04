import React from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  token: "",
  userData: [],
  setUser: () => {},
  setLoginStatus: () => {},
  setToken: () => {},
});

export default UserContext;
