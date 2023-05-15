import { createContext, useEffect, useState } from "react";
import api from "../services/api";

const ListingContext = createContext();

export default ListingContext;

export const ListingContextProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [listingsFilter, setListingsFilter] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [universitiesSelected, setUniversitiesSelected] = useState();

  const getProperties = () => {
    api
      .post("/listing")
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
    getUniversities();
  }, []);
  return (
    <ListingContext.Provider
      value={{
        listings,
        universities,
        listingsFilter,
        setListingsFilter,
        universitiesSelected,
        setUniversitiesSelected,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};
