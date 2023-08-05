import React, { useEffect, useState } from "react";

export default function PropertyCard({ property }) {
  return (
    <div className="property-card">
      {/* properties Image */}
      <img
        src={property.propertyImage}
        alt="property-image"
        className="property-image"
      />

      <div className="property-info-box">
        <div className="add-to-favorite">
          <img src="/heart.png" alt="heart icon" />
        </div>

        {/* Rent */}
        <span className="rent-box">
          <span className="rent">${property.rentPerMonth}</span>
          /month
        </span>

        {/* Date available */}

        {new Date(property.dateAvailable) <= new Date() ? (
          <p className="available-date" style={{ color: "green" }}>
            {" "}
            Available Now!
          </p>
        ) : (
          <p className="available-date"> {property.dateAvailable}</p>
        )}

        {/* Locality */}
        <h2>{property.areaName}</h2>

        {/* Address */}
        <p className="address">
          {property.address},{property.city},{property.country}
        </p>

        {/*  amenities  for house or flat*/}
        {property.propertyType !== "shop" ? (
          <>
            <div className="line"></div>

            <div className="amenities">
              <div>
                <img src="/bed.png" alt="bed icon" />
                {property.bedrooms} Beds
              </div>

              <div>
                <img src="/bathtub.png" alt="bathtub icon" />{" "}
                {property.bathrooms} Bathrooms
              </div>

              <div>
                <img src="/square.png" alt="square icon" />
                {property.areaInSquareMeters}
                <p>
                  m<sup>2</sup>
                </p>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
