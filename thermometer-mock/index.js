const fetch = require('node-fetch');
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

setInterval(() => {
  for (let beerIndex = 1; beerIndex <= 6; beerIndex++) {
    const beer = `Beer ${beerIndex}`;
    const temperature = random(3, 8);

    fetch('http://api:9000/beer-container-temperature', {
      method: 'POST',
      body: JSON.stringify({ beer, temperature })
    });
  }
}, 10000);
