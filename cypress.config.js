const { defineConfig } = require("cypress");

const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");

const values = [];

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on, config);
      config.env.variable = process.env.NODE_ENV ?? "No hay variable";
      on("task", {
        guardar(valor) {
          const key = Object.keys(valor)[0];
          values[key] = valor[key];
          return null;
        },
        obtener(key) {
          console.log("values", values);
          return values[key] ?? "no hay valor";
        },
      });
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
