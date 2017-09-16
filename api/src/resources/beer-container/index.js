const createRoute = require('./create.route');

register.attributes = { name: 'beer-container' };

function register(server, options, next) {
  createRoute(server);
  next();
}

module.exports = register;
