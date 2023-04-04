describe("Uso de xpaths", function () {
  it("Con selecctor", () => {
    cy.visit("https://pokedexpokemon.netlify.app/");
    /*cy.get(
      "#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1"
    ).contains("Bulbasaur");*/
    cy.get(
      "#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1"
    ).should("contain", "Bulbasaur");
    cy.contains;
  });
  it("Uso de xpath", function () {
    cy.visit("https://pokedexpokemon.netlify.app/");
    cy.xpath("//h1[contains(text(),'Bulbasaur')]").should(
      "contain",
      "Bulbasaur"
    );
  });
});
