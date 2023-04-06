describe("Login con custom command", function () {
  /*beforeEach(() => {
    loginPage.visit();
  });*/
  it("Login erroneo", function () {
    cy.login("lalla", "hola");
    //loginPage.validateErrorLogin();
  });

  it("Login exitoso", function () {
    cy.login("username", "password");
  });
});
