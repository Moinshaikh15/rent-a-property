import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCity } from "../../redux/listings/listingsSlice";

export default function CityCard({ city }) {
  const dispatch = useDispatch();

  return (
    <div
      className="cityCard"
      onClick={(e) => {
        e.preventDefault();
        dispatch(setSelectedCity(city));
      }}
    >
      <div className="">
        <img
          src="/location.png"
          alt="location icon"
          className="location-icon"
        />
      </div>
      <p className=""> {city}</p>
    </div>
  );
}
