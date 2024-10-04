/// <reference types="Cypress" />

describe('Hooks Basics', function () {
  //* Execute Only once
  before(function () {
    cy.log('Before block');
  });

  //* Execute before every it block
  beforeEach(function () {
    cy.log('Before Each block');
  });

  it('Search item', function () {
    cy.log('This is Search item block');
  });

  it('Order item', function () {
    cy.log('This is Order item block');
  });

  it('Check out item', function () {
    cy.log('This is Check out item block');
  });

  //* Execute after every it block
  afterEach(function () {
    cy.log('After Each block');
  });

  //* Execute Only once
  after(function () {
    cy.log('After block');
  });
});
