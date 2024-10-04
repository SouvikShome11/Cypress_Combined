/// <reference types="cypress" />

describe('Advanced UI Elements', function () {
  it('Browser Controls', function () {
    cy.visit('https://react-redux.realworld.io/');
    cy.contains('Sign in').click();
    cy.go('back');
    cy.go('forward');
    cy.go(-1); // COnsidered as backward
    cy.go(1); // COnsidered as forward
    cy.get('input[type="email"]').type('cypress');
    cy.reload();
  });
});
