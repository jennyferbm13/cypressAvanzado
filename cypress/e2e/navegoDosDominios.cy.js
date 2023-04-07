let texto;
describe("Navegar entre dominios", function () {
  it.only("Dos el mismo test", function () {
    cy.visit("https://pokedexpokemon.netlify.app/");
    cy.get("h1")
      .first()
      .invoke("text")
      .then((text) => {
        //texto = text; //no es eficiente porque no se guarda de forma adecuada
        //es mejor usar variables de entorno
        Cypress.env({ textico: text });
      });
    cy.origin(
      "https://todo-cypress-iota.vercel.app",
      { args: { texto: "hola" } },
      function ({ texto }) {
        cy.visit("https://pokedexpokemon.netlify.app/"); //se debo volver a visitar sino sale error
        cy.log(texto);
        cy.log(Cypress.env());
      }
    );
    cy.visit("https://pokedexpokemon.netlify.app/");
    cy.get("h1")
      .first()
      .invoke("text")
      .should("be.equal", Cypress.env().textico);
  });
});
