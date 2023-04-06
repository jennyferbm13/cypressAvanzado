describe("Login con custom command", function () {
  it("Login erroneo", function () {
    cy.login("lalla", "hola").validateLogin(2); //error
  });

  it("Login exitoso", function () {
    cy.login("username", "password").validateLogin(1); //successed
  });
});
