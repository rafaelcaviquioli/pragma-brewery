const fetch = require('node-fetch');

module.exports = function (done) {
  new Promise((resolve) => waitServer('http://webapp:3000', resolve))
    .then(() => done());
};

function waitServer(url, done) {
  fetch(url)
    .then(() => done())
    .catch(() => setTimeout(() => waitServer(url, done), 1000));
}
