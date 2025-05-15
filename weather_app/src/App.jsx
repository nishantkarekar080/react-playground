import React, { useEffect, useState, useSyncExternalStore } from "react";

function App() {
  const [data, setData] = useState({});
  const [addValue, setAddValue] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const weatherApiCall = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_APP_WEATHER_API
        }`
      );
      const getData = await response.json();
      setLoading(false);
      setData(getData);
    } catch (error) {
      console.log("====error====", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      weatherApiCall();
    }
  }, [city]);

  const handleSearch = () => {
    setCity(addValue);
    setAddValue("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Weather App</h1>
      <input
        type="text"
        value={addValue}
        onChange={(e) => setAddValue(e.target.value)}
      />
      <button onClick={handleSearch}>search</button>

      <div>
        {!loading && data?.main && (
          <>
            <p>City: {data?.name}</p>
            <p>humidity: {data?.main?.humidity}</p>
            <p>temp : {data?.main?.temp}</p>
            <div>
              <strong>Weather:</strong>
              {data?.weather.map((item, index) => (
                <>
                  <p key={index}>{item.description}</p>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
