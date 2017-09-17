const updateRoute = require('./update.route');

register.attributes = { name: 'beer-container-temperature' };

function register(server, options, next) {
  updateRoute(server);
  next();
}

module.exports = register;
