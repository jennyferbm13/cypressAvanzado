let texto;
describe("Compartir info entre dos dominios y usar esa info", function () {
  it("Compartir info sin usar sesson", function () {
    cy.visit("https://pokedexpokemon.netlify.app/");
    cy.get("h1")
      .first()
      .invoke("text")
      .then((text) => {
        //guardar usando el plugin que hicimos
        cy.task("guardar", { texto: text });
      });
  });
  it("usando la info de arriba", function () {
    cy.visit("https://todo-cypress-iota.vercel.app");
    cy.task("obtener", "texto").then((valor) => {
      cy.get("#title").type(valor);
    });
  });
});
