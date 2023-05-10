import { createContext, useEffect, useState } from "react";
import api from "../services/api";

const ListingContext = createContext();

export default ListingContext;

export const ListingContextProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [universities, setUniversities] = useState([]);

  const getProperties = () => {
    api
      .get("/listing")
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getUniversities = () => {
    api
      .get("/listing/universities")
      .then((response) => {
        setUniversities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProperties();
    getUniversities()
  }, []);
  return (
    <ListingContext.Provider
      value={{
        listings,
        universities
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};
