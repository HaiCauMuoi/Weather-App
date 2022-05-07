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

eval("function getLocation() {\r\n  const location_search = document.getElementById('location-search');\r\n  const location = location_search.value;\r\n  return location;\r\n}\r\n\r\nasync function getWeatherAPI() {\r\n  const search = getLocation();\r\n  const respone = await fetch(\r\n    `http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=61143bcabab93bed1de9b4d47e030e70`,\r\n    { mode: 'cors' }\r\n  );\r\n  const fetch_data = await respone.json();\r\n  const data = await {\r\n    city: fetch_data.name,\r\n    temperature: Math.round(fetch_data.main.temp / 10),\r\n    humidity: fetch_data.main.humidity,\r\n    wind_speed: fetch_data.wind.speed,\r\n  };\r\n\r\n  console.log(data);\r\n  return data;\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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