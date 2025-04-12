import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useApartment() {
  const [flat, setFlat] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const abortController = new AbortController();
    fetch("/annonces.json")
      .then((res) => res.json())
      .then((flats) => {
        if(location.state == null) navigate("/error");

        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        
        if (flat === null || flat === undefined) navigate("/error");

        setFlat(flat);
      })
      .catch(console.error);
    return () => {
      abortController.abort();
    };
  }, []);
  return flat;
}
