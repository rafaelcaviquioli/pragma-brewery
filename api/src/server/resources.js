const beerContainer = require('../resources/beer-container');

module.exports = [
  { register: beerContainer, options: {}, routes: { prefix: '/beer-containers' } },
];
