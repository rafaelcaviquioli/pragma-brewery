const throng = require('throng');
const createServer = require('./server/create-server');

const workers = process.env.WEB_CONCURRENCY;
const clusterConfiguration = { workers: workers, lifetime: Infinity };

throng(clusterConfiguration, async () => {
  const server = await createServer();
  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
});

