import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate()
  const token = localStorage.getItem("user_token_greater");

  useEffect(() => {

    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    api
      .get("/auth/verify-token",config)
      .then((response) => {
        setUser(response.data)
        setAuth(true)
        // navigate(-1)
      })
      .catch((error) => {
        console.error(error.message)
        setAuth(false);
        localStorage.removeItem("user_token_greater")
        navigate("/register/login")
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
