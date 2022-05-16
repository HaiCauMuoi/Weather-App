/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function getLocation() {\r\n  const location_search = document.getElementById('location-search');\r\n  const location = location_search.value;\r\n  return location;\r\n}\r\n\r\nlet ATTEMP = 1;\r\n\r\nasync function getWeatherAPI() {\r\n  const search = getLocation();\r\n  const respone = await fetch(\r\n    `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=61143bcabab93bed1de9b4d47e030e70`,\r\n    { mode: 'cors' }\r\n  );\r\n  const fetch_data = await respone.json();\r\n  const fetchTime = new Date(fetch_data.dt * 1000);\r\n  const options = {\r\n    hc: '24',\r\n    weekday: 'long',\r\n    year: '2-digit',\r\n    month: 'long',\r\n    day: '2-digit',\r\n    hour: '2-digit',\r\n    minute: '2-digit',\r\n  };\r\n  const time = fetchTime.toLocaleDateString('en-GB', options);\r\n  const data = await {\r\n    city: fetch_data.name,\r\n    temperature: Math.round(fetch_data.main.temp),\r\n    humidity: fetch_data.main.humidity,\r\n    wind_speed: fetch_data.wind.speed,\r\n    time,\r\n  };\r\n  console.log(data);\r\n  return data, time;\r\n}\r\n\r\nasync function convert() {\r\n  const search = getLocation();\r\n  const unit = getState(ATTEMP);\r\n  const text = await fetch(\r\n    `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=${unit}&APPID=61143bcabab93bed1de9b4d47e030e70`,\r\n    { mode: 'cors' }\r\n  );\r\n  const fetch_data = await text.json();\r\n  const fetchTime = new Date(fetch_data.dt * 1000);\r\n  const options = {\r\n    hc: '24',\r\n    weekday: 'long',\r\n    year: '2-digit',\r\n    month: 'long',\r\n    day: '2-digit',\r\n    hour: '2-digit',\r\n    minute: '2-digit',\r\n  };\r\n  const time = fetchTime.toLocaleDateString('en-GB', options);\r\n  const data = await {\r\n    city: fetch_data.name,\r\n    temperature: Math.round(fetch_data.main.temp),\r\n    humidity: fetch_data.main.humidity,\r\n    wind_speed: fetch_data.wind.speed,\r\n    time,\r\n  };\r\n\r\n  console.log(data);\r\n  return data;\r\n}\r\n\r\nfunction getState() {\r\n  if (ATTEMP === 1) {\r\n    ATTEMP++;\r\n    return 'metric';\r\n  }\r\n  ATTEMP--;\r\n  return 'imperial';\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;