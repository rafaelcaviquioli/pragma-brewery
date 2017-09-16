const fetch = require('node-fetch');

const createRandonize = (min, max) => {
  return () => Math.floor(Math.random() * (max - min + 1)) + min;
};

const beerRandom = createRandonize(1, 6);
const temperatureRandom = createRandonize(1, 9);

setInterval(() => {
  const beer = `Beer ${beerRandom()}`;
  const temperature = temperatureRandom();

  fetch('http://api:9000/beer-container-temperature', { method: 'POST', body: JSON.stringify({ beer, temperature }) });
}, 1000);
