import { loginPage } from "../pageObjects/LoginPage";

describe("Login con variable de entorno", function () {
  beforeEach(() => {
    loginPage.visit();
  });
  //forma guardando en el cypress.config.js no seguro
  //guardando en el cypress.env.json mas seguro
  //guardando en el package json, en este caso ejecutamos npm run variable:entorno
  it("Login exitoso con variable guardada en cypress.config.js (no es muy seguro)", function () {
    cy.log(Cypress.env());
    loginPage.validateLogin();
    loginPage.login(
      Cypress.env("credentials").user,
      Cypress.env("credentials").password
    );
    loginPage.validateSuccessLogin();
  });
});

describe.only(
  "Login erroneo con config",
  {
    env: {
      userE: "uno",
      passwordE: "dos",
    },
  },
  function () {
    beforeEach(() => {
      loginPage.visit();
    });
    //ese env solo es accesible en los its que cree aquí
    it("Login exitoso con variable guardada en cypress.config.js (no es muy seguro)", function () {
      cy.log(Cypress.env()); //salen todo, incluido este
      loginPage.validateLogin();

      loginPage.login(Cypress.env().userE, Cypress.env().passwordE);
      loginPage.validateErrorLogin();
    });
  }
);
