import React from "react";

export default function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.propertyImage} alt="property-image" className="property-image"/>
      <span>{property.rentPerMonth}/month</span>
      <h4>{property.areaName}</h4>
      <p>{property.address}</p>
      <p>{property.dateAvailable}</p>
      <p>{property.city}</p>
    </div>
  );
}
