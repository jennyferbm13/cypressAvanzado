describe("Flaky test", function () {
  it("Single query command", () => {
    cy.visit("https://pokedexpokemon.netlify.app/");
    cy.get(
      "#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1"
    ).should("contain", "Bulbaasaur"); //va fallar
    //podemos hacer lo siguiente para que lo intente n veces
    cy.contains(
      "#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1",
      "Bulbaasaur"
    );
  });
  it("Validar click este habilitado", () => {
    cy.visit("https://pokedexpokemon.netlify.app/");
    //solo lo intenta una vez
    /* cy.get("#submit").click()*/
    //Acá lo intenta hasta que pase
    cy.get("#submit").should("not.to.be.disabled").click();
  });
  it.only("Ir al padre", () => {
    cy.visit("https://pokedexpokemon.netlify.app/");
    cy.get(
      "#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1"
    )
      .should("contain", "Bulbasaur")
      .parent()
      .should("have.class", "card-header");
  });
});
