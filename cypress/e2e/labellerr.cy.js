/// <reference types="cypress" />

describe("Labellerr UI Automation (Stable Public UI)", () => {

  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
  });

  it("Loads homepage successfully", () => {
    cy.visit("https://www.labellerr.com", {
      failOnStatusCode: false,
      timeout: 60000,
    });

    cy.contains("Labellerr", { timeout: 10000 }).should("be.visible");
  });

  it("Checks top navigation menu items exist", () => {
    cy.visit("https://www.labellerr.com", { failOnStatusCode: false });

    cy.contains("Product").should("exist");
    cy.contains("Technology").should("exist");
    cy.contains("Solutions").should("exist");
    cy.contains("Pricing").should("exist");
    cy.contains(/Login|Sign in/i).should("exist");
  });

  it("Login option is present in navigation", () => {
    cy.visit("https://www.labellerr.com", { failOnStatusCode: false });

    cy.contains(/Login|Sign in/i).should("exist");
  });

  it("Docs option is available", () => {
    cy.visit("https://www.labellerr.com", { failOnStatusCode: false });

    cy.contains(/Docs|Documentation|Learn/i).should("exist");
  });

});
