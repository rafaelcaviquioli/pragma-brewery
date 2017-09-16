const Hapi = require('hapi');
const thirdPartyPlugins = require('./third-party');
const resourcePlugins = require('./resources');

const serverOptions = {
  port: process.env.PORT,
  host: process.env.HOST
};

module.exports = async () => {
  const server = new Hapi.Server();

  server.connection(serverOptions);

  await server.register(thirdPartyPlugins);
  await server.register(resourcePlugins);

  return server;
};
