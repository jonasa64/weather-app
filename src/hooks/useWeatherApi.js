import API_KEY from "../cofig/kyes";
import { useState, useEffect } from "react";

const useWeatherApi = (cityName, isSubmitted, setIsSubmitted) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  // Hook to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = [];
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        const responseData = await response.json();
        if (response.status === 200) {
          weatherData.push({ ...responseData });
          setData(weatherData);
        } else {
          setError(responseData.message);
        }
      } catch (error) {
        setError(
          "failed to fetch data. City can not be empty or maybe not supported by openweatermap api"
        );
      }
    };

    if (isSubmitted) {
      fetchData();
      setIsSubmitted(false);
    }
  }, [cityName, isSubmitted, setIsSubmitted]);

  return { data, error, setError };
};

export default useWeatherApi;
