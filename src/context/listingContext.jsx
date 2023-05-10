import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api"

const ListingContext = createContext();

export default ListingContext;

export const ListingContextProvider = ({ children }) => {
  const [listings, setListings] = useState();

  const getProperties = () => {
    api.get("/listing").then((response) => {
      setListings(response.data);
    });
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <ListingContext.Provider
      value={{
        listings,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};
