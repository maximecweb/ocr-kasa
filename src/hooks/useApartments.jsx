import { useState, useEffect } from "react";

export const useApartments = () => {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetch("annonces.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);

    return () => {
      console.log("cleanup");
      abortController.abort();
    };
  }, []);
  return apartments;
};
