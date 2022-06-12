// IMPORTING WEATHER ICON
import weather from './API_Function';
import statusIcon from './Icon';

const view = {
  // DOM MANIPULATION
  getDOM(data) {
    const temperature = document.getElementById('temperature');
    const currentCity = document.getElementById('current-city');
    const dateTime = document.getElementById('date-time');
    const weatherIcon = document.getElementById('weather-icon');
    const weatherDescription = document.getElementById('weather-description');
    const cloudy = document.getElementById('cloudy');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const rain = document.getElementById('rain');

    // DISPLAYING DATA TO SCREEN
    currentCity.innerHTML = data.city;
    dateTime.innerHTML = data.time;
    cloudy.innerHTML = `${data.cloud}%`;
    humidity.innerHTML = `${data.humidity}%`;
    rain.innerHTML = `${data.rain}%`;
    weatherDescription.innerHTML = `${data.description}`;
    // GETTING ICON SVG FROM THE MAP DECLARED IN ICON.JS
    const iconElement = statusIcon.get(data.icon);
    weatherIcon.innerHTML = iconElement;
    if (weather.ATTEMP === 1) {
      temperature.innerHTML = `${data.temperature}\u00B0C`;
      wind.innerHTML = `${data.wind_speed}km/h`;
    } else {
      temperature.innerHTML = `${data.temperature}\u00B0F`;
      wind.innerHTML = `${data.wind_speed}mph`;
    }
  },
};

export default view;
