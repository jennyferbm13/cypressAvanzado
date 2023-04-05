import { loginPage } from "../pageObjects/LoginPage";

describe("Login con POM", function () {
  beforeEach(() => {
    loginPage.visit();
  });
  it("Login erroneo", function () {
    loginPage.validateLogin();
    loginPage.login("lalla", "hola");
    loginPage.validateErrorLogin();
  });

  it("Login exitoso", function () {
    loginPage.validateLogin();
    loginPage.login("username", "password");
    loginPage.validateSuccessLogin();
  });
});
