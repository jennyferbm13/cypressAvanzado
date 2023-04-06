describe("Seguridad", function () {
  it.only("Navegar en varios dominios-cypress no deja", function () {
    cy.visit("https://pokedexpokemon.netlify.app/");
    cy.visit("https://todo-cypress-iota.vercel.app");
    cy.get("#title").type("Titulo de prueba");
  });

  it("Navegar en un dominio", function () {
    cy.visit("https://todo-cypress-iota.vercel.app");
    cy.get("h1").invoke("text").as("titulo");
  });

  it("Navegar a otro dominio", function () {
    cy.visit("https://todo-cypress-iota.vercel.app");
    //si navego otro dominio ya no muestra el log
    cy.log(this.titulo);
  });
});
