function getLocation() {
  const location_search = document.getElementById('location-search');
  const location = location_search.value;
  return location;
}

let ATTEMP = 1;

async function getWeatherAPI() {
  const search = getLocation();
  const respone = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=61143bcabab93bed1de9b4d47e030e70`,
    { mode: 'cors' }
  );
  const fetch_data = await respone.json();
  const fetchTime = new Date(fetch_data.dt * 1000);
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
  const data = await {
    city: fetch_data.name,
    temperature: Math.round(fetch_data.main.temp),
    humidity: fetch_data.main.humidity,
    wind_speed: fetch_data.wind.speed,
    time,
  };
  console.log(data);
  return data, time;
}

async function convert() {
  const search = getLocation();
  const unit = getState(ATTEMP);
  const text = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=${unit}&APPID=61143bcabab93bed1de9b4d47e030e70`,
    { mode: 'cors' }
  );
  const fetch_data = await text.json();
  const fetchTime = new Date(fetch_data.dt * 1000);
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
  const data = await {
    city: fetch_data.name,
    temperature: Math.round(fetch_data.main.temp),
    humidity: fetch_data.main.humidity,
    wind_speed: fetch_data.wind.speed,
    time,
  };

  console.log(data);
  return data;
}

function getState() {
  if (ATTEMP === 1) {
    ATTEMP++;
    return 'metric';
  }
  ATTEMP--;
  return 'imperial';
}
