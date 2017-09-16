module.exports = server => {
  server.route({
    method: 'GET',
    path: '/',
    handler: async (request, reply) => {
      reply('working...');
    }
  });
};
