import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./../HomePage/HomePage";
import PropertyList from "./../PropertyList/PropertyList";
import FindLisbon from "../FindLisbon/FindLisbon";
import OffersPromo from "../Offers&Promo/Offers&Promo";
import ContactUs from "../ContacUs/ContactUs";
import ListProperty from "../ListProperty/ListProperty";
// import Login from '../LoginPage/LoginPage';
import RegisterPage from "../RegisterPage/RegisterPage";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import RuaAugusta from "../FindLisbon/RuaAugusta/RuaAugusta";
import RuaRosa from "../FindLisbon/RuaRosa/RuaRosa";
import Fabrica from "../FindLisbon/Fabrica/Fabrica";
import Ruinas from "../FindLisbon/Ruinas/Ruinas";
import SearchProperty from "../SearchProperty/SearchProperty";
import CardIndividual from "../SearchProperty/CardIndividual/CardIndividual";
import Popular from "../../components/Popular/Popular"
import Properties from "../Properties/Properties";
import {ListingContextProvider} from "../../context/listingContext"
import {AuthProvider} from "../../context/AuthContext"

const ContentPage = () => {
  return (
    <div>
      <AuthProvider>
      <ListingContextProvider>
        <Routes>
          <Route exact path="/property-list" element={<PropertyList />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/find-lisbon" element={<FindLisbon />} />
          <Route exact path="/rua-augusta" element={<RuaAugusta />} />
          <Route exact path="/rua-rosa" element={<RuaRosa />} />
          <Route exact path="/fabrica" element={<Fabrica />} />
          <Route exact path="/ruinas" element={<Ruinas />} />
          <Route exact path="/offers-promo" element={<OffersPromo />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/list-property" element={<ListProperty />} />
          {/* <Route exact path="/search-property" element={<SearchProperty />} /> */}
          <Route exact path="/listing/:id" element={<CardIndividual />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route path="/register" element={<RegisterPage />}>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
          <Route path="/properties" element={<SearchProperty />}>
            <Route path="popular" element={<Popular />} />
            <Route path="list" element={<Properties />} />
          </Route>
        </Routes>
      </ListingContextProvider>
      </AuthProvider>
    </div>
  );
};

export default ContentPage;
