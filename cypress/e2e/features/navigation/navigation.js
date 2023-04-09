const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { loginPage } = require("../../../pageObjects/LoginPage.js");

Given("I am on the home page", () => {
  loginPage.validateSuccessLogin();
});
When(/^I click on the Account Activity Nav$/, function () {
  cy.contains("Account Activity").click();
});
Then(/^I should see the Account Activity content$/, function () {
  cy.contains("Show Transactions").should("be.visible");
});
