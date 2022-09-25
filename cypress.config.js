const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommansTimeout: 10001,
  pageLoadTimeout: 30000,
  env: {
    first_name: 'Boromir',
    webdriveruni_homepage: 'http://www.webdriveruniversity.com',
    viewportWidth: 1366,
    viewportHeight: 768,
  },
  projectId: 'obe4nc',
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://www.webdriveruniversity.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
