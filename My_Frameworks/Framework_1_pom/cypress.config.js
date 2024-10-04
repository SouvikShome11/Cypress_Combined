import { defineConfig } from 'Cypress';
export default defineConfig({
  projectId: 'xxspd9',
  screenshotsFolder: 'cypress/reports/mochareports/assets',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quiet: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/**/**/*.cy.{js,ts,feature}',
  },
});
