import {defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*_spec.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720,
    modifyObstructiveCode: false,
    supportFile: false,
    screenshotOnRunFailure: false,
    video: false
  },
  component: {
    // component options here
  }
});
