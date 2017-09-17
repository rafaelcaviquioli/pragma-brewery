const payloadSchema = require('./payload.schema');

module.exports = server => {
  server.route({
    method: 'PUT',
    path: '/',
    config: { validate: { payload: payloadSchema } },
    handler: (request, reply) => {
      server.broadcast({ type: 'BEER_CONTAINER_TEMPERATURE_UPDATED', payload: request.payload });
      reply({ message: 'OK' });
    }
  });
};
