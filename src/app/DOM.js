import statusIcon from './Icon';

const view = {
  temperature: document.getElementById('temperature'),
  currentCity: document.getElementById('current-city'),
  dateTime: document.getElementById('date-time'),
  weatherIcon: document.getElementById('weather-icon'),
  weatherDescription: document.getElementById('weather-description'),
  searchBtn: document.getElementsByClassName('search-btn'),
  newYork: document.getElementById('new-york'),
  london: document.getElementById('london'),
  paris: document.getElementById('paris'),
  hoChiMinh: document.getElementById('ho-chi-minh'),
  cloudy: document.getElementById('cloudy'),
  humidity: document.getElementById('humidity'),
  wind: document.getElementById('wind'),
  rain: document.getElementById('rain'),
  icon: statusIcon,
};

export default { view };
