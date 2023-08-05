import React, { useEffect } from "react";
import Filters from "./Filters";
import "./listings.css";
import { useSelector } from "react-redux";
import PropertyCard from "./PropertyCard";

export default function Listings() {
  const { filteredData } = useSelector((state) => state.listings);

  useEffect(() => {}, [filteredData]);
  return (
    <div className="listings-page">
      {/* Heading */}
      <div className="heading">
        <h1>Search properties to rent</h1>
        <button>Search with Search Bar</button>
      </div>

      {/* Search Filters  */}
      <Filters />

      {/* Property Listings */}
      <div className="properties">
        {filteredData.map((property, indx) => (
          <PropertyCard property={property} key={indx} />
        ))}
      </div>
    </div>
  );
}
