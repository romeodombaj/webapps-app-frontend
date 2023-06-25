import React from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  userData: [],
  setUser: () => {},
  setLoginStatus: () => {},
});

export default UserContext;
