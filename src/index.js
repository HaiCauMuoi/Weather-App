// IMPORTING FUNCTION
import view from './app/DOM';
import { weather } from './app/API_Function';

// SELECTING THE SEARCHING ZONE
const locationSearch = document.getElementById('location-search');
const searchBtn = document.getElementsByClassName('search-btn');
// QUICK IMPLEMENTATION OF CITIES
const newYork = document.getElementById('new-york');
const london = document.getElementById('london');
const paris = document.getElementById('paris');
const hoChiMinh = document.getElementById('ho-chi-minh');

// searchBtn.addEventListener('submit', (e) => {
//   e.preventDefault();
// });

// TESTING FUNCTION
console.log(weather.getData('new york'));

// QUICK SEARCH FOR WEATHER DATA
newYork.addEventListener('click', async () => {
  view.getDOM(await weather.getData('new york'));
});

london.addEventListener('click', async () => {
  view.getDOM(await weather.getData('london'));
});

paris.addEventListener('click', async () => {
  view.getDOM(await weather.getData('paris'));
});

hoChiMinh.addEventListener('click', async () => {
  view.getDOM(await weather.getData('hoChiMinh'));
});

// SEARCH WEATHER DATA
searchBtn[0].addEventListener('click', async () => {
  if (locationSearch.value === '') return;
  const weatherData = await weather.getData(locationSearch.value);
  view.getDOM(weatherData);
});

// ZOMBIE CODE
// function getLocation() {
//   const locationSearch = document.getElementById('location-search');
//   const location = locationSearch.value;
//   return location;
// }

// async function getWeatherAPI(location) {
//   const api = `http://api.openweathermap.org/data/2.5/weather?q=${location}
//   &units=metric&APPID=61143bcabab93bed1de9b4d47e030e70`;
//   const respone = await fetch(api, { mode: 'cors' });
//   const fetchData = await respone.json();
//   const fetchTime = new Date(fetchData.dt * 1000);
//   const options = {
//     hc: '24',
//     weekday: 'long',
//     year: '2-digit',
//     month: 'long',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//   };
//   const time = fetchTime.toLocaleDateString('en-GB', options);
//   const data = {
//     city: fetchData.name,
//     temperature: Math.round(fetchData.main.temp),
//     humidity: fetchData.main.humidity,
//     wind_speed: fetchData.wind.speed,
//     cloud: fetchData.clouds.all,
//     rain: fetchData.main.feels_like,
//     description: fetchData.weather[0].description,
//     icon: fetchData.weather[0].icon,
//     time,
//   };

//   temperature.innerHTML = `${data.temperature}\u00B0C`;
//   currentCity.innerHTML = data.city;
//   dateTime.innerHTML = data.time;
//   cloudy.innerHTML = `${data.cloud}%`;
//   humidity.innerHTML = `${data.humidity}%`;
//   wind.innerHTML = `${data.wind_speed}m/s`;
//   rain.innerHTML = `${data.rain}%`;
//   weatherDescription.innerHTML = `${data.description}`;
//   iconElement = icon.get(data.icon);
//   weatherIcon.innerHTML = iconElement;

//   return data, time;
// }
// getWeatherAPI('ha noi');
// view.searchBtn.addEventListener('click', getWeatherAPI(getLocation()));

// newYork.addEventListener('click', getWeatherAPI('new york'));
// london.addEventListener('click', getWeatherAPI('london'));
// paris.addEventListener('click', getWeatherAPI('paris'));
// hoChiMinh.addEventListener('click', getWeatherAPI('ho Chi Minh'));

// let ATTEMP = 1;

// async function convert() {
//   const search = getLocation();
//   const unit = getState(ATTEMP);
//   const text = await fetch(
//     `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=${unit}&APPID=61143bcabab93bed1de9b4d47e030e70`,
//     { mode: 'cors' }
//   );
//   const fetch_data = await text.json();
//   const fetchTime = new Date(fetch_data.dt * 1000);
//   const options = {
//     hc: '24',
//     weekday: 'long',
//     year: '2-digit',
//     month: 'long',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//   };
//   const time = fetchTime.toLocaleDateString('en-GB', options);
//   const data = await {
//     city: fetch_data.name,
//     temperature: Math.round(fetch_data.main.temp),
//     humidity: fetch_data.main.humidity,
//     wind_speed: fetch_data.wind.speed,
//     time,
//   };

//   temperature.innerHTML = await data.temperature;
//   currentCity.innerHTML = await data.city;
//   dateTime.innerHTML = await data.time;
//   console.log('ok');
//   return data, time;
// }

// function getState() {
//   if (ATTEMP === 1) {
//     ATTEMP++;
//     return 'metric';
//   }
//   ATTEMP--;
//   return 'imperial';
// }
