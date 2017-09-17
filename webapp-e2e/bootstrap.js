const fetch = require('node-fetch');

module.exports = function (done) {
  Promise
    .all([
      new Promise((resolve) => waitServer('http://webapp:3000', resolve)),
      new Promise((resolve) => waitServer('http://api:9000', resolve))
    ])
    .then(() => done());
};

function waitServer(url, done) {
  fetch(url)
    .then(() => done())
    .catch(() => setTimeout(() => waitServer(url, done), 1000));
}
