const beerContainerTemperature = require('../resources/beer-container-temperature');

module.exports = [
  { register: beerContainerTemperature, options: {}, routes: { prefix: '/beer-container-temperature' } },
];
