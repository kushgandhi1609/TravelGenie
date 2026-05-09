import { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null);

  const API_KEY = 'YOUR_OPENWEATHER_API_KEY';

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((res) => setWeather(res.data));
  }, [city]);

  if (!weather) {
    return <p>Loading weather...</p>;
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg mt-4">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p>{weather.main.temp}°C</p>
      <p>{weather.weather[0].main}</p>
    </div>
  );
}

export default WeatherCard;