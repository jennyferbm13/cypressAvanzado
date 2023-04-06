// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  failureThreshold: 0.03, //toleracia al fallo
  failuredThreadholsType: "percent",
  customDiffConfig: { threshold: 0.1 }, //precision del pixel
  capture: "viewport", //todo lo que esta renderizado
});

Cypress.Commands.add("login", (email, password) => {
  const userInput = "#user_login";
  const passwordInput = "#user_password";
  const loginButton = "#login_form > div.form-actions > input";

  cy.visit("http://zero.webappsecurity.com/login.html");

  cy.get(userInput).type(email);
  cy.get(passwordInput).type(password, { sensitive: true });
  cy.get(loginButton).click();
  return cy;
});

Cypress.Commands.add("validateLogin", (optionsEF) => {
  const account_summary_tab = "#account_summary_tab";
  const account_activity_tab = "#account_activity_tab";
  const transfer_founds_tab = "#transfer_funds_tab";
  const error = ".alert.alert-error";
  if (optionsEF == 1) {
    cy.get(account_summary_tab).should("be.visible");
    cy.get(account_activity_tab).should("be.visible");
    cy.get(transfer_founds_tab).should("be.visible");
  } else {
    cy.get(error).should("be.visible");
  }
});

Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    options.log = false;
    Cypress.log({
      $el: element,
      name: "type",
      message: "*".repeat(text.length),
    });
  }
  return originalFn(element, text, options);
});
