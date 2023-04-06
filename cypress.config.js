const { defineConfig } = require("cypress");

const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on, config);
      config.env.variable = process.env.NODE_ENV ?? "No hay variable";
      return config;
    },
    retries: 2,
  },
  env: {
    credentials: {
      user: "username",
      password: "password",
    },
  },
});
