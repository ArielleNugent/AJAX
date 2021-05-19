'use strict';

// PART 1: SHOW A FORTUNE

const showFortune = (evt) => {
  // TODO: get the fortune and show it in the #fortune-text div
};

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

const showWeather = (evt) => {
  evt.preventDefault();

  const url = '/weather.json';
  const formData = { zipcode: $('#zipcode-field').val() };

  // TODO: request weather with that URL and show the forecast in #weather-info
};

$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELONS

const orderMelons = (evt) => {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
};

$('#order-form').on('submit', orderMelons);
