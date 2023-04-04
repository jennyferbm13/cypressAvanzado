describe("Cookies", function () {
  beforeEach(() => {
    cy.session("login", () => {
      cy.visit("https://todo-cypress-iota.vercel.app/");
      cy.setCookie("nombre", "Jennyfer");
    });
  });
  it("Crear tarea", () => {
    cy.visit("https://pokedexpokemon.netlify.app/");
    cy.getCookies().should("be.empty");
  });
  it("agregar una cookie", function () {
    cy.setCookie("apellido", "Belalcazar");
    cy.getCookies().should("have.length", 1); //nombre, apellido
    //cy.clearCookies();
    cy.clearCookie("apellido");
  });

  it("obtener una cookie", function () {
    cy.getCookie("nombre").should("have.a.property", "value", "Jennyfer");
  });
});
