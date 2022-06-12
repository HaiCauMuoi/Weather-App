// IMPORTING FUNCTION
import view from './app/DOM';
// eslint-disable-next-line import/no-named-as-default
import weather from './app/API_Function';

// SELECTING THE SEARCHING ZONE
const locationSearch = document.getElementById('location-search');
const searchBtn = document.getElementsByClassName('search-btn');
// QUICK IMPLEMENTATION OF CITIES
const newYork = document.getElementById('new-york');
const london = document.getElementById('london');
const paris = document.getElementById('paris');
const hoChiMinh = document.getElementById('ho-chi-minh');

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
  view.getDOM(await weather.getData('ho chi minh'));
});

// SEARCH WEATHER DATA
searchBtn[0].addEventListener('click', async () => {
  if (locationSearch.value === '') return;
  const weatherData = await weather.getData(locationSearch.value);
  view.getDOM(weatherData);
});

// ZOMBIE CODE

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
