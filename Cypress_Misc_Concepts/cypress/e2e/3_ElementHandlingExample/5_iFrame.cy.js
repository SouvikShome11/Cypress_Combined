/// <reference types="Cypress" />

describe('Advanced UI Elements', function () {
  /**
   * @iFrame
   * *cy.get('#mce_0_ifr'). ---> iframe name
   *
   */
  it('Iframes', function () {
    cy.visit('https://the-internet.herokuapp.com/iframe');
    cy.get('#mce_0_ifr').within(function ($iframe) {
      const frame = $iframe.contents().find('#tinymce');
      cy.wrap(frame).clear().type('hello');
    });
  });
});
