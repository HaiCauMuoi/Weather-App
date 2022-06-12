/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/API_Function.js":
/*!*********************************!*\
  !*** ./src/app/API_Function.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = {
  convertData(data) {
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
  },
  // GETTING DATA FROM API
  async getData(location) {
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=61143bcabab93bed1de9b4d47e030e70`;
    try {
      // FETCHING DATA
      const response = await fetch(api, { mode: 'cors' });
      if (!response.ok) throw new Error(`City ${location} not found`);
      const fetchData = await response.json();

      const data = this.convertData(fetchData);
      return data;
    } catch {
      // eslint-disable-next-line no-alert
      return null;
    }
  },

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);


/***/ }),

/***/ "./src/app/DOM.js":
/*!************************!*\
  !*** ./src/app/DOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/app/Icon.js");
// IMPORTING WEATHER ICON



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
    temperature.innerHTML = `${data.temperature}\u00B0C`;
    currentCity.innerHTML = data.city;
    dateTime.innerHTML = data.time;
    cloudy.innerHTML = `${data.cloud}%`;
    humidity.innerHTML = `${data.humidity}%`;
    wind.innerHTML = `${data.wind_speed}m/s`;
    rain.innerHTML = `${data.rain}%`;
    weatherDescription.innerHTML = `${data.description}`;
    // GETTING ICON SVG FROM THE MAP DECLARED IN ICON.JS
    const iconElement = _Icon__WEBPACK_IMPORTED_MODULE_0__["default"].get(data.icon);
    weatherIcon.innerHTML = iconElement;
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);


/***/ }),

/***/ "./src/app/Icon.js":
/*!*************************!*\
  !*** ./src/app/Icon.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ASSIGNING SVGS TO VARIABLES IN A MAP
const statusIcon = new Map()
  .set(
    '01d',
    `<svg 
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-100-fill"
      viewBox="0 0 36 36"
    >
      <path d="M8.005 3.5a4.5 4.5 0 1 0 4.5 4.5 4.5 4.5 0 0 0-4.5-4.5zm.001-.997a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 1 1 1 0v1.5a.5.5 0 0 1-.5.5z" />
      <path d="M8.006 2.503a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 1 1 1 0v1.5a.5.5 0 0 1-.5.5zM3.765 4.255a.498.498 0 0 1-.353-.147L2.35 3.048a.5.5 0 0 1 .707-.707L4.12 3.4a.5.5 0 0 1-.354.854zM2.003 8.493h-1.5a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 0 1zm.691 5.303a.5.5 0 0 1-.354-.854l1.062-1.06a.5.5 0 0 1 .707.707l-1.062 1.06a.498.498 0 0 1-.353.147zm5.299 2.201a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5zm5.302-2.191a.498.498 0 0 1-.353-.147l-1.06-1.06a.5.5 0 1 1 .706-.707l1.06 1.06a.5.5 0 0 1-.353.854zm2.202-5.299h-1.5a.5.5 0 1 1 0-1h1.5a.5.5 0 0 1 0 1zm-3.252-4.242a.5.5 0 0 1-.354-.854l1.06-1.06a.5.5 0 0 1 .708.707l-1.06 1.06a.498.498 0 0 1-.354.147z" />
    </svg>`,
  )
  .set(
    '01n',
    `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-150"
      viewBox="0 0 36 36"
    >
      <path d="M5.593 3.407a6.626 6.626 0 0 0 .3 2.636A6.524 6.524 0 0 0 9.95 10.19a6.61 6.61 0 0 0 2.181.378 6.306 6.306 0 0 0 .666-.036A5.229 5.229 0 0 1 8.384 13c-.1 0-.202-.003-.303-.009a5.208 5.208 0 0 1-2.488-9.584M6.264 2a.486.486 0 0 0-.182.036 6.204 6.204 0 0 0-3.878 6.137 6.276 6.276 0 0 0 5.82 5.817c.12.007.24.01.36.01a6.193 6.193 0 0 0 5.775-3.968.5.5 0 0 0-.48-.671.537.537 0 0 0-.14.019 5.366 5.366 0 0 1-1.408.189 5.595 5.595 0 0 1-1.851-.322 5.56 5.56 0 0 1-3.542-6.612A.505.505 0 0 0 6.264 2z" />
    </svg>`,
  )
  .set(
    '02d',
    `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-101"
      viewBox="0 0 36 36"
    >
      <path d="M4.995 1.777a.516.516 0 0 0 .503.404.535.535 0 0 0 .112-.012.517.517 0 0 0 .392-.616L5.746.403A.516.516 0 0 0 4.74.627zM1.273 3.535l.994.633a.516.516 0 0 0 .555-.87l-.995-.633a.516.516 0 0 0-.554.87zM.878 8.043l1.15-.256a.516.516 0 1 0-.223-1.008l-1.15.256a.516.516 0 0 0 .111 1.02.535.535 0 0 0 .112-.012zm10.238-2.28a.535.535 0 0 0 .112-.012l1.15-.256a.516.516 0 1 0-.224-1.008l-1.15.256a.516.516 0 0 0 .112 1.02zM8.772 2.728a.516.516 0 0 0 .712-.158l.633-.994a.516.516 0 0 0-.87-.554l-.633.994a.516.516 0 0 0 .158.712zM3.07 7.032a3.506 3.506 0 0 0 .33.87 3.129 3.129 0 0 0 .909-.486 2.453 2.453 0 0 1-.233-.608 2.504 2.504 0 0 1 1.9-2.988 2.5 2.5 0 0 1 2.988 1.9c.003.013.002.026.005.038a5.42 5.42 0 0 1 1.063.25 3.509 3.509 0 0 0-.061-.512 3.535 3.535 0 1 0-6.902 1.536z" />
      <path d="M12.715 8.48a3.236 3.236 0 0 0-.41.04 4.824 4.824 0 0 0-8.086 0 3.234 3.234 0 0 0-.409-.04 3.285 3.285 0 1 0 1.283 6.31 4.756 4.756 0 0 0 6.339 0 3.286 3.286 0 1 0 1.283-6.31zm0 5.539a2.238 2.238 0 0 1-.88-.179 1.032 1.032 0 0 0-1.083.173 3.724 3.724 0 0 1-4.98 0 1.032 1.032 0 0 0-1.082-.173 2.254 2.254 0 1 1-.88-4.329 1.265 1.265 0 0 1 .175.02l.105.014a1.031 1.031 0 0 0 .992-.459 3.792 3.792 0 0 1 6.36 0 1.031 1.031 0 0 0 .992.459l.105-.014a1.266 1.266 0 0 1 .176-.02 2.254 2.254 0 1 1 0 4.508z" />
    </svg>`,
  )
  .set(
    '02n',
    `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-151"
      viewBox="0 0 36 36"
    >
      <path d="M15.605 6.634a.412.412 0 0 0-.109.015 4.127 4.127 0 0 1-1.082.145 4.303 4.303 0 0 1-1.424-.248 4.276 4.276 0 0 1-2.725-5.086A.388.388 0 0 0 9.9.972a.374.374 0 0 0-.14.027A4.772 4.772 0 0 0 6.779 5.72c.007.12.038.233.055.35a5.29 5.29 0 0 1 .667-.045c.113 0 .224.012.336.02a3.562 3.562 0 0 1-.06-.384 3.782 3.782 0 0 1 1.357-3.138 5.405 5.405 0 0 0 .262 1.629A5.25 5.25 0 0 0 12.66 7.49a5.315 5.315 0 0 0 1.754.304h.047a3.788 3.788 0 0 1-.886.771 3.793 3.793 0 0 1 .874.622 4.774 4.774 0 0 0 1.525-2.037.384.384 0 0 0-.37-.516z" />
      <path d="M11.815 8.71a3.138 3.138 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.136 3.136 0 0 0-.397-.04 3.184 3.184 0 1 0 1.244 6.117 4.61 4.61 0 0 0 6.144 0 3.185 3.185 0 1 0 1.244-6.116zm0 5.37a2.17 2.17 0 0 1-.852-.173 1 1 0 0 0-1.05.168 3.61 3.61 0 0 1-4.827 0 1 1 0 0 0-1.049-.168 2.185 2.185 0 1 1-.853-4.196 1.227 1.227 0 0 1 .17.018l.102.014a1 1 0 0 0 .962-.444 3.675 3.675 0 0 1 6.164 0 1 1 0 0 0 .962.444l.102-.014a1.228 1.228 0 0 1 .17-.018 2.184 2.184 0 1 1 0 4.369z" />
    </svg>`,
  )
  .set(
    '03d',
    `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-104"
      viewBox="0 0 36 36"
    >
      <path d="M12.603 7.225a3.345 3.345 0 0 0-.423.042 4.987 4.987 0 0 0-8.36 0 3.345 3.345 0 0 0-.423-.042 3.397 3.397 0 1 0 1.326 6.524 4.917 4.917 0 0 0 6.554 0 3.397 3.397 0 1 0 1.326-6.524zm0 5.793a2.38 2.38 0 0 1-.935-.19 1 1 0 0 0-1.05.168 3.917 3.917 0 0 1-5.236 0 1 1 0 0 0-1.05-.168 2.397 2.397 0 1 1-.935-4.603 1.369 1.369 0 0 1 .19.02l.108.014a1 1 0 0 0 .961-.444 3.987 3.987 0 0 1 6.688 0 1 1 0 0 0 .961.444l.108-.014a1.369 1.369 0 0 1 .19-.02 2.397 2.397 0 1 1 0 4.793z" />
      <path d="M4.008 6.136a1.545 1.545 0 0 1 1.54-1.467.915.915 0 0 1 .108.012l.084.012a1 1 0 0 0 .961-.445 2.74 2.74 0 0 1 4.598 0 1 1 0 0 0 .961.445l.084-.012a.92.92 0 0 1 .108-.012 1.524 1.524 0 0 1 1.455 2.048 3.379 3.379 0 0 1 .86.538A2.484 2.484 0 0 0 12.136 3.7a3.74 3.74 0 0 0-6.27 0 2.508 2.508 0 0 0-.317-.032A2.548 2.548 0 0 0 3 6.216a2.464 2.464 0 0 0 .069.517 1.705 1.705 0 0 1 .94-.597z" />
    </svg>`,
  )
  .set(
    '03n',
    ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-104"
      viewBox="0 0 36 36"
    >
      <path d="M12.603 7.225a3.345 3.345 0 0 0-.423.042 4.987 4.987 0 0 0-8.36 0 3.345 3.345 0 0 0-.423-.042 3.397 3.397 0 1 0 1.326 6.524 4.917 4.917 0 0 0 6.554 0 3.397 3.397 0 1 0 1.326-6.524zm0 5.793a2.38 2.38 0 0 1-.935-.19 1 1 0 0 0-1.05.168 3.917 3.917 0 0 1-5.236 0 1 1 0 0 0-1.05-.168 2.397 2.397 0 1 1-.935-4.603 1.369 1.369 0 0 1 .19.02l.108.014a1 1 0 0 0 .961-.444 3.987 3.987 0 0 1 6.688 0 1 1 0 0 0 .961.444l.108-.014a1.369 1.369 0 0 1 .19-.02 2.397 2.397 0 1 1 0 4.793z" />
      <path d="M4.008 6.136a1.545 1.545 0 0 1 1.54-1.467.915.915 0 0 1 .108.012l.084.012a1 1 0 0 0 .961-.445 2.74 2.74 0 0 1 4.598 0 1 1 0 0 0 .961.445l.084-.012a.92.92 0 0 1 .108-.012 1.524 1.524 0 0 1 1.455 2.048 3.379 3.379 0 0 1 .86.538A2.484 2.484 0 0 0 12.136 3.7a3.74 3.74 0 0 0-6.27 0 2.508 2.508 0 0 0-.317-.032A2.548 2.548 0 0 0 3 6.216a2.464 2.464 0 0 0 .069.517 1.705 1.705 0 0 1 .94-.597z" />
    </svg>`,
  )
  .set(
    '04d',
    ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-500"
      viewBox="0 0 36 36"
    >
      <path d="M15.488 8.208h-.526a3.174 3.174 0 0 0-3.147-2.81 3.146 3.146 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.146 3.146 0 0 0-.396-.04 3.185 3.185 0 1 0 1.243 6.117 4.61 4.61 0 0 0 6.144 0 3.184 3.184 0 0 0 4.365-2.307h.551a.5.5 0 0 0 0-1zm-3.673 2.56a2.172 2.172 0 0 1-.852-.174 1 1 0 0 0-1.05.168 3.61 3.61 0 0 1-4.827 0 1 1 0 0 0-1.049-.168 2.185 2.185 0 1 1-.852-4.196 1.22 1.22 0 0 1 .168.018l.104.014a1 1 0 0 0 .96-.444 3.675 3.675 0 0 1 6.165 0 1 1 0 0 0 .961.444l.104-.014a1.22 1.22 0 0 1 .168-.018 2.184 2.184 0 0 1 2.147 1.81h-7.45a.5.5 0 0 0 0 1h7.386a2.18 2.18 0 0 1-2.083 1.56z" />
    </svg>`,
  )
  .set(
    '04n',
    `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-500"
      viewBox="0 0 36 36"
    >
      <path d="M15.488 8.208h-.526a3.174 3.174 0 0 0-3.147-2.81 3.146 3.146 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.146 3.146 0 0 0-.396-.04 3.185 3.185 0 1 0 1.243 6.117 4.61 4.61 0 0 0 6.144 0 3.184 3.184 0 0 0 4.365-2.307h.551a.5.5 0 0 0 0-1zm-3.673 2.56a2.172 2.172 0 0 1-.852-.174 1 1 0 0 0-1.05.168 3.61 3.61 0 0 1-4.827 0 1 1 0 0 0-1.049-.168 2.185 2.185 0 1 1-.852-4.196 1.22 1.22 0 0 1 .168.018l.104.014a1 1 0 0 0 .96-.444 3.675 3.675 0 0 1 6.165 0 1 1 0 0 0 .961.444l.104-.014a1.22 1.22 0 0 1 .168-.018 2.184 2.184 0 0 1 2.147 1.81h-7.45a.5.5 0 0 0 0 1h7.386a2.18 2.18 0 0 1-2.083 1.56z" />
    </svg>`,
  )
  .set(
    '09d',
    `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-308"
      viewBox="0 0 36 36"
    >
      <path d="M7.99 11.449a6.606 6.606 0 0 0-1 2 1 1 0 0 0 2 0 6.606 6.606 0 0 0-1-2zm-3.052-1.5a6.606 6.606 0 0 0-1 2 1 1 0 0 0 2 0 6.606 6.606 0 0 0-1-2zm6.028 0a6.606 6.606 0 0 0-1 2 1 1 0 0 0 2 0 6.606 6.606 0 0 0-1-2zm-8.961.053a.5.5 0 0 0-.5.5v2.953a.5.5 0 0 0 1 0v-2.953a.5.5 0 0 0-.5-.5zm11.763 0a.5.5 0 0 0-.5.5v2.953a.5.5 0 0 0 1 0v-2.953a.5.5 0 0 0-.5-.5zM7.343 0a4.267 4.267 0 0 0-3.576 1.94 2.853 2.853 0 0 0-.362-.037 2.905 2.905 0 1 0 1.135 5.58 4.285 4.285 0 0 0 2.093 1.003 2.267 2.267 0 0 1-.362-1.108l-.003-.036a2.982 2.982 0 0 1-1.07-.612 1 1 0 0 0-1.049-.167 1.905 1.905 0 1 1-.744-3.66 1.02 1.02 0 0 1 .143.016l.094.012a.982.982 0 0 0 .125.008 1 1 0 0 0 .837-.452 3.265 3.265 0 0 1 5.477 0 1 1 0 0 0 .837.452.982.982 0 0 0 .125-.008l.094-.012a1.02 1.02 0 0 1 .143-.016 1.89 1.89 0 0 1 1.543.806 2.527 2.527 0 0 1 1.34.874 2.896 2.896 0 0 0-2.883-2.68 2.852 2.852 0 0 0-.362.036A4.267 4.267 0 0 0 7.343 0z" />
      <path d="M11.43 4.87a1.836 1.836 0 0 1 1.539.836 1 1 0 0 0 .961.444l.068-.009.048-.007a.93.93 0 1 1-.363 1.786 1 1 0 0 0-1.05.167 1.794 1.794 0 0 1-2.406 0 1 1 0 0 0-1.049-.167.93.93 0 1 1-.375-1.787l.06.008.068.01a1 1 0 0 0 .961-.445 1.836 1.836 0 0 1 1.539-.836m0-1a2.834 2.834 0 0 0-2.375 1.288 1.904 1.904 0 0 0-.24-.024 1.93 1.93 0 1 0 .753 3.706 2.794 2.794 0 0 0 3.723 0 1.93 1.93 0 1 0 .754-3.706 1.904 1.904 0 0 0-.24.024A2.834 2.834 0 0 0 11.43 3.87z" />
    </svg>`,
  )
  .set(
    '09n',
    `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-308"
      viewBox="0 0 36 36"
    >
      <path d="M7.99 11.449a6.606 6.606 0 0 0-1 2 1 1 0 0 0 2 0 6.606 6.606 0 0 0-1-2zm-3.052-1.5a6.606 6.606 0 0 0-1 2 1 1 0 0 0 2 0 6.606 6.606 0 0 0-1-2zm6.028 0a6.606 6.606 0 0 0-1 2 1 1 0 0 0 2 0 6.606 6.606 0 0 0-1-2zm-8.961.053a.5.5 0 0 0-.5.5v2.953a.5.5 0 0 0 1 0v-2.953a.5.5 0 0 0-.5-.5zm11.763 0a.5.5 0 0 0-.5.5v2.953a.5.5 0 0 0 1 0v-2.953a.5.5 0 0 0-.5-.5zM7.343 0a4.267 4.267 0 0 0-3.576 1.94 2.853 2.853 0 0 0-.362-.037 2.905 2.905 0 1 0 1.135 5.58 4.285 4.285 0 0 0 2.093 1.003 2.267 2.267 0 0 1-.362-1.108l-.003-.036a2.982 2.982 0 0 1-1.07-.612 1 1 0 0 0-1.049-.167 1.905 1.905 0 1 1-.744-3.66 1.02 1.02 0 0 1 .143.016l.094.012a.982.982 0 0 0 .125.008 1 1 0 0 0 .837-.452 3.265 3.265 0 0 1 5.477 0 1 1 0 0 0 .837.452.982.982 0 0 0 .125-.008l.094-.012a1.02 1.02 0 0 1 .143-.016 1.89 1.89 0 0 1 1.543.806 2.527 2.527 0 0 1 1.34.874 2.896 2.896 0 0 0-2.883-2.68 2.852 2.852 0 0 0-.362.036A4.267 4.267 0 0 0 7.343 0z" />
      <path d="M11.43 4.87a1.836 1.836 0 0 1 1.539.836 1 1 0 0 0 .961.444l.068-.009.048-.007a.93.93 0 1 1-.363 1.786 1 1 0 0 0-1.05.167 1.794 1.794 0 0 1-2.406 0 1 1 0 0 0-1.049-.167.93.93 0 1 1-.375-1.787l.06.008.068.01a1 1 0 0 0 .961-.445 1.836 1.836 0 0 1 1.539-.836m0-1a2.834 2.834 0 0 0-2.375 1.288 1.904 1.904 0 0 0-.24-.024 1.93 1.93 0 1 0 .753 3.706 2.794 2.794 0 0 0 3.723 0 1.93 1.93 0 1 0 .754-3.706 1.904 1.904 0 0 0-.24.024A2.834 2.834 0 0 0 11.43 3.87z" />
    </svg>`,
  )
  .set(
    '10d',
    `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      class="qi-301"
      viewBox="0 0 36 36"
    >
      <path d="M7.012 14.985a1 1 0 0 0 2 0 6.605 6.605 0 0 0-1-2 6.605 6.605 0 0 0-1 2zM3.959 14a1 1 0 0 0 2 0 6.605 6.605 0 0 0-1-2 6.605 6.605 0 0 0-1 2zm6.028 0a1 1 0 0 0 2 0 6.605 6.605 0 0 0-1-2 6.605 6.605 0 0 0-1 2zM5.207 1.904h.007a.5.5 0 0 0 .493-.506L5.695.494a.5.5 0 0 0-.5-.494h-.007a.5.5 0 0 0-.493.506l.012.905a.5.5 0 0 0 .5.493zm-2.892.946a.5.5 0 1 0 .698-.716l-.648-.63a.5.5 0 1 0-.697.715zm-.179 2.203a.5.5 0 0 0-.5-.493h-.007l-.905.011a.5.5 0 0 0 .007 1h.007l.904-.011a.5.5 0 0 0 .494-.507zm5.638-2.12a.5.5 0 0 0 .359-.151l.63-.648a.5.5 0 0 0-.716-.698l-.631.648a.5.5 0 0 0 .358.849z" />
      <path d="M12.028 5.579a2.927 2.927 0 0 0-.37.037 4.364 4.364 0 0 0-7.316 0 2.926 2.926 0 0 0-.37-.037 2.972 2.972 0 1 0 1.16 5.709 4.302 4.302 0 0 0 5.735 0 2.972 2.972 0 1 0 1.16-5.71zm0 4.944a1.959 1.959 0 0 1-.77-.156 1 1 0 0 0-1.05.168 3.303 3.303 0 0 1-4.417 0 1 1 0 0 0-1.05-.168 1.972 1.972 0 1 1-.769-3.788 1.077 1.077 0 0 1 .15.017l.095.012a1 1 0 0 0 .962-.444 3.364 3.364 0 0 1 5.642 0 1 1 0 0 0 .962.444l.095-.012a1.08 1.08 0 0 1 .15-.017 1.972 1.972 0 1 1 0 3.944zM2.482 5.315A3.53 3.53 0 0 1 3.5 5.027a1.831 1.831 0 0 1 1.81-1.603 1.81 1.81 0 0 1 .553.095 4.933 4.933 0 0 1 1.281-.405A2.82 2.82 0 0 0 2.476 5.26c0 .02.006.037.006.056z" />
    </svg>`,
  )
  .set(
    '10n',
    `<svg id="&#x56FE;&#x5C42;_1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-351" viewBox="0 0 36 36">
  <defs>
    <style>
      .cls-1{fill-rule:evenodd}
    </style>
  </defs>
  <path d="M15.466 4.23a.308.308 0 0 0-.08.01 3.072 3.072 0 0 1-.806.108 3.203 3.203 0 0 1-1.06-.184A3.183 3.183 0 0 1 11.492.378a.289.289 0 0 0-.272-.363.278.278 0 0 0-.104.02 3.546 3.546 0 0 0-2.21 3.095 4.932 4.932 0 0 1 .99.294 2.56 2.56 0 0 1 .54-1.672 4.416 4.416 0 0 0 .165.707 4.165 4.165 0 0 0 2.59 2.649 4.315 4.315 0 0 0 .846.204 2.58 2.58 0 0 1-.239.163 3.572 3.572 0 0 1 .823.642 3.553 3.553 0 0 0 1.12-1.504.286.286 0 0 0-.275-.384zm-3.438 1.356a2.926 2.926 0 0 0-.37.037 4.364 4.364 0 0 0-7.316 0 2.927 2.927 0 0 0-.37-.037 2.972 2.972 0 1 0 1.16 5.709 4.302 4.302 0 0 0 5.735 0 2.972 2.972 0 1 0 1.16-5.709zm0 4.944a1.959 1.959 0 0 1-.77-.156 1 1 0 0 0-1.05.168 3.303 3.303 0 0 1-4.417 0 1 1 0 0 0-1.05-.168 1.972 1.972 0 1 1-.769-3.788 1.08 1.08 0 0 1 .15.017l.095.013a1 1 0 0 0 .962-.445 3.364 3.364 0 0 1 5.642 0 1 1 0 0 0 .962.445l.095-.013a1.077 1.077 0 0 1 .15-.017 1.972 1.972 0 1 1 0 3.944zM7.02 15a1 1 0 0 0 2 0 6.605 6.605 0 0 0-1-2 6.605 6.605 0 0 0-1 2z" class="cls-1"/>
  <path d="M3.967 14.015a1 1 0 0 0 2 0 6.604 6.604 0 0 0-1-2 6.604 6.604 0 0 0-1 2zm6.028 0a1 1 0 0 0 2 0 6.604 6.604 0 0 0-1-2 6.604 6.604 0 0 0-1 2z" class="cls-1"/>
</svg>`,
  )
  .set(
    '11d',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-303" viewBox="0 0 36 36">
  <path d="M3.685 8.455a3.172 3.172 0 0 0 1.243-.253 4.61 4.61 0 0 0 6.144 0 3.185 3.185 0 1 0 1.243-6.116 3.146 3.146 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.146 3.146 0 0 0-.397-.04 3.184 3.184 0 1 0 0 6.369zm0-5.37a1.237 1.237 0 0 1 .17.02l.101.013a1 1 0 0 0 .962-.444 3.675 3.675 0 0 1 6.164 0 1 1 0 0 0 .962.444l.102-.014a1.237 1.237 0 0 1 .17-.018 2.184 2.184 0 1 1-.853 4.196 1 1 0 0 0-1.05.167 3.61 3.61 0 0 1-4.827 0 1 1 0 0 0-1.049-.167 2.185 2.185 0 1 1-.852-4.196zM2.998 12.5a1 1 0 1 0 2 0 6.604 6.604 0 0 0-1-2 6.604 6.604 0 0 0-1 2zm-2-1.552a.786.786 0 1 0 1.573 0 5.193 5.193 0 0 0-.787-1.573 5.193 5.193 0 0 0-.786 1.573zm12.429 0a.786.786 0 1 0 1.573 0 5.193 5.193 0 0 0-.786-1.573 5.193 5.193 0 0 0-.787 1.573zM11.026 12.5a1 1 0 0 0 2 0 6.604 6.604 0 0 0-1-2 6.604 6.604 0 0 0-1 2zm-2.352-.86c-.058 0-.096-.051-.07-.095l.858-1.462c.026-.044-.012-.096-.07-.096h-1.71a.167.167 0 0 0-.145.078l-1.514 2.681c-.045.08.024.172.128.172H7.69c.054 0 .091.045.074.088l-.8 1.976c-.03.07.078.12.134.064l3.227-3.297c.042-.043.006-.109-.06-.109z"/>
</svg>`,
  )
  .set(
    '11n',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-303" viewBox="0 0 36 36">
  <path d="M3.685 8.455a3.172 3.172 0 0 0 1.243-.253 4.61 4.61 0 0 0 6.144 0 3.185 3.185 0 1 0 1.243-6.116 3.146 3.146 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.146 3.146 0 0 0-.397-.04 3.184 3.184 0 1 0 0 6.369zm0-5.37a1.237 1.237 0 0 1 .17.02l.101.013a1 1 0 0 0 .962-.444 3.675 3.675 0 0 1 6.164 0 1 1 0 0 0 .962.444l.102-.014a1.237 1.237 0 0 1 .17-.018 2.184 2.184 0 1 1-.853 4.196 1 1 0 0 0-1.05.167 3.61 3.61 0 0 1-4.827 0 1 1 0 0 0-1.049-.167 2.185 2.185 0 1 1-.852-4.196zM2.998 12.5a1 1 0 1 0 2 0 6.604 6.604 0 0 0-1-2 6.604 6.604 0 0 0-1 2zm-2-1.552a.786.786 0 1 0 1.573 0 5.193 5.193 0 0 0-.787-1.573 5.193 5.193 0 0 0-.786 1.573zm12.429 0a.786.786 0 1 0 1.573 0 5.193 5.193 0 0 0-.786-1.573 5.193 5.193 0 0 0-.787 1.573zM11.026 12.5a1 1 0 0 0 2 0 6.604 6.604 0 0 0-1-2 6.604 6.604 0 0 0-1 2zm-2.352-.86c-.058 0-.096-.051-.07-.095l.858-1.462c.026-.044-.012-.096-.07-.096h-1.71a.167.167 0 0 0-.145.078l-1.514 2.681c-.045.08.024.172.128.172H7.69c.054 0 .091.045.074.088l-.8 1.976c-.03.07.078.12.134.064l3.227-3.297c.042-.043.006-.109-.06-.109z"/>
</svg>`,
  )
  .set(
    '13d',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-514" viewBox="0 0 36 36">
  <path d="M13.502 10.3H4.525a.5.5 0 0 0 0 1h8.977a.5.5 0 0 0 0-1zM15.5 4.188h-.702a3.176 3.176 0 0 0-2.983-2.102 3.146 3.146 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.146 3.146 0 0 0-.397-.04 3.185 3.185 0 1 0 1.244 6.116 4.61 4.61 0 0 0 6.144 0A3.185 3.185 0 0 0 15 5.27c0-.028-.008-.054-.008-.082h.508a.5.5 0 0 0 0-1zM14 5.27a2.162 2.162 0 0 1-.068.516H5.996a.5.5 0 1 0 0 1h7.386a2.177 2.177 0 0 1-2.42.496 1 1 0 0 0-1.048.167 3.61 3.61 0 0 1-4.828 0 1 1 0 0 0-1.049-.167 2.185 2.185 0 1 1-.852-4.196 1.22 1.22 0 0 1 .168.018l.104.014a1 1 0 0 0 .96-.444 3.675 3.675 0 0 1 6.165 0 1 1 0 0 0 .961.444l.104-.014a1.22 1.22 0 0 1 .168-.018 2.177 2.177 0 0 1 1.886 1.102H8.47a.5.5 0 0 0 0 1h5.523c0 .028.008.054.008.082zm-3.017 7.343a.5.5 0 0 0-.5-.5H1.508a.5.5 0 1 0 0 1h8.975a.5.5 0 0 0 .5-.5zm1.111 1.344H3.118a.5.5 0 1 0 0 1h8.976a.5.5 0 0 0 0-1z"/>
</svg>`,
  )
  .set(
    '13n',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-514" viewBox="0 0 36 36">
  <path d="M13.502 10.3H4.525a.5.5 0 0 0 0 1h8.977a.5.5 0 0 0 0-1zM15.5 4.188h-.702a3.176 3.176 0 0 0-2.983-2.102 3.146 3.146 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.146 3.146 0 0 0-.397-.04 3.185 3.185 0 1 0 1.244 6.116 4.61 4.61 0 0 0 6.144 0A3.185 3.185 0 0 0 15 5.27c0-.028-.008-.054-.008-.082h.508a.5.5 0 0 0 0-1zM14 5.27a2.162 2.162 0 0 1-.068.516H5.996a.5.5 0 1 0 0 1h7.386a2.177 2.177 0 0 1-2.42.496 1 1 0 0 0-1.048.167 3.61 3.61 0 0 1-4.828 0 1 1 0 0 0-1.049-.167 2.185 2.185 0 1 1-.852-4.196 1.22 1.22 0 0 1 .168.018l.104.014a1 1 0 0 0 .96-.444 3.675 3.675 0 0 1 6.165 0 1 1 0 0 0 .961.444l.104-.014a1.22 1.22 0 0 1 .168-.018 2.177 2.177 0 0 1 1.886 1.102H8.47a.5.5 0 0 0 0 1h5.523c0 .028.008.054.008.082zm-3.017 7.343a.5.5 0 0 0-.5-.5H1.508a.5.5 0 1 0 0 1h8.975a.5.5 0 0 0 .5-.5zm1.111 1.344H3.118a.5.5 0 1 0 0 1h8.976a.5.5 0 0 0 0-1z"/>
</svg>`,
  )
  .set(
    '50d',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-499-fill" viewBox="0 0 36 36">
  <path d="M14.483 9.172a.504.504 0 0 0-.612-.354l-2.233.599-.98-.566a2.655 2.655 0 0 0-.056-1.884l1.022-.59 2.108.565a.542.542 0 0 0 .13.017.5.5 0 0 0 .13-.983l-1.143-.306.809-.467a.5.5 0 1 0-.5-.865l-.886.512.338-1.265a.501.501 0 0 0-.353-.613.508.508 0 0 0-.612.353l-.598 2.232-.979.564a2.782 2.782 0 0 0-1.661-.884V4.05l1.542-1.542a.5.5 0 0 0-.707-.707l-.835.835v-.933a.5.5 0 1 0-1 0v1.023L6.48 1.8a.5.5 0 1 0-.707.707l1.633 1.632v1.123a2.791 2.791 0 0 0-1.595 1.005l-1.03-.595-.565-2.108a.5.5 0 1 0-.966.26l.306 1.141L2.75 4.5a.5.5 0 1 0-.5.865l.886.512-1.265.339A.5.5 0 0 0 2 7.198a.541.541 0 0 0 .13-.016l2.232-.599.98.566a2.655 2.655 0 0 0 .056 1.884l-1.022.59-2.108-.565a.507.507 0 0 0-.613.353.501.501 0 0 0 .354.613l1.142.306-.809.467a.5.5 0 0 0 .25.932.493.493 0 0 0 .25-.067l.886-.512-.338 1.265a.501.501 0 0 0 .353.613.542.542 0 0 0 .13.017.5.5 0 0 0 .482-.37l.598-2.232.979-.564a2.782 2.782 0 0 0 1.661.884v1.188l-1.542 1.542a.5.5 0 0 0 .707.707l.835-.835v.933a.5.5 0 0 0 1 0v-1.023l.926.925a.5.5 0 0 0 .707-.707l-1.633-1.632v-1.123a2.791 2.791 0 0 0 1.595-1.005l1.03.595.565 2.108a.5.5 0 0 0 .482.37.541.541 0 0 0 .13-.017.501.501 0 0 0 .354-.613l-.306-1.141.807.466a.493.493 0 0 0 .25.067.5.5 0 0 0 .25-.932l-.886-.512 1.265-.339a.501.501 0 0 0 .354-.613z"/>
</svg>`,
  )
  .set(
    '50n',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-499-fill" viewBox="0 0 36 36">
  <path d="M14.483 9.172a.504.504 0 0 0-.612-.354l-2.233.599-.98-.566a2.655 2.655 0 0 0-.056-1.884l1.022-.59 2.108.565a.542.542 0 0 0 .13.017.5.5 0 0 0 .13-.983l-1.143-.306.809-.467a.5.5 0 1 0-.5-.865l-.886.512.338-1.265a.501.501 0 0 0-.353-.613.508.508 0 0 0-.612.353l-.598 2.232-.979.564a2.782 2.782 0 0 0-1.661-.884V4.05l1.542-1.542a.5.5 0 0 0-.707-.707l-.835.835v-.933a.5.5 0 1 0-1 0v1.023L6.48 1.8a.5.5 0 1 0-.707.707l1.633 1.632v1.123a2.791 2.791 0 0 0-1.595 1.005l-1.03-.595-.565-2.108a.5.5 0 1 0-.966.26l.306 1.141L2.75 4.5a.5.5 0 1 0-.5.865l.886.512-1.265.339A.5.5 0 0 0 2 7.198a.541.541 0 0 0 .13-.016l2.232-.599.98.566a2.655 2.655 0 0 0 .056 1.884l-1.022.59-2.108-.565a.507.507 0 0 0-.613.353.501.501 0 0 0 .354.613l1.142.306-.809.467a.5.5 0 0 0 .25.932.493.493 0 0 0 .25-.067l.886-.512-.338 1.265a.501.501 0 0 0 .353.613.542.542 0 0 0 .13.017.5.5 0 0 0 .482-.37l.598-2.232.979-.564a2.782 2.782 0 0 0 1.661.884v1.188l-1.542 1.542a.5.5 0 0 0 .707.707l.835-.835v.933a.5.5 0 0 0 1 0v-1.023l.926.925a.5.5 0 0 0 .707-.707l-1.633-1.632v-1.123a2.791 2.791 0 0 0 1.595-1.005l1.03.595.565 2.108a.5.5 0 0 0 .482.37.541.541 0 0 0 .13-.017.501.501 0 0 0 .354-.613l-.306-1.141.807.466a.493.493 0 0 0 .25.067.5.5 0 0 0 .25-.932l-.886-.512 1.265-.339a.501.501 0 0 0 .354-.613z"/>
</svg>`,
  );

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statusIcon);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/DOM */ "./src/app/DOM.js");
/* harmony import */ var _app_API_Function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/API_Function */ "./src/app/API_Function.js");
// IMPORTING FUNCTION

// eslint-disable-next-line import/no-named-as-default


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
  _app_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].getDOM(await _app_API_Function__WEBPACK_IMPORTED_MODULE_1__["default"].getData('new york'));
});

london.addEventListener('click', async () => {
  _app_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].getDOM(await _app_API_Function__WEBPACK_IMPORTED_MODULE_1__["default"].getData('london'));
});

paris.addEventListener('click', async () => {
  _app_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].getDOM(await _app_API_Function__WEBPACK_IMPORTED_MODULE_1__["default"].getData('paris'));
});

hoChiMinh.addEventListener('click', async () => {
  _app_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].getDOM(await _app_API_Function__WEBPACK_IMPORTED_MODULE_1__["default"].getData('ho chi minh'));
});

// SEARCH WEATHER DATA
searchBtn[0].addEventListener('click', async () => {
  if (locationSearch.value === '') return;
  const weatherData = await _app_API_Function__WEBPACK_IMPORTED_MODULE_1__["default"].getData(locationSearch.value);
  _app_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].getDOM(weatherData);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxvRUFBb0UsU0FBUztBQUM3RTtBQUNBO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQsZ0RBQWdELFVBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25EdkI7QUFDQTtBQUNnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQyw0QkFBNEIsY0FBYztBQUMxQyx3QkFBd0IsZ0JBQWdCO0FBQ3hDLHdCQUF3QixVQUFVO0FBQ2xDLHNDQUFzQyxpQkFBaUI7QUFDdkQ7QUFDQSx3QkFBd0IsaURBQWM7QUFDdEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaENwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQzFNMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUM2QjtBQUM3QjtBQUN5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFXLE9BQU8saUVBQWU7QUFDbkMsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLHVEQUFXLE9BQU8saUVBQWU7QUFDbkMsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLHVEQUFXLE9BQU8saUVBQWU7QUFDbkMsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLHVEQUFXLE9BQU8saUVBQWU7QUFDbkMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlFQUFlO0FBQzNDLEVBQUUsdURBQVc7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELE9BQU8sU0FBUyxLQUFLO0FBQ2hGLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAvQVBJX0Z1bmN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwcC9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBwL0ljb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3ZWF0aGVyID0ge1xyXG4gIGNvbnZlcnREYXRhKGRhdGEpIHtcclxuICAgIC8vIERBVEUgTUFOSVBVTEFUSU9OXHJcbiAgICBjb25zdCBmZXRjaFRpbWUgPSBuZXcgRGF0ZShkYXRhLmR0ICogMTAwMCk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBoYzogJzI0JyxcclxuICAgICAgd2Vla2RheTogJ2xvbmcnLFxyXG4gICAgICB5ZWFyOiAnMi1kaWdpdCcsXHJcbiAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRpbWUgPSBmZXRjaFRpbWUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1HQicsIG9wdGlvbnMpO1xyXG5cclxuICAgIC8vIEFTU0lHTklORyBEQVRBIFRPIEFOIEVBU1kgTUFOSVBVTEFURSBPQkpFQ1RcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHtcclxuICAgICAgY2l0eTogZGF0YS5uYW1lLFxyXG4gICAgICB0ZW1wZXJhdHVyZTogTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCksXHJcbiAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgIHdpbmRfc3BlZWQ6IGRhdGEud2luZC5zcGVlZCxcclxuICAgICAgY2xvdWQ6IGRhdGEuY2xvdWRzLmFsbCxcclxuICAgICAgcmFpbjogZGF0YS5tYWluLmZlZWxzX2xpa2UsXHJcbiAgICAgIC8vIEJFQ0FVU0UgV0VBVEhFUiBJUyBBTiBBUlJBWVxyXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4gICAgICBpY29uOiBkYXRhLndlYXRoZXJbMF0uaWNvbixcclxuICAgICAgdGltZSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG4gIH0sXHJcbiAgLy8gR0VUVElORyBEQVRBIEZST00gQVBJXHJcbiAgYXN5bmMgZ2V0RGF0YShsb2NhdGlvbikge1xyXG4gICAgY29uc3QgYXBpID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz1tZXRyaWMmQVBQSUQ9NjExNDNiY2FiYWI5M2JlZDFkZTliNGQ0N2UwMzBlNzBgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gRkVUQ0hJTkcgREFUQVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaSwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2xvY2F0aW9ufSBub3QgZm91bmRgKTtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29udmVydERhdGEoZmV0Y2hEYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjtcclxuIiwiLy8gSU1QT1JUSU5HIFdFQVRIRVIgSUNPTlxyXG5cclxuaW1wb3J0IHN0YXR1c0ljb24gZnJvbSAnLi9JY29uJztcclxuXHJcbmNvbnN0IHZpZXcgPSB7XHJcbiAgLy8gRE9NIE1BTklQVUxBVElPTlxyXG4gIGdldERPTShkYXRhKSB7XHJcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wZXJhdHVyZScpO1xyXG4gICAgY29uc3QgY3VycmVudENpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1jaXR5Jyk7XHJcbiAgICBjb25zdCBkYXRlVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXRpbWUnKTtcclxuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItaWNvbicpO1xyXG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItZGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IGNsb3VkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG91ZHknKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XHJcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcclxuICAgIGNvbnN0IHJhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbicpO1xyXG5cclxuICAgIC8vIERJU1BMQVlJTkcgREFUQSBUTyBTQ1JFRU5cclxuICAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGAke2RhdGEudGVtcGVyYXR1cmV9XFx1MDBCMENgO1xyXG4gICAgY3VycmVudENpdHkuaW5uZXJIVE1MID0gZGF0YS5jaXR5O1xyXG4gICAgZGF0ZVRpbWUuaW5uZXJIVE1MID0gZGF0YS50aW1lO1xyXG4gICAgY2xvdWR5LmlubmVySFRNTCA9IGAke2RhdGEuY2xvdWR9JWA7XHJcbiAgICBodW1pZGl0eS5pbm5lckhUTUwgPSBgJHtkYXRhLmh1bWlkaXR5fSVgO1xyXG4gICAgd2luZC5pbm5lckhUTUwgPSBgJHtkYXRhLndpbmRfc3BlZWR9bS9zYDtcclxuICAgIHJhaW4uaW5uZXJIVE1MID0gYCR7ZGF0YS5yYWlufSVgO1xyXG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke2RhdGEuZGVzY3JpcHRpb259YDtcclxuICAgIC8vIEdFVFRJTkcgSUNPTiBTVkcgRlJPTSBUSEUgTUFQIERFQ0xBUkVEIElOIElDT04uSlNcclxuICAgIGNvbnN0IGljb25FbGVtZW50ID0gc3RhdHVzSWNvbi5nZXQoZGF0YS5pY29uKTtcclxuICAgIHdlYXRoZXJJY29uLmlubmVySFRNTCA9IGljb25FbGVtZW50O1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2aWV3O1xyXG4iLCIvLyBBU1NJR05JTkcgU1ZHUyBUTyBWQVJJQUJMRVMgSU4gQSBNQVBcclxuY29uc3Qgc3RhdHVzSWNvbiA9IG5ldyBNYXAoKVxyXG4gIC5zZXQoXHJcbiAgICAnMDFkJyxcclxuICAgIGA8c3ZnIFxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIzNlwiXHJcbiAgICAgIGhlaWdodD1cIjM2XCJcclxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIGNsYXNzPVwicWktMTAwLWZpbGxcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDM2IDM2XCJcclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk04LjAwNSAzLjVhNC41IDQuNSAwIDEgMCA0LjUgNC41IDQuNSA0LjUgMCAwIDAtNC41LTQuNXptLjAwMS0uOTk3YS41LjUgMCAwIDEtLjUtLjV2LTEuNWEuNS41IDAgMSAxIDEgMHYxLjVhLjUuNSAwIDAgMS0uNS41elwiIC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOC4wMDYgMi41MDNhLjUuNSAwIDAgMS0uNS0uNXYtMS41YS41LjUgMCAxIDEgMSAwdjEuNWEuNS41IDAgMCAxLS41LjV6TTMuNzY1IDQuMjU1YS40OTguNDk4IDAgMCAxLS4zNTMtLjE0N0wyLjM1IDMuMDQ4YS41LjUgMCAwIDEgLjcwNy0uNzA3TDQuMTIgMy40YS41LjUgMCAwIDEtLjM1NC44NTR6TTIuMDAzIDguNDkzaC0xLjVhLjUuNSAwIDAgMSAwLTFoMS41YS41LjUgMCAwIDEgMCAxem0uNjkxIDUuMzAzYS41LjUgMCAwIDEtLjM1NC0uODU0bDEuMDYyLTEuMDZhLjUuNSAwIDAgMSAuNzA3LjcwN2wtMS4wNjIgMS4wNmEuNDk4LjQ5OCAwIDAgMS0uMzUzLjE0N3ptNS4yOTkgMi4yMDFhLjUuNSAwIDAgMS0uNS0uNXYtMS41YS41LjUgMCAwIDEgMSAwdjEuNWEuNS41IDAgMCAxLS41LjV6bTUuMzAyLTIuMTkxYS40OTguNDk4IDAgMCAxLS4zNTMtLjE0N2wtMS4wNi0xLjA2YS41LjUgMCAxIDEgLjcwNi0uNzA3bDEuMDYgMS4wNmEuNS41IDAgMCAxLS4zNTMuODU0em0yLjIwMi01LjI5OWgtMS41YS41LjUgMCAxIDEgMC0xaDEuNWEuNS41IDAgMCAxIDAgMXptLTMuMjUyLTQuMjQyYS41LjUgMCAwIDEtLjM1NC0uODU0bDEuMDYtMS4wNmEuNS41IDAgMCAxIC43MDguNzA3bC0xLjA2IDEuMDZhLjQ5OC40OTggMCAwIDEtLjM1NC4xNDd6XCIgLz5cclxuICAgIDwvc3ZnPmAsXHJcbiAgKVxyXG4gIC5zZXQoXHJcbiAgICAnMDFuJyxcclxuICAgIGA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjM2XCJcclxuICAgICAgaGVpZ2h0PVwiMzZcIlxyXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgY2xhc3M9XCJxaS0xNTBcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDM2IDM2XCJcclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk01LjU5MyAzLjQwN2E2LjYyNiA2LjYyNiAwIDAgMCAuMyAyLjYzNkE2LjUyNCA2LjUyNCAwIDAgMCA5Ljk1IDEwLjE5YTYuNjEgNi42MSAwIDAgMCAyLjE4MS4zNzggNi4zMDYgNi4zMDYgMCAwIDAgLjY2Ni0uMDM2QTUuMjI5IDUuMjI5IDAgMCAxIDguMzg0IDEzYy0uMSAwLS4yMDItLjAwMy0uMzAzLS4wMDlhNS4yMDggNS4yMDggMCAwIDEtMi40ODgtOS41ODRNNi4yNjQgMmEuNDg2LjQ4NiAwIDAgMC0uMTgyLjAzNiA2LjIwNCA2LjIwNCAwIDAgMC0zLjg3OCA2LjEzNyA2LjI3NiA2LjI3NiAwIDAgMCA1LjgyIDUuODE3Yy4xMi4wMDcuMjQuMDEuMzYuMDFhNi4xOTMgNi4xOTMgMCAwIDAgNS43NzUtMy45NjguNS41IDAgMCAwLS40OC0uNjcxLjUzNy41MzcgMCAwIDAtLjE0LjAxOSA1LjM2NiA1LjM2NiAwIDAgMS0xLjQwOC4xODkgNS41OTUgNS41OTUgMCAwIDEtMS44NTEtLjMyMiA1LjU2IDUuNTYgMCAwIDEtMy41NDItNi42MTJBLjUwNS41MDUgMCAwIDAgNi4yNjQgMnpcIiAvPlxyXG4gICAgPC9zdmc+YCxcclxuICApXHJcbiAgLnNldChcclxuICAgICcwMmQnLFxyXG4gICAgYDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMzZcIlxyXG4gICAgICBoZWlnaHQ9XCIzNlwiXHJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBjbGFzcz1cInFpLTEwMVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzYgMzZcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTQuOTk1IDEuNzc3YS41MTYuNTE2IDAgMCAwIC41MDMuNDA0LjUzNS41MzUgMCAwIDAgLjExMi0uMDEyLjUxNy41MTcgMCAwIDAgLjM5Mi0uNjE2TDUuNzQ2LjQwM0EuNTE2LjUxNiAwIDAgMCA0Ljc0LjYyN3pNMS4yNzMgMy41MzVsLjk5NC42MzNhLjUxNi41MTYgMCAwIDAgLjU1NS0uODdsLS45OTUtLjYzM2EuNTE2LjUxNiAwIDAgMC0uNTU0Ljg3ek0uODc4IDguMDQzbDEuMTUtLjI1NmEuNTE2LjUxNiAwIDEgMC0uMjIzLTEuMDA4bC0xLjE1LjI1NmEuNTE2LjUxNiAwIDAgMCAuMTExIDEuMDIuNTM1LjUzNSAwIDAgMCAuMTEyLS4wMTJ6bTEwLjIzOC0yLjI4YS41MzUuNTM1IDAgMCAwIC4xMTItLjAxMmwxLjE1LS4yNTZhLjUxNi41MTYgMCAxIDAtLjIyNC0xLjAwOGwtMS4xNS4yNTZhLjUxNi41MTYgMCAwIDAgLjExMiAxLjAyek04Ljc3MiAyLjcyOGEuNTE2LjUxNiAwIDAgMCAuNzEyLS4xNThsLjYzMy0uOTk0YS41MTYuNTE2IDAgMCAwLS44Ny0uNTU0bC0uNjMzLjk5NGEuNTE2LjUxNiAwIDAgMCAuMTU4LjcxMnpNMy4wNyA3LjAzMmEzLjUwNiAzLjUwNiAwIDAgMCAuMzMuODcgMy4xMjkgMy4xMjkgMCAwIDAgLjkwOS0uNDg2IDIuNDUzIDIuNDUzIDAgMCAxLS4yMzMtLjYwOCAyLjUwNCAyLjUwNCAwIDAgMSAxLjktMi45ODggMi41IDIuNSAwIDAgMSAyLjk4OCAxLjljLjAwMy4wMTMuMDAyLjAyNi4wMDUuMDM4YTUuNDIgNS40MiAwIDAgMSAxLjA2My4yNSAzLjUwOSAzLjUwOSAwIDAgMC0uMDYxLS41MTIgMy41MzUgMy41MzUgMCAxIDAtNi45MDIgMS41MzZ6XCIgLz5cclxuICAgICAgPHBhdGggZD1cIk0xMi43MTUgOC40OGEzLjIzNiAzLjIzNiAwIDAgMC0uNDEuMDQgNC44MjQgNC44MjQgMCAwIDAtOC4wODYgMCAzLjIzNCAzLjIzNCAwIDAgMC0uNDA5LS4wNCAzLjI4NSAzLjI4NSAwIDEgMCAxLjI4MyA2LjMxIDQuNzU2IDQuNzU2IDAgMCAwIDYuMzM5IDAgMy4yODYgMy4yODYgMCAxIDAgMS4yODMtNi4zMXptMCA1LjUzOWEyLjIzOCAyLjIzOCAwIDAgMS0uODgtLjE3OSAxLjAzMiAxLjAzMiAwIDAgMC0xLjA4My4xNzMgMy43MjQgMy43MjQgMCAwIDEtNC45OCAwIDEuMDMyIDEuMDMyIDAgMCAwLTEuMDgyLS4xNzMgMi4yNTQgMi4yNTQgMCAxIDEtLjg4LTQuMzI5IDEuMjY1IDEuMjY1IDAgMCAxIC4xNzUuMDJsLjEwNS4wMTRhMS4wMzEgMS4wMzEgMCAwIDAgLjk5Mi0uNDU5IDMuNzkyIDMuNzkyIDAgMCAxIDYuMzYgMCAxLjAzMSAxLjAzMSAwIDAgMCAuOTkyLjQ1OWwuMTA1LS4wMTRhMS4yNjYgMS4yNjYgMCAwIDEgLjE3Ni0uMDIgMi4yNTQgMi4yNTQgMCAxIDEgMCA0LjUwOHpcIiAvPlxyXG4gICAgPC9zdmc+YCxcclxuICApXHJcbiAgLnNldChcclxuICAgICcwMm4nLFxyXG4gICAgYDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMzZcIlxyXG4gICAgICBoZWlnaHQ9XCIzNlwiXHJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBjbGFzcz1cInFpLTE1MVwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzYgMzZcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1LjYwNSA2LjYzNGEuNDEyLjQxMiAwIDAgMC0uMTA5LjAxNSA0LjEyNyA0LjEyNyAwIDAgMS0xLjA4Mi4xNDUgNC4zMDMgNC4zMDMgMCAwIDEtMS40MjQtLjI0OCA0LjI3NiA0LjI3NiAwIDAgMS0yLjcyNS01LjA4NkEuMzg4LjM4OCAwIDAgMCA5LjkuOTcyYS4zNzQuMzc0IDAgMCAwLS4xNC4wMjdBNC43NzIgNC43NzIgMCAwIDAgNi43NzkgNS43MmMuMDA3LjEyLjAzOC4yMzMuMDU1LjM1YTUuMjkgNS4yOSAwIDAgMSAuNjY3LS4wNDVjLjExMyAwIC4yMjQuMDEyLjMzNi4wMmEzLjU2MiAzLjU2MiAwIDAgMS0uMDYtLjM4NCAzLjc4MiAzLjc4MiAwIDAgMSAxLjM1Ny0zLjEzOCA1LjQwNSA1LjQwNSAwIDAgMCAuMjYyIDEuNjI5QTUuMjUgNS4yNSAwIDAgMCAxMi42NiA3LjQ5YTUuMzE1IDUuMzE1IDAgMCAwIDEuNzU0LjMwNGguMDQ3YTMuNzg4IDMuNzg4IDAgMCAxLS44ODYuNzcxIDMuNzkzIDMuNzkzIDAgMCAxIC44NzQuNjIyIDQuNzc0IDQuNzc0IDAgMCAwIDEuNTI1LTIuMDM3LjM4NC4zODQgMCAwIDAtLjM3LS41MTZ6XCIgLz5cclxuICAgICAgPHBhdGggZD1cIk0xMS44MTUgOC43MWEzLjEzOCAzLjEzOCAwIDAgMC0uMzk2LjA0IDQuNjc1IDQuNjc1IDAgMCAwLTcuODM4IDAgMy4xMzYgMy4xMzYgMCAwIDAtLjM5Ny0uMDQgMy4xODQgMy4xODQgMCAxIDAgMS4yNDQgNi4xMTcgNC42MSA0LjYxIDAgMCAwIDYuMTQ0IDAgMy4xODUgMy4xODUgMCAxIDAgMS4yNDQtNi4xMTZ6bTAgNS4zN2EyLjE3IDIuMTcgMCAwIDEtLjg1Mi0uMTczIDEgMSAwIDAgMC0xLjA1LjE2OCAzLjYxIDMuNjEgMCAwIDEtNC44MjcgMCAxIDEgMCAwIDAtMS4wNDktLjE2OCAyLjE4NSAyLjE4NSAwIDEgMS0uODUzLTQuMTk2IDEuMjI3IDEuMjI3IDAgMCAxIC4xNy4wMThsLjEwMi4wMTRhMSAxIDAgMCAwIC45NjItLjQ0NCAzLjY3NSAzLjY3NSAwIDAgMSA2LjE2NCAwIDEgMSAwIDAgMCAuOTYyLjQ0NGwuMTAyLS4wMTRhMS4yMjggMS4yMjggMCAwIDEgLjE3LS4wMTggMi4xODQgMi4xODQgMCAxIDEgMCA0LjM2OXpcIiAvPlxyXG4gICAgPC9zdmc+YCxcclxuICApXHJcbiAgLnNldChcclxuICAgICcwM2QnLFxyXG4gICAgYDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMzZcIlxyXG4gICAgICBoZWlnaHQ9XCIzNlwiXHJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBjbGFzcz1cInFpLTEwNFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzYgMzZcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyLjYwMyA3LjIyNWEzLjM0NSAzLjM0NSAwIDAgMC0uNDIzLjA0MiA0Ljk4NyA0Ljk4NyAwIDAgMC04LjM2IDAgMy4zNDUgMy4zNDUgMCAwIDAtLjQyMy0uMDQyIDMuMzk3IDMuMzk3IDAgMSAwIDEuMzI2IDYuNTI0IDQuOTE3IDQuOTE3IDAgMCAwIDYuNTU0IDAgMy4zOTcgMy4zOTcgMCAxIDAgMS4zMjYtNi41MjR6bTAgNS43OTNhMi4zOCAyLjM4IDAgMCAxLS45MzUtLjE5IDEgMSAwIDAgMC0xLjA1LjE2OCAzLjkxNyAzLjkxNyAwIDAgMS01LjIzNiAwIDEgMSAwIDAgMC0xLjA1LS4xNjggMi4zOTcgMi4zOTcgMCAxIDEtLjkzNS00LjYwMyAxLjM2OSAxLjM2OSAwIDAgMSAuMTkuMDJsLjEwOC4wMTRhMSAxIDAgMCAwIC45NjEtLjQ0NCAzLjk4NyAzLjk4NyAwIDAgMSA2LjY4OCAwIDEgMSAwIDAgMCAuOTYxLjQ0NGwuMTA4LS4wMTRhMS4zNjkgMS4zNjkgMCAwIDEgLjE5LS4wMiAyLjM5NyAyLjM5NyAwIDEgMSAwIDQuNzkzelwiIC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNC4wMDggNi4xMzZhMS41NDUgMS41NDUgMCAwIDEgMS41NC0xLjQ2Ny45MTUuOTE1IDAgMCAxIC4xMDguMDEybC4wODQuMDEyYTEgMSAwIDAgMCAuOTYxLS40NDUgMi43NCAyLjc0IDAgMCAxIDQuNTk4IDAgMSAxIDAgMCAwIC45NjEuNDQ1bC4wODQtLjAxMmEuOTIuOTIgMCAwIDEgLjEwOC0uMDEyIDEuNTI0IDEuNTI0IDAgMCAxIDEuNDU1IDIuMDQ4IDMuMzc5IDMuMzc5IDAgMCAxIC44Ni41MzhBMi40ODQgMi40ODQgMCAwIDAgMTIuMTM2IDMuN2EzLjc0IDMuNzQgMCAwIDAtNi4yNyAwIDIuNTA4IDIuNTA4IDAgMCAwLS4zMTctLjAzMkEyLjU0OCAyLjU0OCAwIDAgMCAzIDYuMjE2YTIuNDY0IDIuNDY0IDAgMCAwIC4wNjkuNTE3IDEuNzA1IDEuNzA1IDAgMCAxIC45NC0uNTk3elwiIC8+XHJcbiAgICA8L3N2Zz5gLFxyXG4gIClcclxuICAuc2V0KFxyXG4gICAgJzAzbicsXHJcbiAgICBgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMzZcIlxyXG4gICAgICBoZWlnaHQ9XCIzNlwiXHJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBjbGFzcz1cInFpLTEwNFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzYgMzZcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyLjYwMyA3LjIyNWEzLjM0NSAzLjM0NSAwIDAgMC0uNDIzLjA0MiA0Ljk4NyA0Ljk4NyAwIDAgMC04LjM2IDAgMy4zNDUgMy4zNDUgMCAwIDAtLjQyMy0uMDQyIDMuMzk3IDMuMzk3IDAgMSAwIDEuMzI2IDYuNTI0IDQuOTE3IDQuOTE3IDAgMCAwIDYuNTU0IDAgMy4zOTcgMy4zOTcgMCAxIDAgMS4zMjYtNi41MjR6bTAgNS43OTNhMi4zOCAyLjM4IDAgMCAxLS45MzUtLjE5IDEgMSAwIDAgMC0xLjA1LjE2OCAzLjkxNyAzLjkxNyAwIDAgMS01LjIzNiAwIDEgMSAwIDAgMC0xLjA1LS4xNjggMi4zOTcgMi4zOTcgMCAxIDEtLjkzNS00LjYwMyAxLjM2OSAxLjM2OSAwIDAgMSAuMTkuMDJsLjEwOC4wMTRhMSAxIDAgMCAwIC45NjEtLjQ0NCAzLjk4NyAzLjk4NyAwIDAgMSA2LjY4OCAwIDEgMSAwIDAgMCAuOTYxLjQ0NGwuMTA4LS4wMTRhMS4zNjkgMS4zNjkgMCAwIDEgLjE5LS4wMiAyLjM5NyAyLjM5NyAwIDEgMSAwIDQuNzkzelwiIC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNC4wMDggNi4xMzZhMS41NDUgMS41NDUgMCAwIDEgMS41NC0xLjQ2Ny45MTUuOTE1IDAgMCAxIC4xMDguMDEybC4wODQuMDEyYTEgMSAwIDAgMCAuOTYxLS40NDUgMi43NCAyLjc0IDAgMCAxIDQuNTk4IDAgMSAxIDAgMCAwIC45NjEuNDQ1bC4wODQtLjAxMmEuOTIuOTIgMCAwIDEgLjEwOC0uMDEyIDEuNTI0IDEuNTI0IDAgMCAxIDEuNDU1IDIuMDQ4IDMuMzc5IDMuMzc5IDAgMCAxIC44Ni41MzhBMi40ODQgMi40ODQgMCAwIDAgMTIuMTM2IDMuN2EzLjc0IDMuNzQgMCAwIDAtNi4yNyAwIDIuNTA4IDIuNTA4IDAgMCAwLS4zMTctLjAzMkEyLjU0OCAyLjU0OCAwIDAgMCAzIDYuMjE2YTIuNDY0IDIuNDY0IDAgMCAwIC4wNjkuNTE3IDEuNzA1IDEuNzA1IDAgMCAxIC45NC0uNTk3elwiIC8+XHJcbiAgICA8L3N2Zz5gLFxyXG4gIClcclxuICAuc2V0KFxyXG4gICAgJzA0ZCcsXHJcbiAgICBgIDxzdmdcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIHdpZHRoPVwiMzZcIlxyXG4gICAgICBoZWlnaHQ9XCIzNlwiXHJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICBjbGFzcz1cInFpLTUwMFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzYgMzZcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1LjQ4OCA4LjIwOGgtLjUyNmEzLjE3NCAzLjE3NCAwIDAgMC0zLjE0Ny0yLjgxIDMuMTQ2IDMuMTQ2IDAgMCAwLS4zOTYuMDQgNC42NzUgNC42NzUgMCAwIDAtNy44MzggMCAzLjE0NiAzLjE0NiAwIDAgMC0uMzk2LS4wNCAzLjE4NSAzLjE4NSAwIDEgMCAxLjI0MyA2LjExNyA0LjYxIDQuNjEgMCAwIDAgNi4xNDQgMCAzLjE4NCAzLjE4NCAwIDAgMCA0LjM2NS0yLjMwN2guNTUxYS41LjUgMCAwIDAgMC0xem0tMy42NzMgMi41NmEyLjE3MiAyLjE3MiAwIDAgMS0uODUyLS4xNzQgMSAxIDAgMCAwLTEuMDUuMTY4IDMuNjEgMy42MSAwIDAgMS00LjgyNyAwIDEgMSAwIDAgMC0xLjA0OS0uMTY4IDIuMTg1IDIuMTg1IDAgMSAxLS44NTItNC4xOTYgMS4yMiAxLjIyIDAgMCAxIC4xNjguMDE4bC4xMDQuMDE0YTEgMSAwIDAgMCAuOTYtLjQ0NCAzLjY3NSAzLjY3NSAwIDAgMSA2LjE2NSAwIDEgMSAwIDAgMCAuOTYxLjQ0NGwuMTA0LS4wMTRhMS4yMiAxLjIyIDAgMCAxIC4xNjgtLjAxOCAyLjE4NCAyLjE4NCAwIDAgMSAyLjE0NyAxLjgxaC03LjQ1YS41LjUgMCAwIDAgMCAxaDcuMzg2YTIuMTggMi4xOCAwIDAgMS0yLjA4MyAxLjU2elwiIC8+XHJcbiAgICA8L3N2Zz5gLFxyXG4gIClcclxuICAuc2V0KFxyXG4gICAgJzA0bicsXHJcbiAgICBgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgd2lkdGg9XCIzNlwiXHJcbiAgICAgIGhlaWdodD1cIjM2XCJcclxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIGNsYXNzPVwicWktNTAwXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAzNiAzNlwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTUuNDg4IDguMjA4aC0uNTI2YTMuMTc0IDMuMTc0IDAgMCAwLTMuMTQ3LTIuODEgMy4xNDYgMy4xNDYgMCAwIDAtLjM5Ni4wNCA0LjY3NSA0LjY3NSAwIDAgMC03LjgzOCAwIDMuMTQ2IDMuMTQ2IDAgMCAwLS4zOTYtLjA0IDMuMTg1IDMuMTg1IDAgMSAwIDEuMjQzIDYuMTE3IDQuNjEgNC42MSAwIDAgMCA2LjE0NCAwIDMuMTg0IDMuMTg0IDAgMCAwIDQuMzY1LTIuMzA3aC41NTFhLjUuNSAwIDAgMCAwLTF6bS0zLjY3MyAyLjU2YTIuMTcyIDIuMTcyIDAgMCAxLS44NTItLjE3NCAxIDEgMCAwIDAtMS4wNS4xNjggMy42MSAzLjYxIDAgMCAxLTQuODI3IDAgMSAxIDAgMCAwLTEuMDQ5LS4xNjggMi4xODUgMi4xODUgMCAxIDEtLjg1Mi00LjE5NiAxLjIyIDEuMjIgMCAwIDEgLjE2OC4wMThsLjEwNC4wMTRhMSAxIDAgMCAwIC45Ni0uNDQ0IDMuNjc1IDMuNjc1IDAgMCAxIDYuMTY1IDAgMSAxIDAgMCAwIC45NjEuNDQ0bC4xMDQtLjAxNGExLjIyIDEuMjIgMCAwIDEgLjE2OC0uMDE4IDIuMTg0IDIuMTg0IDAgMCAxIDIuMTQ3IDEuODFoLTcuNDVhLjUuNSAwIDAgMCAwIDFoNy4zODZhMi4xOCAyLjE4IDAgMCAxLTIuMDgzIDEuNTZ6XCIgLz5cclxuICAgIDwvc3ZnPmAsXHJcbiAgKVxyXG4gIC5zZXQoXHJcbiAgICAnMDlkJyxcclxuICAgIGA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjM2XCJcclxuICAgICAgaGVpZ2h0PVwiMzZcIlxyXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgY2xhc3M9XCJxaS0zMDhcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDM2IDM2XCJcclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk03Ljk5IDExLjQ0OWE2LjYwNiA2LjYwNiAwIDAgMC0xIDIgMSAxIDAgMCAwIDIgMCA2LjYwNiA2LjYwNiAwIDAgMC0xLTJ6bS0zLjA1Mi0xLjVhNi42MDYgNi42MDYgMCAwIDAtMSAyIDEgMSAwIDAgMCAyIDAgNi42MDYgNi42MDYgMCAwIDAtMS0yem02LjAyOCAwYTYuNjA2IDYuNjA2IDAgMCAwLTEgMiAxIDEgMCAwIDAgMiAwIDYuNjA2IDYuNjA2IDAgMCAwLTEtMnptLTguOTYxLjA1M2EuNS41IDAgMCAwLS41LjV2Mi45NTNhLjUuNSAwIDAgMCAxIDB2LTIuOTUzYS41LjUgMCAwIDAtLjUtLjV6bTExLjc2MyAwYS41LjUgMCAwIDAtLjUuNXYyLjk1M2EuNS41IDAgMCAwIDEgMHYtMi45NTNhLjUuNSAwIDAgMC0uNS0uNXpNNy4zNDMgMGE0LjI2NyA0LjI2NyAwIDAgMC0zLjU3NiAxLjk0IDIuODUzIDIuODUzIDAgMCAwLS4zNjItLjAzNyAyLjkwNSAyLjkwNSAwIDEgMCAxLjEzNSA1LjU4IDQuMjg1IDQuMjg1IDAgMCAwIDIuMDkzIDEuMDAzIDIuMjY3IDIuMjY3IDAgMCAxLS4zNjItMS4xMDhsLS4wMDMtLjAzNmEyLjk4MiAyLjk4MiAwIDAgMS0xLjA3LS42MTIgMSAxIDAgMCAwLTEuMDQ5LS4xNjcgMS45MDUgMS45MDUgMCAxIDEtLjc0NC0zLjY2IDEuMDIgMS4wMiAwIDAgMSAuMTQzLjAxNmwuMDk0LjAxMmEuOTgyLjk4MiAwIDAgMCAuMTI1LjAwOCAxIDEgMCAwIDAgLjgzNy0uNDUyIDMuMjY1IDMuMjY1IDAgMCAxIDUuNDc3IDAgMSAxIDAgMCAwIC44MzcuNDUyLjk4Mi45ODIgMCAwIDAgLjEyNS0uMDA4bC4wOTQtLjAxMmExLjAyIDEuMDIgMCAwIDEgLjE0My0uMDE2IDEuODkgMS44OSAwIDAgMSAxLjU0My44MDYgMi41MjcgMi41MjcgMCAwIDEgMS4zNC44NzQgMi44OTYgMi44OTYgMCAwIDAtMi44ODMtMi42OCAyLjg1MiAyLjg1MiAwIDAgMC0uMzYyLjAzNkE0LjI2NyA0LjI2NyAwIDAgMCA3LjM0MyAwelwiIC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTEuNDMgNC44N2ExLjgzNiAxLjgzNiAwIDAgMSAxLjUzOS44MzYgMSAxIDAgMCAwIC45NjEuNDQ0bC4wNjgtLjAwOS4wNDgtLjAwN2EuOTMuOTMgMCAxIDEtLjM2MyAxLjc4NiAxIDEgMCAwIDAtMS4wNS4xNjcgMS43OTQgMS43OTQgMCAwIDEtMi40MDYgMCAxIDEgMCAwIDAtMS4wNDktLjE2Ny45My45MyAwIDEgMS0uMzc1LTEuNzg3bC4wNi4wMDguMDY4LjAxYTEgMSAwIDAgMCAuOTYxLS40NDUgMS44MzYgMS44MzYgMCAwIDEgMS41MzktLjgzNm0wLTFhMi44MzQgMi44MzQgMCAwIDAtMi4zNzUgMS4yODggMS45MDQgMS45MDQgMCAwIDAtLjI0LS4wMjQgMS45MyAxLjkzIDAgMSAwIC43NTMgMy43MDYgMi43OTQgMi43OTQgMCAwIDAgMy43MjMgMCAxLjkzIDEuOTMgMCAxIDAgLjc1NC0zLjcwNiAxLjkwNCAxLjkwNCAwIDAgMC0uMjQuMDI0QTIuODM0IDIuODM0IDAgMCAwIDExLjQzIDMuODd6XCIgLz5cclxuICAgIDwvc3ZnPmAsXHJcbiAgKVxyXG4gIC5zZXQoXHJcbiAgICAnMDluJyxcclxuICAgIGA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjM2XCJcclxuICAgICAgaGVpZ2h0PVwiMzZcIlxyXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgY2xhc3M9XCJxaS0zMDhcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDM2IDM2XCJcclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk03Ljk5IDExLjQ0OWE2LjYwNiA2LjYwNiAwIDAgMC0xIDIgMSAxIDAgMCAwIDIgMCA2LjYwNiA2LjYwNiAwIDAgMC0xLTJ6bS0zLjA1Mi0xLjVhNi42MDYgNi42MDYgMCAwIDAtMSAyIDEgMSAwIDAgMCAyIDAgNi42MDYgNi42MDYgMCAwIDAtMS0yem02LjAyOCAwYTYuNjA2IDYuNjA2IDAgMCAwLTEgMiAxIDEgMCAwIDAgMiAwIDYuNjA2IDYuNjA2IDAgMCAwLTEtMnptLTguOTYxLjA1M2EuNS41IDAgMCAwLS41LjV2Mi45NTNhLjUuNSAwIDAgMCAxIDB2LTIuOTUzYS41LjUgMCAwIDAtLjUtLjV6bTExLjc2MyAwYS41LjUgMCAwIDAtLjUuNXYyLjk1M2EuNS41IDAgMCAwIDEgMHYtMi45NTNhLjUuNSAwIDAgMC0uNS0uNXpNNy4zNDMgMGE0LjI2NyA0LjI2NyAwIDAgMC0zLjU3NiAxLjk0IDIuODUzIDIuODUzIDAgMCAwLS4zNjItLjAzNyAyLjkwNSAyLjkwNSAwIDEgMCAxLjEzNSA1LjU4IDQuMjg1IDQuMjg1IDAgMCAwIDIuMDkzIDEuMDAzIDIuMjY3IDIuMjY3IDAgMCAxLS4zNjItMS4xMDhsLS4wMDMtLjAzNmEyLjk4MiAyLjk4MiAwIDAgMS0xLjA3LS42MTIgMSAxIDAgMCAwLTEuMDQ5LS4xNjcgMS45MDUgMS45MDUgMCAxIDEtLjc0NC0zLjY2IDEuMDIgMS4wMiAwIDAgMSAuMTQzLjAxNmwuMDk0LjAxMmEuOTgyLjk4MiAwIDAgMCAuMTI1LjAwOCAxIDEgMCAwIDAgLjgzNy0uNDUyIDMuMjY1IDMuMjY1IDAgMCAxIDUuNDc3IDAgMSAxIDAgMCAwIC44MzcuNDUyLjk4Mi45ODIgMCAwIDAgLjEyNS0uMDA4bC4wOTQtLjAxMmExLjAyIDEuMDIgMCAwIDEgLjE0My0uMDE2IDEuODkgMS44OSAwIDAgMSAxLjU0My44MDYgMi41MjcgMi41MjcgMCAwIDEgMS4zNC44NzQgMi44OTYgMi44OTYgMCAwIDAtMi44ODMtMi42OCAyLjg1MiAyLjg1MiAwIDAgMC0uMzYyLjAzNkE0LjI2NyA0LjI2NyAwIDAgMCA3LjM0MyAwelwiIC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTEuNDMgNC44N2ExLjgzNiAxLjgzNiAwIDAgMSAxLjUzOS44MzYgMSAxIDAgMCAwIC45NjEuNDQ0bC4wNjgtLjAwOS4wNDgtLjAwN2EuOTMuOTMgMCAxIDEtLjM2MyAxLjc4NiAxIDEgMCAwIDAtMS4wNS4xNjcgMS43OTQgMS43OTQgMCAwIDEtMi40MDYgMCAxIDEgMCAwIDAtMS4wNDktLjE2Ny45My45MyAwIDEgMS0uMzc1LTEuNzg3bC4wNi4wMDguMDY4LjAxYTEgMSAwIDAgMCAuOTYxLS40NDUgMS44MzYgMS44MzYgMCAwIDEgMS41MzktLjgzNm0wLTFhMi44MzQgMi44MzQgMCAwIDAtMi4zNzUgMS4yODggMS45MDQgMS45MDQgMCAwIDAtLjI0LS4wMjQgMS45MyAxLjkzIDAgMSAwIC43NTMgMy43MDYgMi43OTQgMi43OTQgMCAwIDAgMy43MjMgMCAxLjkzIDEuOTMgMCAxIDAgLjc1NC0zLjcwNiAxLjkwNCAxLjkwNCAwIDAgMC0uMjQuMDI0QTIuODM0IDIuODM0IDAgMCAwIDExLjQzIDMuODd6XCIgLz5cclxuICAgIDwvc3ZnPmAsXHJcbiAgKVxyXG4gIC5zZXQoXHJcbiAgICAnMTBkJyxcclxuICAgIGA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjM2XCJcclxuICAgICAgaGVpZ2h0PVwiMzZcIlxyXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgY2xhc3M9XCJxaS0zMDFcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDM2IDM2XCJcclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk03LjAxMiAxNC45ODVhMSAxIDAgMCAwIDIgMCA2LjYwNSA2LjYwNSAwIDAgMC0xLTIgNi42MDUgNi42MDUgMCAwIDAtMSAyek0zLjk1OSAxNGExIDEgMCAwIDAgMiAwIDYuNjA1IDYuNjA1IDAgMCAwLTEtMiA2LjYwNSA2LjYwNSAwIDAgMC0xIDJ6bTYuMDI4IDBhMSAxIDAgMCAwIDIgMCA2LjYwNSA2LjYwNSAwIDAgMC0xLTIgNi42MDUgNi42MDUgMCAwIDAtMSAyek01LjIwNyAxLjkwNGguMDA3YS41LjUgMCAwIDAgLjQ5My0uNTA2TDUuNjk1LjQ5NGEuNS41IDAgMCAwLS41LS40OTRoLS4wMDdhLjUuNSAwIDAgMC0uNDkzLjUwNmwuMDEyLjkwNWEuNS41IDAgMCAwIC41LjQ5M3ptLTIuODkyLjk0NmEuNS41IDAgMSAwIC42OTgtLjcxNmwtLjY0OC0uNjNhLjUuNSAwIDEgMC0uNjk3LjcxNXptLS4xNzkgMi4yMDNhLjUuNSAwIDAgMC0uNS0uNDkzaC0uMDA3bC0uOTA1LjAxMWEuNS41IDAgMCAwIC4wMDcgMWguMDA3bC45MDQtLjAxMWEuNS41IDAgMCAwIC40OTQtLjUwN3ptNS42MzgtMi4xMmEuNS41IDAgMCAwIC4zNTktLjE1MWwuNjMtLjY0OGEuNS41IDAgMCAwLS43MTYtLjY5OGwtLjYzMS42NDhhLjUuNSAwIDAgMCAuMzU4Ljg0OXpcIiAvPlxyXG4gICAgICA8cGF0aCBkPVwiTTEyLjAyOCA1LjU3OWEyLjkyNyAyLjkyNyAwIDAgMC0uMzcuMDM3IDQuMzY0IDQuMzY0IDAgMCAwLTcuMzE2IDAgMi45MjYgMi45MjYgMCAwIDAtLjM3LS4wMzcgMi45NzIgMi45NzIgMCAxIDAgMS4xNiA1LjcwOSA0LjMwMiA0LjMwMiAwIDAgMCA1LjczNSAwIDIuOTcyIDIuOTcyIDAgMSAwIDEuMTYtNS43MXptMCA0Ljk0NGExLjk1OSAxLjk1OSAwIDAgMS0uNzctLjE1NiAxIDEgMCAwIDAtMS4wNS4xNjggMy4zMDMgMy4zMDMgMCAwIDEtNC40MTcgMCAxIDEgMCAwIDAtMS4wNS0uMTY4IDEuOTcyIDEuOTcyIDAgMSAxLS43NjktMy43ODggMS4wNzcgMS4wNzcgMCAwIDEgLjE1LjAxN2wuMDk1LjAxMmExIDEgMCAwIDAgLjk2Mi0uNDQ0IDMuMzY0IDMuMzY0IDAgMCAxIDUuNjQyIDAgMSAxIDAgMCAwIC45NjIuNDQ0bC4wOTUtLjAxMmExLjA4IDEuMDggMCAwIDEgLjE1LS4wMTcgMS45NzIgMS45NzIgMCAxIDEgMCAzLjk0NHpNMi40ODIgNS4zMTVBMy41MyAzLjUzIDAgMCAxIDMuNSA1LjAyN2ExLjgzMSAxLjgzMSAwIDAgMSAxLjgxLTEuNjAzIDEuODEgMS44MSAwIDAgMSAuNTUzLjA5NSA0LjkzMyA0LjkzMyAwIDAgMSAxLjI4MS0uNDA1QTIuODIgMi44MiAwIDAgMCAyLjQ3NiA1LjI2YzAgLjAyLjAwNi4wMzcuMDA2LjA1NnpcIiAvPlxyXG4gICAgPC9zdmc+YCxcclxuICApXHJcbiAgLnNldChcclxuICAgICcxMG4nLFxyXG4gICAgYDxzdmcgaWQ9XCImI3g1NkZFOyYjeDVDNDI7XzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwicWktMzUxXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiPlxyXG4gIDxkZWZzPlxyXG4gICAgPHN0eWxlPlxyXG4gICAgICAuY2xzLTF7ZmlsbC1ydWxlOmV2ZW5vZGR9XHJcbiAgICA8L3N0eWxlPlxyXG4gIDwvZGVmcz5cclxuICA8cGF0aCBkPVwiTTE1LjQ2NiA0LjIzYS4zMDguMzA4IDAgMCAwLS4wOC4wMSAzLjA3MiAzLjA3MiAwIDAgMS0uODA2LjEwOCAzLjIwMyAzLjIwMyAwIDAgMS0xLjA2LS4xODRBMy4xODMgMy4xODMgMCAwIDEgMTEuNDkyLjM3OGEuMjg5LjI4OSAwIDAgMC0uMjcyLS4zNjMuMjc4LjI3OCAwIDAgMC0uMTA0LjAyIDMuNTQ2IDMuNTQ2IDAgMCAwLTIuMjEgMy4wOTUgNC45MzIgNC45MzIgMCAwIDEgLjk5LjI5NCAyLjU2IDIuNTYgMCAwIDEgLjU0LTEuNjcyIDQuNDE2IDQuNDE2IDAgMCAwIC4xNjUuNzA3IDQuMTY1IDQuMTY1IDAgMCAwIDIuNTkgMi42NDkgNC4zMTUgNC4zMTUgMCAwIDAgLjg0Ni4yMDQgMi41OCAyLjU4IDAgMCAxLS4yMzkuMTYzIDMuNTcyIDMuNTcyIDAgMCAxIC44MjMuNjQyIDMuNTUzIDMuNTUzIDAgMCAwIDEuMTItMS41MDQuMjg2LjI4NiAwIDAgMC0uMjc1LS4zODR6bS0zLjQzOCAxLjM1NmEyLjkyNiAyLjkyNiAwIDAgMC0uMzcuMDM3IDQuMzY0IDQuMzY0IDAgMCAwLTcuMzE2IDAgMi45MjcgMi45MjcgMCAwIDAtLjM3LS4wMzcgMi45NzIgMi45NzIgMCAxIDAgMS4xNiA1LjcwOSA0LjMwMiA0LjMwMiAwIDAgMCA1LjczNSAwIDIuOTcyIDIuOTcyIDAgMSAwIDEuMTYtNS43MDl6bTAgNC45NDRhMS45NTkgMS45NTkgMCAwIDEtLjc3LS4xNTYgMSAxIDAgMCAwLTEuMDUuMTY4IDMuMzAzIDMuMzAzIDAgMCAxLTQuNDE3IDAgMSAxIDAgMCAwLTEuMDUtLjE2OCAxLjk3MiAxLjk3MiAwIDEgMS0uNzY5LTMuNzg4IDEuMDggMS4wOCAwIDAgMSAuMTUuMDE3bC4wOTUuMDEzYTEgMSAwIDAgMCAuOTYyLS40NDUgMy4zNjQgMy4zNjQgMCAwIDEgNS42NDIgMCAxIDEgMCAwIDAgLjk2Mi40NDVsLjA5NS0uMDEzYTEuMDc3IDEuMDc3IDAgMCAxIC4xNS0uMDE3IDEuOTcyIDEuOTcyIDAgMSAxIDAgMy45NDR6TTcuMDIgMTVhMSAxIDAgMCAwIDIgMCA2LjYwNSA2LjYwNSAwIDAgMC0xLTIgNi42MDUgNi42MDUgMCAwIDAtMSAyelwiIGNsYXNzPVwiY2xzLTFcIi8+XHJcbiAgPHBhdGggZD1cIk0zLjk2NyAxNC4wMTVhMSAxIDAgMCAwIDIgMCA2LjYwNCA2LjYwNCAwIDAgMC0xLTIgNi42MDQgNi42MDQgMCAwIDAtMSAyem02LjAyOCAwYTEgMSAwIDAgMCAyIDAgNi42MDQgNi42MDQgMCAwIDAtMS0yIDYuNjA0IDYuNjA0IDAgMCAwLTEgMnpcIiBjbGFzcz1cImNscy0xXCIvPlxyXG48L3N2Zz5gLFxyXG4gIClcclxuICAuc2V0KFxyXG4gICAgJzExZCcsXHJcbiAgICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwicWktMzAzXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiPlxyXG4gIDxwYXRoIGQ9XCJNMy42ODUgOC40NTVhMy4xNzIgMy4xNzIgMCAwIDAgMS4yNDMtLjI1MyA0LjYxIDQuNjEgMCAwIDAgNi4xNDQgMCAzLjE4NSAzLjE4NSAwIDEgMCAxLjI0My02LjExNiAzLjE0NiAzLjE0NiAwIDAgMC0uMzk2LjA0IDQuNjc1IDQuNjc1IDAgMCAwLTcuODM4IDAgMy4xNDYgMy4xNDYgMCAwIDAtLjM5Ny0uMDQgMy4xODQgMy4xODQgMCAxIDAgMCA2LjM2OXptMC01LjM3YTEuMjM3IDEuMjM3IDAgMCAxIC4xNy4wMmwuMTAxLjAxM2ExIDEgMCAwIDAgLjk2Mi0uNDQ0IDMuNjc1IDMuNjc1IDAgMCAxIDYuMTY0IDAgMSAxIDAgMCAwIC45NjIuNDQ0bC4xMDItLjAxNGExLjIzNyAxLjIzNyAwIDAgMSAuMTctLjAxOCAyLjE4NCAyLjE4NCAwIDEgMS0uODUzIDQuMTk2IDEgMSAwIDAgMC0xLjA1LjE2NyAzLjYxIDMuNjEgMCAwIDEtNC44MjcgMCAxIDEgMCAwIDAtMS4wNDktLjE2NyAyLjE4NSAyLjE4NSAwIDEgMS0uODUyLTQuMTk2ek0yLjk5OCAxMi41YTEgMSAwIDEgMCAyIDAgNi42MDQgNi42MDQgMCAwIDAtMS0yIDYuNjA0IDYuNjA0IDAgMCAwLTEgMnptLTItMS41NTJhLjc4Ni43ODYgMCAxIDAgMS41NzMgMCA1LjE5MyA1LjE5MyAwIDAgMC0uNzg3LTEuNTczIDUuMTkzIDUuMTkzIDAgMCAwLS43ODYgMS41NzN6bTEyLjQyOSAwYS43ODYuNzg2IDAgMSAwIDEuNTczIDAgNS4xOTMgNS4xOTMgMCAwIDAtLjc4Ni0xLjU3MyA1LjE5MyA1LjE5MyAwIDAgMC0uNzg3IDEuNTczek0xMS4wMjYgMTIuNWExIDEgMCAwIDAgMiAwIDYuNjA0IDYuNjA0IDAgMCAwLTEtMiA2LjYwNCA2LjYwNCAwIDAgMC0xIDJ6bS0yLjM1Mi0uODZjLS4wNTggMC0uMDk2LS4wNTEtLjA3LS4wOTVsLjg1OC0xLjQ2MmMuMDI2LS4wNDQtLjAxMi0uMDk2LS4wNy0uMDk2aC0xLjcxYS4xNjcuMTY3IDAgMCAwLS4xNDUuMDc4bC0xLjUxNCAyLjY4MWMtLjA0NS4wOC4wMjQuMTcyLjEyOC4xNzJINy42OWMuMDU0IDAgLjA5MS4wNDUuMDc0LjA4OGwtLjggMS45NzZjLS4wMy4wNy4wNzguMTIuMTM0LjA2NGwzLjIyNy0zLjI5N2MuMDQyLS4wNDMuMDA2LS4xMDktLjA2LS4xMDl6XCIvPlxyXG48L3N2Zz5gLFxyXG4gIClcclxuICAuc2V0KFxyXG4gICAgJzExbicsXHJcbiAgICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwicWktMzAzXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiPlxyXG4gIDxwYXRoIGQ9XCJNMy42ODUgOC40NTVhMy4xNzIgMy4xNzIgMCAwIDAgMS4yNDMtLjI1MyA0LjYxIDQuNjEgMCAwIDAgNi4xNDQgMCAzLjE4NSAzLjE4NSAwIDEgMCAxLjI0My02LjExNiAzLjE0NiAzLjE0NiAwIDAgMC0uMzk2LjA0IDQuNjc1IDQuNjc1IDAgMCAwLTcuODM4IDAgMy4xNDYgMy4xNDYgMCAwIDAtLjM5Ny0uMDQgMy4xODQgMy4xODQgMCAxIDAgMCA2LjM2OXptMC01LjM3YTEuMjM3IDEuMjM3IDAgMCAxIC4xNy4wMmwuMTAxLjAxM2ExIDEgMCAwIDAgLjk2Mi0uNDQ0IDMuNjc1IDMuNjc1IDAgMCAxIDYuMTY0IDAgMSAxIDAgMCAwIC45NjIuNDQ0bC4xMDItLjAxNGExLjIzNyAxLjIzNyAwIDAgMSAuMTctLjAxOCAyLjE4NCAyLjE4NCAwIDEgMS0uODUzIDQuMTk2IDEgMSAwIDAgMC0xLjA1LjE2NyAzLjYxIDMuNjEgMCAwIDEtNC44MjcgMCAxIDEgMCAwIDAtMS4wNDktLjE2NyAyLjE4NSAyLjE4NSAwIDEgMS0uODUyLTQuMTk2ek0yLjk5OCAxMi41YTEgMSAwIDEgMCAyIDAgNi42MDQgNi42MDQgMCAwIDAtMS0yIDYuNjA0IDYuNjA0IDAgMCAwLTEgMnptLTItMS41NTJhLjc4Ni43ODYgMCAxIDAgMS41NzMgMCA1LjE5MyA1LjE5MyAwIDAgMC0uNzg3LTEuNTczIDUuMTkzIDUuMTkzIDAgMCAwLS43ODYgMS41NzN6bTEyLjQyOSAwYS43ODYuNzg2IDAgMSAwIDEuNTczIDAgNS4xOTMgNS4xOTMgMCAwIDAtLjc4Ni0xLjU3MyA1LjE5MyA1LjE5MyAwIDAgMC0uNzg3IDEuNTczek0xMS4wMjYgMTIuNWExIDEgMCAwIDAgMiAwIDYuNjA0IDYuNjA0IDAgMCAwLTEtMiA2LjYwNCA2LjYwNCAwIDAgMC0xIDJ6bS0yLjM1Mi0uODZjLS4wNTggMC0uMDk2LS4wNTEtLjA3LS4wOTVsLjg1OC0xLjQ2MmMuMDI2LS4wNDQtLjAxMi0uMDk2LS4wNy0uMDk2aC0xLjcxYS4xNjcuMTY3IDAgMCAwLS4xNDUuMDc4bC0xLjUxNCAyLjY4MWMtLjA0NS4wOC4wMjQuMTcyLjEyOC4xNzJINy42OWMuMDU0IDAgLjA5MS4wNDUuMDc0LjA4OGwtLjggMS45NzZjLS4wMy4wNy4wNzguMTIuMTM0LjA2NGwzLjIyNy0zLjI5N2MuMDQyLS4wNDMuMDA2LS4xMDktLjA2LS4xMDl6XCIvPlxyXG48L3N2Zz5gLFxyXG4gIClcclxuICAuc2V0KFxyXG4gICAgJzEzZCcsXHJcbiAgICBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwicWktNTE0XCIgdmlld0JveD1cIjAgMCAzNiAzNlwiPlxyXG4gIDxwYXRoIGQ9XCJNMTMuNTAyIDEwLjNINC41MjVhLjUuNSAwIDAgMCAwIDFoOC45NzdhLjUuNSAwIDAgMCAwLTF6TTE1LjUgNC4xODhoLS43MDJhMy4xNzYgMy4xNzYgMCAwIDAtMi45ODMtMi4xMDIgMy4xNDYgMy4xNDYgMCAwIDAtLjM5Ni4wNCA0LjY3NSA0LjY3NSAwIDAgMC03LjgzOCAwIDMuMTQ2IDMuMTQ2IDAgMCAwLS4zOTctLjA0IDMuMTg1IDMuMTg1IDAgMSAwIDEuMjQ0IDYuMTE2IDQuNjEgNC42MSAwIDAgMCA2LjE0NCAwQTMuMTg1IDMuMTg1IDAgMCAwIDE1IDUuMjdjMC0uMDI4LS4wMDgtLjA1NC0uMDA4LS4wODJoLjUwOGEuNS41IDAgMCAwIDAtMXpNMTQgNS4yN2EyLjE2MiAyLjE2MiAwIDAgMS0uMDY4LjUxNkg1Ljk5NmEuNS41IDAgMSAwIDAgMWg3LjM4NmEyLjE3NyAyLjE3NyAwIDAgMS0yLjQyLjQ5NiAxIDEgMCAwIDAtMS4wNDguMTY3IDMuNjEgMy42MSAwIDAgMS00LjgyOCAwIDEgMSAwIDAgMC0xLjA0OS0uMTY3IDIuMTg1IDIuMTg1IDAgMSAxLS44NTItNC4xOTYgMS4yMiAxLjIyIDAgMCAxIC4xNjguMDE4bC4xMDQuMDE0YTEgMSAwIDAgMCAuOTYtLjQ0NCAzLjY3NSAzLjY3NSAwIDAgMSA2LjE2NSAwIDEgMSAwIDAgMCAuOTYxLjQ0NGwuMTA0LS4wMTRhMS4yMiAxLjIyIDAgMCAxIC4xNjgtLjAxOCAyLjE3NyAyLjE3NyAwIDAgMSAxLjg4NiAxLjEwMkg4LjQ3YS41LjUgMCAwIDAgMCAxaDUuNTIzYzAgLjAyOC4wMDguMDU0LjAwOC4wODJ6bS0zLjAxNyA3LjM0M2EuNS41IDAgMCAwLS41LS41SDEuNTA4YS41LjUgMCAxIDAgMCAxaDguOTc1YS41LjUgMCAwIDAgLjUtLjV6bTEuMTExIDEuMzQ0SDMuMTE4YS41LjUgMCAxIDAgMCAxaDguOTc2YS41LjUgMCAwIDAgMC0xelwiLz5cclxuPC9zdmc+YCxcclxuICApXHJcbiAgLnNldChcclxuICAgICcxM24nLFxyXG4gICAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCIzNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInFpLTUxNFwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIj5cclxuICA8cGF0aCBkPVwiTTEzLjUwMiAxMC4zSDQuNTI1YS41LjUgMCAwIDAgMCAxaDguOTc3YS41LjUgMCAwIDAgMC0xek0xNS41IDQuMTg4aC0uNzAyYTMuMTc2IDMuMTc2IDAgMCAwLTIuOTgzLTIuMTAyIDMuMTQ2IDMuMTQ2IDAgMCAwLS4zOTYuMDQgNC42NzUgNC42NzUgMCAwIDAtNy44MzggMCAzLjE0NiAzLjE0NiAwIDAgMC0uMzk3LS4wNCAzLjE4NSAzLjE4NSAwIDEgMCAxLjI0NCA2LjExNiA0LjYxIDQuNjEgMCAwIDAgNi4xNDQgMEEzLjE4NSAzLjE4NSAwIDAgMCAxNSA1LjI3YzAtLjAyOC0uMDA4LS4wNTQtLjAwOC0uMDgyaC41MDhhLjUuNSAwIDAgMCAwLTF6TTE0IDUuMjdhMi4xNjIgMi4xNjIgMCAwIDEtLjA2OC41MTZINS45OTZhLjUuNSAwIDEgMCAwIDFoNy4zODZhMi4xNzcgMi4xNzcgMCAwIDEtMi40Mi40OTYgMSAxIDAgMCAwLTEuMDQ4LjE2NyAzLjYxIDMuNjEgMCAwIDEtNC44MjggMCAxIDEgMCAwIDAtMS4wNDktLjE2NyAyLjE4NSAyLjE4NSAwIDEgMS0uODUyLTQuMTk2IDEuMjIgMS4yMiAwIDAgMSAuMTY4LjAxOGwuMTA0LjAxNGExIDEgMCAwIDAgLjk2LS40NDQgMy42NzUgMy42NzUgMCAwIDEgNi4xNjUgMCAxIDEgMCAwIDAgLjk2MS40NDRsLjEwNC0uMDE0YTEuMjIgMS4yMiAwIDAgMSAuMTY4LS4wMTggMi4xNzcgMi4xNzcgMCAwIDEgMS44ODYgMS4xMDJIOC40N2EuNS41IDAgMCAwIDAgMWg1LjUyM2MwIC4wMjguMDA4LjA1NC4wMDguMDgyem0tMy4wMTcgNy4zNDNhLjUuNSAwIDAgMC0uNS0uNUgxLjUwOGEuNS41IDAgMSAwIDAgMWg4Ljk3NWEuNS41IDAgMCAwIC41LS41em0xLjExMSAxLjM0NEgzLjExOGEuNS41IDAgMSAwIDAgMWg4Ljk3NmEuNS41IDAgMCAwIDAtMXpcIi8+XHJcbjwvc3ZnPmAsXHJcbiAgKVxyXG4gIC5zZXQoXHJcbiAgICAnNTBkJyxcclxuICAgIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjM2XCIgaGVpZ2h0PVwiMzZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJxaS00OTktZmlsbFwiIHZpZXdCb3g9XCIwIDAgMzYgMzZcIj5cclxuICA8cGF0aCBkPVwiTTE0LjQ4MyA5LjE3MmEuNTA0LjUwNCAwIDAgMC0uNjEyLS4zNTRsLTIuMjMzLjU5OS0uOTgtLjU2NmEyLjY1NSAyLjY1NSAwIDAgMC0uMDU2LTEuODg0bDEuMDIyLS41OSAyLjEwOC41NjVhLjU0Mi41NDIgMCAwIDAgLjEzLjAxNy41LjUgMCAwIDAgLjEzLS45ODNsLTEuMTQzLS4zMDYuODA5LS40NjdhLjUuNSAwIDEgMC0uNS0uODY1bC0uODg2LjUxMi4zMzgtMS4yNjVhLjUwMS41MDEgMCAwIDAtLjM1My0uNjEzLjUwOC41MDggMCAwIDAtLjYxMi4zNTNsLS41OTggMi4yMzItLjk3OS41NjRhMi43ODIgMi43ODIgMCAwIDAtMS42NjEtLjg4NFY0LjA1bDEuNTQyLTEuNTQyYS41LjUgMCAwIDAtLjcwNy0uNzA3bC0uODM1LjgzNXYtLjkzM2EuNS41IDAgMSAwLTEgMHYxLjAyM0w2LjQ4IDEuOGEuNS41IDAgMSAwLS43MDcuNzA3bDEuNjMzIDEuNjMydjEuMTIzYTIuNzkxIDIuNzkxIDAgMCAwLTEuNTk1IDEuMDA1bC0xLjAzLS41OTUtLjU2NS0yLjEwOGEuNS41IDAgMSAwLS45NjYuMjZsLjMwNiAxLjE0MUwyLjc1IDQuNWEuNS41IDAgMSAwLS41Ljg2NWwuODg2LjUxMi0xLjI2NS4zMzlBLjUuNSAwIDAgMCAyIDcuMTk4YS41NDEuNTQxIDAgMCAwIC4xMy0uMDE2bDIuMjMyLS41OTkuOTguNTY2YTIuNjU1IDIuNjU1IDAgMCAwIC4wNTYgMS44ODRsLTEuMDIyLjU5LTIuMTA4LS41NjVhLjUwNy41MDcgMCAwIDAtLjYxMy4zNTMuNTAxLjUwMSAwIDAgMCAuMzU0LjYxM2wxLjE0Mi4zMDYtLjgwOS40NjdhLjUuNSAwIDAgMCAuMjUuOTMyLjQ5My40OTMgMCAwIDAgLjI1LS4wNjdsLjg4Ni0uNTEyLS4zMzggMS4yNjVhLjUwMS41MDEgMCAwIDAgLjM1My42MTMuNTQyLjU0MiAwIDAgMCAuMTMuMDE3LjUuNSAwIDAgMCAuNDgyLS4zN2wuNTk4LTIuMjMyLjk3OS0uNTY0YTIuNzgyIDIuNzgyIDAgMCAwIDEuNjYxLjg4NHYxLjE4OGwtMS41NDIgMS41NDJhLjUuNSAwIDAgMCAuNzA3LjcwN2wuODM1LS44MzV2LjkzM2EuNS41IDAgMCAwIDEgMHYtMS4wMjNsLjkyNi45MjVhLjUuNSAwIDAgMCAuNzA3LS43MDdsLTEuNjMzLTEuNjMydi0xLjEyM2EyLjc5MSAyLjc5MSAwIDAgMCAxLjU5NS0xLjAwNWwxLjAzLjU5NS41NjUgMi4xMDhhLjUuNSAwIDAgMCAuNDgyLjM3LjU0MS41NDEgMCAwIDAgLjEzLS4wMTcuNTAxLjUwMSAwIDAgMCAuMzU0LS42MTNsLS4zMDYtMS4xNDEuODA3LjQ2NmEuNDkzLjQ5MyAwIDAgMCAuMjUuMDY3LjUuNSAwIDAgMCAuMjUtLjkzMmwtLjg4Ni0uNTEyIDEuMjY1LS4zMzlhLjUwMS41MDEgMCAwIDAgLjM1NC0uNjEzelwiLz5cclxuPC9zdmc+YCxcclxuICApXHJcbiAgLnNldChcclxuICAgICc1MG4nLFxyXG4gICAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzZcIiBoZWlnaHQ9XCIzNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInFpLTQ5OS1maWxsXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiPlxyXG4gIDxwYXRoIGQ9XCJNMTQuNDgzIDkuMTcyYS41MDQuNTA0IDAgMCAwLS42MTItLjM1NGwtMi4yMzMuNTk5LS45OC0uNTY2YTIuNjU1IDIuNjU1IDAgMCAwLS4wNTYtMS44ODRsMS4wMjItLjU5IDIuMTA4LjU2NWEuNTQyLjU0MiAwIDAgMCAuMTMuMDE3LjUuNSAwIDAgMCAuMTMtLjk4M2wtMS4xNDMtLjMwNi44MDktLjQ2N2EuNS41IDAgMSAwLS41LS44NjVsLS44ODYuNTEyLjMzOC0xLjI2NWEuNTAxLjUwMSAwIDAgMC0uMzUzLS42MTMuNTA4LjUwOCAwIDAgMC0uNjEyLjM1M2wtLjU5OCAyLjIzMi0uOTc5LjU2NGEyLjc4MiAyLjc4MiAwIDAgMC0xLjY2MS0uODg0VjQuMDVsMS41NDItMS41NDJhLjUuNSAwIDAgMC0uNzA3LS43MDdsLS44MzUuODM1di0uOTMzYS41LjUgMCAxIDAtMSAwdjEuMDIzTDYuNDggMS44YS41LjUgMCAxIDAtLjcwNy43MDdsMS42MzMgMS42MzJ2MS4xMjNhMi43OTEgMi43OTEgMCAwIDAtMS41OTUgMS4wMDVsLTEuMDMtLjU5NS0uNTY1LTIuMTA4YS41LjUgMCAxIDAtLjk2Ni4yNmwuMzA2IDEuMTQxTDIuNzUgNC41YS41LjUgMCAxIDAtLjUuODY1bC44ODYuNTEyLTEuMjY1LjMzOUEuNS41IDAgMCAwIDIgNy4xOThhLjU0MS41NDEgMCAwIDAgLjEzLS4wMTZsMi4yMzItLjU5OS45OC41NjZhMi42NTUgMi42NTUgMCAwIDAgLjA1NiAxLjg4NGwtMS4wMjIuNTktMi4xMDgtLjU2NWEuNTA3LjUwNyAwIDAgMC0uNjEzLjM1My41MDEuNTAxIDAgMCAwIC4zNTQuNjEzbDEuMTQyLjMwNi0uODA5LjQ2N2EuNS41IDAgMCAwIC4yNS45MzIuNDkzLjQ5MyAwIDAgMCAuMjUtLjA2N2wuODg2LS41MTItLjMzOCAxLjI2NWEuNTAxLjUwMSAwIDAgMCAuMzUzLjYxMy41NDIuNTQyIDAgMCAwIC4xMy4wMTcuNS41IDAgMCAwIC40ODItLjM3bC41OTgtMi4yMzIuOTc5LS41NjRhMi43ODIgMi43ODIgMCAwIDAgMS42NjEuODg0djEuMTg4bC0xLjU0MiAxLjU0MmEuNS41IDAgMCAwIC43MDcuNzA3bC44MzUtLjgzNXYuOTMzYS41LjUgMCAwIDAgMSAwdi0xLjAyM2wuOTI2LjkyNWEuNS41IDAgMCAwIC43MDctLjcwN2wtMS42MzMtMS42MzJ2LTEuMTIzYTIuNzkxIDIuNzkxIDAgMCAwIDEuNTk1LTEuMDA1bDEuMDMuNTk1LjU2NSAyLjEwOGEuNS41IDAgMCAwIC40ODIuMzcuNTQxLjU0MSAwIDAgMCAuMTMtLjAxNy41MDEuNTAxIDAgMCAwIC4zNTQtLjYxM2wtLjMwNi0xLjE0MS44MDcuNDY2YS40OTMuNDkzIDAgMCAwIC4yNS4wNjcuNS41IDAgMCAwIC4yNS0uOTMybC0uODg2LS41MTIgMS4yNjUtLjMzOWEuNTAxLjUwMSAwIDAgMCAuMzU0LS42MTN6XCIvPlxyXG48L3N2Zz5gLFxyXG4gICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGF0dXNJY29uO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIElNUE9SVElORyBGVU5DVElPTlxyXG5pbXBvcnQgdmlldyBmcm9tICcuL2FwcC9ET00nO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHRcclxuaW1wb3J0IHdlYXRoZXIgZnJvbSAnLi9hcHAvQVBJX0Z1bmN0aW9uJztcclxuXHJcbi8vIFNFTEVDVElORyBUSEUgU0VBUkNISU5HIFpPTkVcclxuY29uc3QgbG9jYXRpb25TZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24tc2VhcmNoJyk7XHJcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlYXJjaC1idG4nKTtcclxuLy8gUVVJQ0sgSU1QTEVNRU5UQVRJT04gT0YgQ0lUSUVTXHJcbmNvbnN0IG5ld1lvcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXlvcmsnKTtcclxuY29uc3QgbG9uZG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvbmRvbicpO1xyXG5jb25zdCBwYXJpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJpcycpO1xyXG5jb25zdCBob0NoaU1pbmggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG8tY2hpLW1pbmgnKTtcclxuXHJcbi8vIFFVSUNLIFNFQVJDSCBGT1IgV0VBVEhFUiBEQVRBXHJcbm5ld1lvcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgdmlldy5nZXRET00oYXdhaXQgd2VhdGhlci5nZXREYXRhKCduZXcgeW9yaycpKTtcclxufSk7XHJcblxyXG5sb25kb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgdmlldy5nZXRET00oYXdhaXQgd2VhdGhlci5nZXREYXRhKCdsb25kb24nKSk7XHJcbn0pO1xyXG5cclxucGFyaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgdmlldy5nZXRET00oYXdhaXQgd2VhdGhlci5nZXREYXRhKCdwYXJpcycpKTtcclxufSk7XHJcblxyXG5ob0NoaU1pbmguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgdmlldy5nZXRET00oYXdhaXQgd2VhdGhlci5nZXREYXRhKCdobyBjaGkgbWluaCcpKTtcclxufSk7XHJcblxyXG4vLyBTRUFSQ0ggV0VBVEhFUiBEQVRBXHJcbnNlYXJjaEJ0blswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICBpZiAobG9jYXRpb25TZWFyY2gudmFsdWUgPT09ICcnKSByZXR1cm47XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldERhdGEobG9jYXRpb25TZWFyY2gudmFsdWUpO1xyXG4gIHZpZXcuZ2V0RE9NKHdlYXRoZXJEYXRhKTtcclxufSk7XHJcblxyXG4vLyBaT01CSUUgQ09ERVxyXG5cclxuLy8gbGV0IEFUVEVNUCA9IDE7XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBjb252ZXJ0KCkge1xyXG4vLyAgIGNvbnN0IHNlYXJjaCA9IGdldExvY2F0aW9uKCk7XHJcbi8vICAgY29uc3QgdW5pdCA9IGdldFN0YXRlKEFUVEVNUCk7XHJcbi8vICAgY29uc3QgdGV4dCA9IGF3YWl0IGZldGNoKFxyXG4vLyAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3NlYXJjaH0mdW5pdHM9JHt1bml0fSZBUFBJRD02MTE0M2JjYWJhYjkzYmVkMWRlOWI0ZDQ3ZTAzMGU3MGAsXHJcbi8vICAgICB7IG1vZGU6ICdjb3JzJyB9XHJcbi8vICAgKTtcclxuLy8gICBjb25zdCBmZXRjaF9kYXRhID0gYXdhaXQgdGV4dC5qc29uKCk7XHJcbi8vICAgY29uc3QgZmV0Y2hUaW1lID0gbmV3IERhdGUoZmV0Y2hfZGF0YS5kdCAqIDEwMDApO1xyXG4vLyAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbi8vICAgICBoYzogJzI0JyxcclxuLy8gICAgIHdlZWtkYXk6ICdsb25nJyxcclxuLy8gICAgIHllYXI6ICcyLWRpZ2l0JyxcclxuLy8gICAgIG1vbnRoOiAnbG9uZycsXHJcbi8vICAgICBkYXk6ICcyLWRpZ2l0JyxcclxuLy8gICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuLy8gICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4vLyAgIH07XHJcbi8vICAgY29uc3QgdGltZSA9IGZldGNoVGltZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUdCJywgb3B0aW9ucyk7XHJcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHtcclxuLy8gICAgIGNpdHk6IGZldGNoX2RhdGEubmFtZSxcclxuLy8gICAgIHRlbXBlcmF0dXJlOiBNYXRoLnJvdW5kKGZldGNoX2RhdGEubWFpbi50ZW1wKSxcclxuLy8gICAgIGh1bWlkaXR5OiBmZXRjaF9kYXRhLm1haW4uaHVtaWRpdHksXHJcbi8vICAgICB3aW5kX3NwZWVkOiBmZXRjaF9kYXRhLndpbmQuc3BlZWQsXHJcbi8vICAgICB0aW1lLFxyXG4vLyAgIH07XHJcblxyXG4vLyAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGF3YWl0IGRhdGEudGVtcGVyYXR1cmU7XHJcbi8vICAgY3VycmVudENpdHkuaW5uZXJIVE1MID0gYXdhaXQgZGF0YS5jaXR5O1xyXG4vLyAgIGRhdGVUaW1lLmlubmVySFRNTCA9IGF3YWl0IGRhdGEudGltZTtcclxuLy8gICBjb25zb2xlLmxvZygnb2snKTtcclxuLy8gICByZXR1cm4gZGF0YSwgdGltZTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XHJcbi8vICAgaWYgKEFUVEVNUCA9PT0gMSkge1xyXG4vLyAgICAgQVRURU1QKys7XHJcbi8vICAgICByZXR1cm4gJ21ldHJpYyc7XHJcbi8vICAgfVxyXG4vLyAgIEFUVEVNUC0tO1xyXG4vLyAgIHJldHVybiAnaW1wZXJpYWwnO1xyXG4vLyB9XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==