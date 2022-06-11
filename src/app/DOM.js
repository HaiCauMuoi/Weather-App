// IMPORTING WEATHER ICON
import statusIcon from './Icon';

const view = () => {
  // DOM MANIPULATION
  function getDOM(data) {
    const temperature = document.getElementById('temperature');
    const currentCity = document.getElementById('current-city');
    const dateTime = document.getElementById('date-time');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherDescription = document.getElementById('weather-description');
    const cloudy = document.getElementById('cloudy');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const rain = document.getElementById('rain');
    const icon = statusIcon;

    // DISPLAYING DATA TO SCREEN
    temperature.innerHTML = `${data.temperature}\u00B0C`;
    currentCity.innerHTML = data.city;
    dateTime.innerHTML = data.time;
    cloudy.innerHTML = `${data.cloud}%`;
    humidity.innerHTML = `${data.humidity}%`;
    wind.innerHTML = `${data.wind_speed}m/s`;
    rain.innerHTML = `${data.rain}%`;
    weatherDescription.innerHTML = `${data.description}`;
    // GETTING ICON SVG FROM THE MAP DECLARED IN ICON.JS
    const iconElement = icon.get(data.icon);
    weatherIcon.innerHTML = iconElement;
  }

  return getDOM();
};

export default view;
