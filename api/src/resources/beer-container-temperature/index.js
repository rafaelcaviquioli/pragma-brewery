const createRoute = require('./create.route');

register.attributes = { name: 'beer-container-temperature' };

function register(server, options, next) {
  createRoute(server);
  next();
}

module.exports = register;
