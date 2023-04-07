import { loginPage } from "../pageObjects/LoginPage";

describe("Login con fixture", function () {
  beforeEach(() => {
    loginPage.visit();
  });
  it("Login error", function () {
    loginPage.validateLogin();
    cy.fixture("credentials").then((credentials) => {
      loginPage.login(credentials.email, credentials.password);
      loginPage.validateErrorLogin();
    });
  });
});

const credentialsAll = [
  {
    nombre: "credentials",
    titulo: "falla",
  },
  {
    nombre: "credentials2",
    titulo: "exito",
  },
];
describe.only("Usando for each", function () {
  credentialsAll.forEach((credentials) => {
    it(`Login ${credentials.titulo}`, function () {
      loginPage.visit();
      loginPage.validateLogin();
      cy.fixture(credentials.nombre).then((credential) => {
        loginPage.login(credential.email, credential.password);
        //loginPage.validateErrorLogin();
      });
    });
  });
});
