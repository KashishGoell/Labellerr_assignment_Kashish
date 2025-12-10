const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,  // ADD THIS

    baseUrl: "https://labellerr.com",

    setupNodeEvents(on, config) {
      // keep empty
    },
  },
});