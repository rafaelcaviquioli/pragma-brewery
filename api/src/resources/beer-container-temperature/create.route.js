const payloadSchema = require('./payload.schema');

module.exports = server => {
  server.route({
    method: 'POST',
    path: '/',
    config: { validate: { payload: payloadSchema } },
    handler: (request, reply) => {
      server.broadcast({ type: 'BEER_CONTAINER_TEMPERATURE_CREATED', payload: request.payload });
      reply({ message: 'OK' });
    }
  });
};
