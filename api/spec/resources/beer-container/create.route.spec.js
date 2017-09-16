const createServer = require('../../../src/server/create-server');

const method = 'POST';
const url = '/beer-containers';

describe(`${method} ${url}`, () => {
  it('returns "OK"', async () => {
    expect.assertions(2);

    const server = await createServer();
    const response = await server.inject({ method, url });

    expect(response.statusCode).toEqual(200);
    expect(response.payload).toEqual('OK');
  });
});
