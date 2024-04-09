import { useEffect, useState } from "react";
import axios from "axios";

const useCharacter = () => {
  const [requestData, setData] = useState([]);
  const [errorData, setErrorData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        setErrorData(error.message);
      })
      .finally(() => {
        setLoadingData(false);
      });
  }, []);

  return [requestData, errorData, loadingData];
};
export default useCharacter;
