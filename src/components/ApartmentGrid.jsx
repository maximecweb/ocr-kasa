import React, { useEffect, useState } from "react";
import "./ApartmentGrid.scss";
import Card from "./Card.jsx";
import { useApartments } from "./../hooks/useApartments.jsx";

function ApartmentGrid() {
  const apartments = useApartments();
  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <Card
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;
