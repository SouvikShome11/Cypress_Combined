import { defineConfig } from 'Cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/**/**/*.cy.{js,ts,feature}',
  },
});
