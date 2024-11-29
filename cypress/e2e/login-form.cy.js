import { errorMessages } from "../../src/components/Login";
describe("Register Page", () => {
  describe("Error Messages", () => {
    it("email input throws error for 2 chars", () => {
      //Arrange
      cy.visit("http://localhost:5174/");
      //Act
      cy.get('[data-cy="email-input"]').type("çi");
      //Assert
      cy.contains(errorMessages.email);
    });
    it("password input throws error for 2 chars", () => {
      //Arrange
      cy.visit("http://localhost:5174/");
      //Act
      cy.get('[data-cy="password-input"]').type("12");
      //Assert
      cy.contains(errorMessages.password);
    });
    it("button is disabled for unvalidated inputs.", () => {
      //Arrange
      cy.visit("http://localhost:5174/");
      //Act

      //Assert
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });
  });
  describe("Form inputs validated", () => {
    it("button enabled for validated inputs.", () => {
      //Arrange
      cy.visit("http://localhost:5174/");
      //Act
      cy.get('[data-cy="email-input"]').type("cigdem@gmail.com");
      cy.get('[data-cy="password-input"]').type("1234");
      //Assert

      cy.get('[data-cy="terms-input"]').check();
      cy.get('[data-cy="submit-button"]').should("not.be.disabled");
    });
  });
});
