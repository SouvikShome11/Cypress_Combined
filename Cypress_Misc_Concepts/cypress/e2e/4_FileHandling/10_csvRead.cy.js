import neatCsv from 'neat-csv';

/** //@ CSV Read: neat-csv@v5
 * //* No need to add any method to read csv unline excel
 */

/// <reference types="Cypress" />

describe('Fixtures test', function () {
  beforeEach(function () {
    cy.fixture('ConduitCsv.csv')
      .then(neatCsv)
      .then((data) => {
        this.table = data;
      });
  });

  it('Data Printing', function () {
    cy.log(this.table[0].username);
  });

  it('Conduit - Valid Credentials', function () {
    cy.visit('https://react-redux.realworld.io/');
    cy.contains('Sign in').click();
    cy.get('input[type="email"]').type(this.table[0].username);
    cy.get('input[type="password"]').type(this.table[0].password);
    cy.get('button[type="submit"]').click();
    cy.contains('Settings').click();
    cy.contains('Or click here to logout.').click();
  });

  it('Conduit - Invalid Credentials', function () {
    cy.visit('https://react-redux.realworld.io/');
    cy.contains('Sign in').click();
    cy.get('input[type="email"]').type(this.table[1].username);
    cy.get('input[type="password"]').type(this.table[1].password);
    cy.get('button[type="submit"]').click();
    cy.get('.error-messages').should('contain', 'email or password is invalid');
  });
});
