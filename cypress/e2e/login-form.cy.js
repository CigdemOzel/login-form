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
      cy.get('[data-cy="password-input"]').type("öz");
      //Assert
      cy.contains(errorMessages.password);
    });
  });
});
