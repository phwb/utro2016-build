(function () {
  'use strict';

  var SVG_ICONS =
    '<svg xmlns="http://www.w3.org/2000/svg"><symbol viewBox="0 0 50 50" id="icon'+
    '_logo"><circle fill="#FFF" cx="25" cy="25" r="24.8"/><path fill="#31B5E8" d="M36.5 29.9c.9-1.9 7.3'+
    '-2.8 7.3-4.7 0-2.1-6.4-3-7.3-4.9-.9-1.9 3.2-7.1 1.7-8.5s-6.6 2.6-8.5 1.7c-1.7-.9-2.6-7.3-4.7-7.3s-3 6.4-4.9 7.3-7.1-3'+
    '.2-8.5-1.7 2.6 6.6 1.7 8.5C12.4 22.2 6 23.1 6 25c0 2.1 6.4 3 7.3 4.9S10 37 11.5 38.5s6.6-2.6 8.5-1.7c1.9.9 2.8 7.3 4.'+
    '7 7.3 2.1 0 3-6.4 4.9-7.3s7.1 3.2 8.5 1.7c1.6-1.5-2.2-6.7-1.6-8.6z"/><circle fill="#FFF" cx="25" cy="25" r="10.5"/></'+
    'symbol>'+
    '</svg>';

  var svg = document.getElementById('svg-icons');
  svg.innerHTML = SVG_ICONS;
} ());
