import React, { useEffect, useState } from "react";
import { Collapse } from "../components/Collapse";
import "./ApartmentPage.scss";
import { SlideShow } from "../components/SlideShow";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { useApartment } from "../hooks/useApartment";
import { useParams } from "react-router-dom";



function ApartmentPage() {
  const flat = useApartment();
  const { id } = useParams();
  console.log(id)

  if (flat == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
      <SlideShow pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className="apartment__description__area">
        <Collapse title="Description" content={flat.description} />
        <Collapse
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
