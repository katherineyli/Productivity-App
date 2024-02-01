import React from "react";

const WeatherWidget = (props) => {
  if (!props.weatherData) {
    return <div></div>;
  }

  const data = props.weatherData;
  const city = data.name;
  const weather = data.weather[0];

  console.log(data.main);

  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-lg font-semibold h-8 mb-2">Weather</h1>
      <div className="flex flex-col grow border border-gray-400 rounded-2xl">
        <h1 className="flex justify-center mb-2 mt-2 text-lg font-semibold">
          {city}
        </h1>
        <div className="flex">
          <div>
            <p className="text-sm w-32 ml-10 mr-4">{weather.description}</p>
            <img
              className="absolute bottom-24 left-1/3 ml-10"
              src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            />
          </div>
          <div>
            <p className="text-7xl mt-2">{Math.round(data.main.temp)}º</p>
            <div className="flex">
              <p className="mr-2">low: {Math.round(data.main.temp_min)}º</p>
              <p>high: {Math.round(data.main.temp_max)}º</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 text-sm">
          <p className="flex justify-center">
            Wind speed: {data.wind.speed} mph
          </p>
          <p className="flex justify-center">Humidity: {data.main.humidity}%</p>
          <p className="flex justify-center">
            Visibility: {Math.round(data.visibility / 1609)} mi
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
