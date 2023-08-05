import React, { useEffect, useState } from "react";
import CityCard from "./CityCard";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCities,
  filterData,
  setSelectedDates,
  setSelectedPrice,
  setSelectedPropertyType,
  setShowCities,
} from "../../redux/listings/listingsSlice";

export default function Filters() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const { filteredCities, selectedCity, showCities, selectedPrice } =
    useSelector((state) => state.listings);

  let handleLocationFilter = (e) => {
    dispatch(filterCities(e.target.value));
    setUserInput(e.target.value);
  };

  useEffect(() => {
    if (selectedCity) setUserInput(() => selectedCity);
  }, [selectedCity]);

  return (
    <div className="filters">
      <div className="input location-input">
        <p>Location</p>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Search City"
          onFocus={() => dispatch(setShowCities())}
          onBlur={() =>
            setTimeout(() => {
              dispatch(setShowCities());
            }, 220)
          }
          onChange={handleLocationFilter}
          value={userInput}
        />

        <div
          className="cities"
          style={{ display: showCities ? "flex" : "none" }}
        >
          {filteredCities.map((city, indx) => (
            <CityCard key={city + indx} city={city} />
          ))}
        </div>
      </div>

      <div className="input ">
        <p>When</p>
        <input
          type="date"
          id="date"
          name="date"
          onChange={(e) => dispatch(setSelectedDates(e.target.value))}
        />
      </div>

      <div className="input">
        <p>Price</p>
        <h4>
          ${selectedPrice?.min}-${selectedPrice?.max}
        </h4>
        <input
          type="range"
          min={500}
          max={10000}
          onChange={(e) =>
            dispatch(setSelectedPrice({ max: e.target.value, min: 500 }))
          }
        />
      </div>

      <div className="input">
        <p>Property Type</p>
        <select
          name="property-type"
          id="property-type"
          onChange={(e) => dispatch(setSelectedPropertyType(e.target.value))}
        >
          <option value="Select-type">Select Type</option>
          <option value="house">Houses</option>
          <option value="flat">Flats</option>
          <option value="shop">Shops</option>
        </select>
      </div>
      <button onClick={() => dispatch(filterData())} className="search-btn">Search</button>
    </div>
  );
}
