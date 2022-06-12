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
// CHANGING DATA METRIC
const temperatureMetric = document.getElementById('temperature');
const getUnit = (location) => {
  temperatureMetric.addEventListener('click', async () => {
    if (weather.ATTEMP === 1) { weather.ATTEMP++; } else { weather.ATTEMP--; }
    view.getDOM(await weather.getData(location));
  });
};
// DEFAULT WEATHER DATA
const defaultData = async () => {
  view.getDOM(await weather.getData('Ha Noi'));
};

defaultData();

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
  getUnit(locationSearch.value);
  view.getDOM(weatherData);
});
