describe("calculator", () => {
  it("should check add", () => {
    cy.visit("");
    cy.get('button[value="1"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="="]').click();
    cy.get(".calculator-screen").should("have.attr", "value").and("equal", "2");
  });

  it("should check sub", () => {
    cy.visit("");
    cy.get('button[value="1"]').click();
    cy.get('button[value="-"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="="]').click();
    cy.get(".calculator-screen").should("have.attr", "value").and("equal", "0");
  });

  it("should check multi", () => {
    cy.visit("");
    cy.get('button[value="1"]').click();
    cy.get('button[value="*"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="="]').click();
    cy.get(".calculator-screen").should("have.attr", "value").and("equal", "1");
  });

  it("should check divide", () => {
    cy.visit("");
    cy.get('button[value="1"]').click();
    cy.get('button[value="/"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="="]').click();
    cy.get(".calculator-screen").should("have.attr", "value").and("equal", "1");
  });

  it("should check negate", () => {
    cy.visit("");
    cy.get('button[value="-"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="="]').click();
    cy.get(".calculator-screen").should("have.attr", "value").and("equal", "0");
  });

  it("should check equation with dot", () => {
    cy.visit("");
    cy.get('button[value="1"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="5"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="."]').click();
    cy.get('button[value="5"]').click();
    cy.get('button[value="="]').click();
    cy.get(".calculator-screen").should("have.attr", "value").and("equal", "2");
  });

  it("should check the correctness of mathematical operations", () => {
    cy.visit("");
    cy.get('button[value="-"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="*"]').click();
    cy.get('button[value="("]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value="-"]').click();
    cy.get('button[value="1"]').click();
    cy.get('button[value=")"]').click();
    cy.get('button[value="="]').click();
    cy.get(".calculator-screen").should("have.attr", "value").and("equal", "-1");
  });

  it("should check clearing equation", () => {
    cy.visit("");
    cy.get('button[value="1"]').click();
    cy.get('button[value="AC"]').click();
    cy.get(".calculator-screen").should("have.attr", "value").and("equal", "");
  });

  it("should check sending incorrect equation", () => {
    cy.visit("");
    cy.get('button[value="+"]').click();
    cy.get('button[value="2"]').click();
    cy.get('button[value="+"]').click();
    cy.get(".calculator-screen").should("have.attr", "value").and("equal", "+2+");
  });
});
