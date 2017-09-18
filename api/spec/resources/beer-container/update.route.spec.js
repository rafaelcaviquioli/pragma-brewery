const createServer = require('../../../src/server/create-server');
const Nes = require('nes');

const method = 'PUT';
const url = '/beer-container-temperature';

describe(`${method} ${url}`, () => {
  it('returns "OK"', async () => {
    expect.assertions(2);

    const server = await createServer();
    const payload = { id: 1, temperature: 5 };
    const response = await server.inject({ method, url, payload });

    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.payload)).toEqual({ message: 'OK' });
  });

  it('validates payload', async () => {
    expect.assertions(2);

    const server = await createServer();
    const payload = { temperature: 5 };
    const response = await server.inject({ method, url, payload });

    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.payload)).toMatchObject({ message: 'child \"id\" fails because [\"id\" is required]' });
  });

  it('broadcasts containers temperature to all clients', async (done) => {
    const server = await createServer();
    await server.start();
    const client = new Nes.Client(`http://localhost:${server.info.port}`);

    client.onUpdate = async message => {
      client.disconnect();
      await server.stop();

      expect(message).toEqual({
        payload: { id: 1, temperature: 5 },
        type: 'BEER_CONTAINER_TEMPERATURE_UPDATED'
      });

      done();
    };

    client.connect(async () => {
      const payload = { id: 1, temperature: 5 };
      await server.inject({ method, url, payload });
    });
  });
});
