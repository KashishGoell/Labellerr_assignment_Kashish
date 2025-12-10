/// <reference types="cypress" />

describe("Labellerr Public UI Automation", () => {

  beforeEach(() => {
    // Prevent failures due to external script errors
    Cypress.on("uncaught:exception", () => false);
  });

  it("Loads homepage successfully", () => {
    cy.visit("https://labellerr.com");
    cy.contains("Labellerr").should("be.visible");
    cy.contains(/AI|Annotation|Labels/i).should("exist");
  });

  it("Checks top navigation menu items", () => {
    cy.visit("https://labellerr.com");
    cy.contains(/Product|Technology|Solutions|Pricing|Login/i).should("be.visible");
  });

  it("Opens Login page from homepage", () => {
    cy.visit("https://labellerr.com");
    
    cy.contains(/Login|Sign in/i)
      .scrollIntoView()
      .click({ force: true });

    cy.origin("https://labellerr.us.auth0.com", () => {
      cy.contains("Continue with Google", { timeout: 10000 }).should("be.visible");
      cy.contains("Continue with LinkedIn").should("be.visible");
    });
  });

  it("Verifies Docs are accessible", () => {
    cy.visit("https://labellerr.com");

    // Open docs in same tab
    cy.contains(/Docs|Documentation|Learn/i)
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.origin("https://docs.labellerr.com", () => {
      cy.contains(/Getting started|Introduction|Tutorials/i, { timeout: 10000 })
        .should("be.visible");
    });
  });

});
