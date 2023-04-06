describe("Visual testing", function () {
  it("Primer prueba de regresion", function () {
    cy.visit("https://pokedexpokemon.netlify.app/");
    cy.wait(3000); //si no lo pongo a esperar no captura bien la pantalla
    cy.matchImageSnapshot();
  });
  it("A un solo elemento", function () {
    cy.visit("https://pokedexpokemon.netlify.app/");
    cy.contains("Bulbasaur").should("be.visible").matchImageSnapshot(); //capturar solo el texto que dice Bulbasaur
  });
});
