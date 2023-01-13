require('dotenv').config()
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    fixturesFolder: "src/tests/e2e/fixtures",
    specPattern: "src/tests/e2e/integration",
    screenshotsFolder: "src/tests/e2e/screenshots",
    videosFolder: "src/tests/e2e/videos",
    downloadsFolder: "src/tests/e2e/downloads",
    supportFolder: "src/tests/e2e/support",
    supportFile: false,
  },
});
