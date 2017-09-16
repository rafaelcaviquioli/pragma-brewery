module.exports = server => {
  server.route({
    method: 'POST',
    path: '/',
    handler: (request, reply) => {
      server.broadcast({ type: 'BEER_CONTAINER_CREATED', payload: request.payload });
      reply('OK');
    }
  });
};
