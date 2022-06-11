import view from './app/DOM';

function getLocation() {
  const locationSearch = document.getElementById('location-search');
  const location = locationSearch.value;
  return location;
}

async function getWeatherAPI(location) {
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${location}
  &units=metric&APPID=61143bcabab93bed1de9b4d47e030e70`;
  const respone = await fetch(api, { mode: 'cors' });
  const fetchData = await respone.json();
  const fetchTime = new Date(fetchData.dt * 1000);
  const options = {
    hc: '24',
    weekday: 'long',
    year: '2-digit',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  const time = fetchTime.toLocaleDateString('en-GB', options);
  const data = {
    city: fetchData.name,
    temperature: Math.round(fetchData.main.temp),
    humidity: fetchData.main.humidity,
    wind_speed: fetchData.wind.speed,
    cloud: fetchData.clouds.all,
    rain: fetchData.main.feels_like,
    description: fetchData.weather[0].description,
    icon: fetchData.weather[0].icon,
    time,
  };

  view.temperature.innerHTML = `${data.temperature}\u00B0C`;
  view.currentCity.innerHTML = data.city;
  view.dateTime.innerHTML = data.time;
  view.cloudy.innerHTML = `${data.cloud}%`;
  view.humidity.innerHTML = `${data.humidity}%`;
  view.wind.innerHTML = `${data.wind_speed}m/s`;
  view.rain.innerHTML = `${data.rain}%`;
  view.weatherDescription.innerHTML = `${data.description}`;
  view.iconElement = view.icon.get(data.icon);
  view.weatherIcon.innerHTML = iconElement;

  return data, time;
}
getWeatherAPI('ha noi');
searchBtn.addEventListener('click', getWeatherAPI(getLocation()));

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
