const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { loginPage } = require("../../../pageObjects/LoginPage.js");

//crear step, debe conincidir el texto

Given("I am on the login page2", () => {
  loginPage.visit();
  loginPage.validateLogin();
});
When(
  /^I fill in my email and password with (.*) and (.*)$/, //esta diciendo toma lo que esta entre las comillas
  function (username, password) {
    loginPage.login(username, password);
  }
);
Then(/^I should validate that I am not logged in$/, function () {
  loginPage.validateErrorLogin();
});
