import { useEffect, useCountry } from "react"

export const useCountry = () => {
  const [pais, setPaises] = useCountry ([])

  useEffect(() => {
    fetch('https://amazon-api.sellead.com/country')
      .then((response) => response.json())
      .then((data) => setPaises(data))
  }, []);

  return {
    pais
  };
};