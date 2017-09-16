const Good = require('good');

const thirdPartyPlugins = [];

if (process.env.NODE_ENV !== 'test') {
  thirdPartyPlugins.push({
    register: Good,
    options: {
      reporters: {
        console: [
          { module: 'good-squeeze', name: 'Squeeze', args: [{ response: '*', log: '*', error: '*' }] },
          { module: 'good-console' },
          'stdout'
        ]
      }
    }
  });
}

module.exports = thirdPartyPlugins;
