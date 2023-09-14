import { useState, useEffect } from 'react';

const Weather = () => {
  // State variables fro wether data and user input
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState ('Johannesburg'); // default city

  // Fetch weather data when the component mounts or when city changes
  useEffect(() => {
    // Make an API call to OpenWeather using city state variable
    fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=eb3e2b69d5805533c2d2c13bd96544f4') //API key
      .then (response => response.json())
      .then (data => setWeatherData(data))
      // .catch ( (error) => {
      //   console.error('Error fetching weather data; error');
      // });
  },[city]);


  return (
    <div>
      <label htmlFor = "cityInput">Enter City</label>
      {/* Input field for user to enter city */}
      <input 
        type="text"
        id="cityInput"
        value={city}
        onChange = {e => setCity(e.target.value)} // Update city after being change
      />
      {/* Display weather data if available */}
      { weatherData &&(
        <div>
          {/* Display city and country */}
          <h2>Weather in { weatherData.name }, { weatherData.sys.country }</h2>
          {/* Display description */}
          <p>Temperature: { weatherData.main.temp } degrees</p>
          {/* Display description */}
          <p>Weather: { weatherData.weather[0].description }</p>
        </div>
      )}
    </div>
  );
};

export default Weather;