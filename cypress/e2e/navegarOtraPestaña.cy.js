describe("Navegar entre pestañas", function () {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Visitar links que tengan target _blank", function () {
    cy.visit("https://demoqa.com/links");
    cy.get("#simpleLink").click();
    //no abre dentro del entorno de cypress, es decir no le puedo hacer pruebas, validar algo
  });
  it("Visitar links que tengan target _blank", function () {
    cy.visit("https://demoqa.com/links");
    cy.get("#simpleLink").invoke("removeAttr", "target").click(); //ya abre ahí mismo
  });
});
