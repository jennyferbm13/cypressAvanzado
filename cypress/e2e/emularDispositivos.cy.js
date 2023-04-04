const DEVICES = [
  { viewport: "macbook-15", type: "desktop" },
  { viewport: "ipad-2", type: "mobile" },
  { viewport: [1280, 720], type: "desktop" },
  { viewport: [375, 667], type: "mobile" },
];

describe("Emular", function () {
  it("Usando viewport", () => {
    //definir viewport antes de visitar pagina
    cy.viewport(1280, 720);
    cy.visit("https://todo-cypress-iota.vercel.app/");
    cy.contains("Safari").should("exist");
  });

  it("Usando viewport mobil", () => {
    //definir viewport antes de visitar pagina
    cy.viewport(375, 667);
    cy.visit("https://todo-cypress-iota.vercel.app/");
    cy.contains("Safari").should("not.be.visible");
  });

  it("Usando viewport desktop", () => {
    //definir viewport antes de visitar pagina
    cy.viewport("macbook-15");
    cy.visit("https://todo-cypress-iota.vercel.app/");
    cy.contains("Safari").should("exist");
  });

  it("Usando viewport mobil iphone", () => {
    //definir viewport antes de visitar pagina
    cy.viewport("iphone-6+");
    cy.visit("https://todo-cypress-iota.vercel.app/");
    cy.contains("Safari").should("not.be.visible");
  });
});
