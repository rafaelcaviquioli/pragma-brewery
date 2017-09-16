const createServer = require('../../../src/server/create-server');

const method = 'GET';
const url = '/beer-containers';

describe(`${method} ${url}`, () => {
  it('returns "working..."', async () => {
    expect.assertions(2);

    const server = await createServer();
    const response = await server.inject({ method, url });

    expect(response.statusCode).toEqual(200);
    expect(response.payload).toEqual('working...');
  });
});
