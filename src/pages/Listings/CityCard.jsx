import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCity, setShowCities } from "../../redux/listings/listingsSlice";

export default function CityCard({ city }) {
  const dispatch = useDispatch();

  return (
    <div
      className="cityCard"
      onClick={(e) => {
        dispatch(setSelectedCity(city));
        dispatch(setShowCities(false));
      }}
    >
      <div>
        <img
          src="/location.png"
          alt="location icon"
          className="location-icon"
        />
      </div>
      <p> {city}</p>
    </div>
  );
}
