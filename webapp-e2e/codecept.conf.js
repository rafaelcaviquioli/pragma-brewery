exports.config = {
  tests: './features/*.feature.js',
  timeout: 10000,
  output: './reports',
  helpers: {
    REST: {
      endpoint: "http://api:9000"
    },

    WebDriverIO: {
      smartWait: 10000,
      waitForTimeout: 10000,
      restart: false,
      browser: 'chrome',
      url: 'http://webapp:3000',
      host: 'selenium-server',
      timeouts: {
        script: 10000,
        pageLoad: 10000,
        implicit: 10000
      }
    }
  },
  include: {
    I: './actor.js'
  },
  bootstrap: './bootstrap.js',
  mocha: {},
  name: 'pragma-brewery'
};
