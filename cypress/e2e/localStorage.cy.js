describe("local storage", function () {
  beforeEach(() => {
    //forma de que haga lo mismo en cada it, pero
    //podemos usar cy.session para gaudar el sesion en cada it
    /*
    cy.visit("https://todo-cypress-iota.vercel.app/");
    cy.get("#title").type("Titulo de prueba");
    cy.get("#description").type("Descripcion de prueba");
    cy.contains("Create").click();*/

    cy.session("sesion_todo", () => {
      cy.visit("https://todo-cypress-iota.vercel.app/").then(() => {
        localStorage.setItem(
          "react_todo_ids",
          JSON.stringify(["Titulo de prueba"])
        );
        localStorage.setItem(
          "Titulo de prueba",
          JSON.stringify({
            title: "Titulo de prueba",
            id: "Titulo de prueba",
            complete: false,
            description: "Descripcion de una prueba",
          })
        );
      });
    });
    //cypress pide que se debe visitar
    cy.visit("https://todo-cypress-iota.vercel.app/");
  });

  it("Crear tarea", () => {
    cy.reload();
    cy.contains("Titulo de prueba").then(() => {
      expect(localStorage.getItem("Titulo de prueba")).to.exist;
    });
    cy.contains("Remove")
      .click()
      .then(() => {
        expect(localStorage.getItem("Titulo de prueba")).to.not.exist;
      });
    //esto lo hace automaticamente despues de cada it
    //cy.clearLocalStorage("Titulo de prueba").should((ls) => {
    // expect(ls.getItem("props")).to.be.null;//props = properties
    //});
  });
  it("valido ", function () {
    //cy.visit("https://todo-cypress-iota.vercel.app/");
    expect(localStorage.getItem("Titulo de prueba")).to.exist;
  });
});
