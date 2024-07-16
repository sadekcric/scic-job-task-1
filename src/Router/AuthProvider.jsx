/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    const parseUser = JSON.parse(getUser);

    setUser(parseUser);
  }, []);

  console.log(user);
  const info = { user, setUser };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
