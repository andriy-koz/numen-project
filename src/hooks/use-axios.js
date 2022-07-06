import {useState, useEffect} from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  useEffect(() => {
    const getData = async (url) => {
      setIsLoading(true);
      try {
        const res = await axios.get(url);

        setData(Object.values(res.data));
      } catch (err) {
        setError({
          isError: true,
          message: err.message || "Hubo un error",
        });
      }
      setTimeout(() => setIsLoading(false), 500);
    };

    getData(url);
  }, [url]);

  return {data, isLoading, error};
};

export default useAxios;
