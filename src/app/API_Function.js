const weather = () => {
  function convertData(data) {
    // DATE MANIPULATION
    const fetchTime = new Date(data.dt * 1000);
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

    // ASSIGNING DATA TO AN EASY MANIPULATE OBJECT

    const weatherData = {
      city: data.name,
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      cloud: data.clouds.all,
      rain: data.main.feels_like,
      // BECAUSE WEATHER IS AN ARRAY
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      time,
    };

    return weatherData;
  }

  // GETTING DATA FROM API
  async function getData(location) {
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${location}
  &units=metric&APPID=61143bcabab93bed1de9b4d47e030e70`;
    try {
      // FETCHING DATA
      const response = await fetch(api, { mode: 'cors' });
      if (!response.ok) throw new Error(`City ${location} not found`);
      const fetchData = await response.json();

      const data = convertData(fetchData);
      return data;
    } catch {
      alert(error);
      return null;
    }
  }

  return getData;
};

export { weather };
