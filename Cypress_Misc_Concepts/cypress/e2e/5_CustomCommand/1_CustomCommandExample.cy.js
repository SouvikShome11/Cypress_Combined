/// <reference types="Cypress" />

describe('Fixtures test', function () {
  beforeEach(function () {
    cy.fixture('ConduitData').as('data');
  });

  it('Conduit - Valid Credentials', function () {
    //* custom command added  to
    cy.conduitLogin(data.email, data.password);
    cy.contains('Settings').click();
    cy.contains('Or click here to logout.').click();
  });

  it('Conduit - Invalid Credentials', function () {
    cy.conduitLogin(data.email, data.passwordWrong);
    cy.get('.error-messages').should('contain', 'email or password is invalid');
  });
});
