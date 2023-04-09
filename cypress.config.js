const { defineConfig } = require("cypress");

const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");

const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

const values = [];

async function setupNodeEvents(on, config) {
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
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  return config;
}

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    retries: 2,
    specPattern: "**/*.feature", //ahora las pruebas que va a detecrtar tienen la extencion .feature
    setupNodeEvents,
    env: {
      credentials: {
        user: "username",
        password: "password",
      },
    },
  },
});
