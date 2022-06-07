const temperature = document.getElementById('temperature');
const currentCity = document.getElementById('current-city');
const dateTime = document.getElementById('date-time');
const weatherIcon = document.getElementById('weather-icon');
const weatherDescription = document.getElementById('weather-description');
const searchBtn = document.getElementsByClassName('search-btn');
const newYork = document.getElementById('new-york');
const london = document.getElementById('london');
const paris = document.getElementById('paris');
const hoChiMinh = document.getElementById('ho-chi-minh');
const cloudy = document.getElementById('cloudy');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const rain = document.getElementById('rain');
const icon = new Map()
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
    </svg>`
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
    </svg>`
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
    </svg>`
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
    </svg>`
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
    </svg>`
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
    </svg>`
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
    </svg>`
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
    </svg>`
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
    </svg>`
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
    </svg>`
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
    </svg>`
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
</svg>`
  )
  .set(
    '11d',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-303" viewBox="0 0 36 36">
  <path d="M3.685 8.455a3.172 3.172 0 0 0 1.243-.253 4.61 4.61 0 0 0 6.144 0 3.185 3.185 0 1 0 1.243-6.116 3.146 3.146 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.146 3.146 0 0 0-.397-.04 3.184 3.184 0 1 0 0 6.369zm0-5.37a1.237 1.237 0 0 1 .17.02l.101.013a1 1 0 0 0 .962-.444 3.675 3.675 0 0 1 6.164 0 1 1 0 0 0 .962.444l.102-.014a1.237 1.237 0 0 1 .17-.018 2.184 2.184 0 1 1-.853 4.196 1 1 0 0 0-1.05.167 3.61 3.61 0 0 1-4.827 0 1 1 0 0 0-1.049-.167 2.185 2.185 0 1 1-.852-4.196zM2.998 12.5a1 1 0 1 0 2 0 6.604 6.604 0 0 0-1-2 6.604 6.604 0 0 0-1 2zm-2-1.552a.786.786 0 1 0 1.573 0 5.193 5.193 0 0 0-.787-1.573 5.193 5.193 0 0 0-.786 1.573zm12.429 0a.786.786 0 1 0 1.573 0 5.193 5.193 0 0 0-.786-1.573 5.193 5.193 0 0 0-.787 1.573zM11.026 12.5a1 1 0 0 0 2 0 6.604 6.604 0 0 0-1-2 6.604 6.604 0 0 0-1 2zm-2.352-.86c-.058 0-.096-.051-.07-.095l.858-1.462c.026-.044-.012-.096-.07-.096h-1.71a.167.167 0 0 0-.145.078l-1.514 2.681c-.045.08.024.172.128.172H7.69c.054 0 .091.045.074.088l-.8 1.976c-.03.07.078.12.134.064l3.227-3.297c.042-.043.006-.109-.06-.109z"/>
</svg>`
  )
  .set(
    '11n',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-303" viewBox="0 0 36 36">
  <path d="M3.685 8.455a3.172 3.172 0 0 0 1.243-.253 4.61 4.61 0 0 0 6.144 0 3.185 3.185 0 1 0 1.243-6.116 3.146 3.146 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.146 3.146 0 0 0-.397-.04 3.184 3.184 0 1 0 0 6.369zm0-5.37a1.237 1.237 0 0 1 .17.02l.101.013a1 1 0 0 0 .962-.444 3.675 3.675 0 0 1 6.164 0 1 1 0 0 0 .962.444l.102-.014a1.237 1.237 0 0 1 .17-.018 2.184 2.184 0 1 1-.853 4.196 1 1 0 0 0-1.05.167 3.61 3.61 0 0 1-4.827 0 1 1 0 0 0-1.049-.167 2.185 2.185 0 1 1-.852-4.196zM2.998 12.5a1 1 0 1 0 2 0 6.604 6.604 0 0 0-1-2 6.604 6.604 0 0 0-1 2zm-2-1.552a.786.786 0 1 0 1.573 0 5.193 5.193 0 0 0-.787-1.573 5.193 5.193 0 0 0-.786 1.573zm12.429 0a.786.786 0 1 0 1.573 0 5.193 5.193 0 0 0-.786-1.573 5.193 5.193 0 0 0-.787 1.573zM11.026 12.5a1 1 0 0 0 2 0 6.604 6.604 0 0 0-1-2 6.604 6.604 0 0 0-1 2zm-2.352-.86c-.058 0-.096-.051-.07-.095l.858-1.462c.026-.044-.012-.096-.07-.096h-1.71a.167.167 0 0 0-.145.078l-1.514 2.681c-.045.08.024.172.128.172H7.69c.054 0 .091.045.074.088l-.8 1.976c-.03.07.078.12.134.064l3.227-3.297c.042-.043.006-.109-.06-.109z"/>
</svg>`
  )
  .set(
    '13d',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-514" viewBox="0 0 36 36">
  <path d="M13.502 10.3H4.525a.5.5 0 0 0 0 1h8.977a.5.5 0 0 0 0-1zM15.5 4.188h-.702a3.176 3.176 0 0 0-2.983-2.102 3.146 3.146 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.146 3.146 0 0 0-.397-.04 3.185 3.185 0 1 0 1.244 6.116 4.61 4.61 0 0 0 6.144 0A3.185 3.185 0 0 0 15 5.27c0-.028-.008-.054-.008-.082h.508a.5.5 0 0 0 0-1zM14 5.27a2.162 2.162 0 0 1-.068.516H5.996a.5.5 0 1 0 0 1h7.386a2.177 2.177 0 0 1-2.42.496 1 1 0 0 0-1.048.167 3.61 3.61 0 0 1-4.828 0 1 1 0 0 0-1.049-.167 2.185 2.185 0 1 1-.852-4.196 1.22 1.22 0 0 1 .168.018l.104.014a1 1 0 0 0 .96-.444 3.675 3.675 0 0 1 6.165 0 1 1 0 0 0 .961.444l.104-.014a1.22 1.22 0 0 1 .168-.018 2.177 2.177 0 0 1 1.886 1.102H8.47a.5.5 0 0 0 0 1h5.523c0 .028.008.054.008.082zm-3.017 7.343a.5.5 0 0 0-.5-.5H1.508a.5.5 0 1 0 0 1h8.975a.5.5 0 0 0 .5-.5zm1.111 1.344H3.118a.5.5 0 1 0 0 1h8.976a.5.5 0 0 0 0-1z"/>
</svg>`
  )
  .set(
    '13n',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-514" viewBox="0 0 36 36">
  <path d="M13.502 10.3H4.525a.5.5 0 0 0 0 1h8.977a.5.5 0 0 0 0-1zM15.5 4.188h-.702a3.176 3.176 0 0 0-2.983-2.102 3.146 3.146 0 0 0-.396.04 4.675 4.675 0 0 0-7.838 0 3.146 3.146 0 0 0-.397-.04 3.185 3.185 0 1 0 1.244 6.116 4.61 4.61 0 0 0 6.144 0A3.185 3.185 0 0 0 15 5.27c0-.028-.008-.054-.008-.082h.508a.5.5 0 0 0 0-1zM14 5.27a2.162 2.162 0 0 1-.068.516H5.996a.5.5 0 1 0 0 1h7.386a2.177 2.177 0 0 1-2.42.496 1 1 0 0 0-1.048.167 3.61 3.61 0 0 1-4.828 0 1 1 0 0 0-1.049-.167 2.185 2.185 0 1 1-.852-4.196 1.22 1.22 0 0 1 .168.018l.104.014a1 1 0 0 0 .96-.444 3.675 3.675 0 0 1 6.165 0 1 1 0 0 0 .961.444l.104-.014a1.22 1.22 0 0 1 .168-.018 2.177 2.177 0 0 1 1.886 1.102H8.47a.5.5 0 0 0 0 1h5.523c0 .028.008.054.008.082zm-3.017 7.343a.5.5 0 0 0-.5-.5H1.508a.5.5 0 1 0 0 1h8.975a.5.5 0 0 0 .5-.5zm1.111 1.344H3.118a.5.5 0 1 0 0 1h8.976a.5.5 0 0 0 0-1z"/>
</svg>`
  )
  .set(
    '50d',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-499-fill" viewBox="0 0 36 36">
  <path d="M14.483 9.172a.504.504 0 0 0-.612-.354l-2.233.599-.98-.566a2.655 2.655 0 0 0-.056-1.884l1.022-.59 2.108.565a.542.542 0 0 0 .13.017.5.5 0 0 0 .13-.983l-1.143-.306.809-.467a.5.5 0 1 0-.5-.865l-.886.512.338-1.265a.501.501 0 0 0-.353-.613.508.508 0 0 0-.612.353l-.598 2.232-.979.564a2.782 2.782 0 0 0-1.661-.884V4.05l1.542-1.542a.5.5 0 0 0-.707-.707l-.835.835v-.933a.5.5 0 1 0-1 0v1.023L6.48 1.8a.5.5 0 1 0-.707.707l1.633 1.632v1.123a2.791 2.791 0 0 0-1.595 1.005l-1.03-.595-.565-2.108a.5.5 0 1 0-.966.26l.306 1.141L2.75 4.5a.5.5 0 1 0-.5.865l.886.512-1.265.339A.5.5 0 0 0 2 7.198a.541.541 0 0 0 .13-.016l2.232-.599.98.566a2.655 2.655 0 0 0 .056 1.884l-1.022.59-2.108-.565a.507.507 0 0 0-.613.353.501.501 0 0 0 .354.613l1.142.306-.809.467a.5.5 0 0 0 .25.932.493.493 0 0 0 .25-.067l.886-.512-.338 1.265a.501.501 0 0 0 .353.613.542.542 0 0 0 .13.017.5.5 0 0 0 .482-.37l.598-2.232.979-.564a2.782 2.782 0 0 0 1.661.884v1.188l-1.542 1.542a.5.5 0 0 0 .707.707l.835-.835v.933a.5.5 0 0 0 1 0v-1.023l.926.925a.5.5 0 0 0 .707-.707l-1.633-1.632v-1.123a2.791 2.791 0 0 0 1.595-1.005l1.03.595.565 2.108a.5.5 0 0 0 .482.37.541.541 0 0 0 .13-.017.501.501 0 0 0 .354-.613l-.306-1.141.807.466a.493.493 0 0 0 .25.067.5.5 0 0 0 .25-.932l-.886-.512 1.265-.339a.501.501 0 0 0 .354-.613z"/>
</svg>`
  )
  .set(
    '50n',
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="qi-499-fill" viewBox="0 0 36 36">
  <path d="M14.483 9.172a.504.504 0 0 0-.612-.354l-2.233.599-.98-.566a2.655 2.655 0 0 0-.056-1.884l1.022-.59 2.108.565a.542.542 0 0 0 .13.017.5.5 0 0 0 .13-.983l-1.143-.306.809-.467a.5.5 0 1 0-.5-.865l-.886.512.338-1.265a.501.501 0 0 0-.353-.613.508.508 0 0 0-.612.353l-.598 2.232-.979.564a2.782 2.782 0 0 0-1.661-.884V4.05l1.542-1.542a.5.5 0 0 0-.707-.707l-.835.835v-.933a.5.5 0 1 0-1 0v1.023L6.48 1.8a.5.5 0 1 0-.707.707l1.633 1.632v1.123a2.791 2.791 0 0 0-1.595 1.005l-1.03-.595-.565-2.108a.5.5 0 1 0-.966.26l.306 1.141L2.75 4.5a.5.5 0 1 0-.5.865l.886.512-1.265.339A.5.5 0 0 0 2 7.198a.541.541 0 0 0 .13-.016l2.232-.599.98.566a2.655 2.655 0 0 0 .056 1.884l-1.022.59-2.108-.565a.507.507 0 0 0-.613.353.501.501 0 0 0 .354.613l1.142.306-.809.467a.5.5 0 0 0 .25.932.493.493 0 0 0 .25-.067l.886-.512-.338 1.265a.501.501 0 0 0 .353.613.542.542 0 0 0 .13.017.5.5 0 0 0 .482-.37l.598-2.232.979-.564a2.782 2.782 0 0 0 1.661.884v1.188l-1.542 1.542a.5.5 0 0 0 .707.707l.835-.835v.933a.5.5 0 0 0 1 0v-1.023l.926.925a.5.5 0 0 0 .707-.707l-1.633-1.632v-1.123a2.791 2.791 0 0 0 1.595-1.005l1.03.595.565 2.108a.5.5 0 0 0 .482.37.541.541 0 0 0 .13-.017.501.501 0 0 0 .354-.613l-.306-1.141.807.466a.493.493 0 0 0 .25.067.5.5 0 0 0 .25-.932l-.886-.512 1.265-.339a.501.501 0 0 0 .354-.613z"/>
</svg>`
  );

function getLocation() {
  const locationSearch = document.getElementById('location-search');
  const location = locationSearch.value;
  return location;
}

let ATTEMP = 1;

async function getWeatherAPI(location) {
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${location}
  &units=metric&APPID=61143bcabab93bed1de9b4d47e030e70`;
  const respone = await fetch(api,
    { mode: 'cors' });
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

  temperature.innerHTML = `${data.temperature}\u00B0C`;
  currentCity.innerHTML = data.city;
  dateTime.innerHTML = data.time;
  cloudy.innerHTML = `${data.cloud}%`;
  humidity.innerHTML = `${data.humidity}%`;
  wind.innerHTML = `${data.wind_speed}m/s`;
  rain.innerHTML = `${data.rain}%`;
  weatherDescription.innerHTML = `${data.description}`;
  const iconElement = icon.get(data.icon);
  weatherIcon.innerHTML = iconElement;
  console.log('as');

  return data, time;
}
getWeatherAPI('ha noi');
searchBtn.addEventListener('click', getWeatherAPI(getLocation()));


// newYork.addEventListener('click', getWeatherAPI('new york'));
// london.addEventListener('click', getWeatherAPI('london'));
// paris.addEventListener('click', getWeatherAPI('paris'));
// hoChiMinh.addEventListener('click', getWeatherAPI('ho Chi Minh'));

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
