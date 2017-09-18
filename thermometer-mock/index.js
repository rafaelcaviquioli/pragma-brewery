const fetch = require('node-fetch');
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

setInterval(() => {
  for (let containerId = 1; containerId <= 6; containerId++) {
    const temperature = random(3, 8);

    fetch('http://api:9000/beer-container-temperature', {
      method: 'PUT',
      body: JSON.stringify({ id: containerId, temperature })
    });
  }
}, 10000);
