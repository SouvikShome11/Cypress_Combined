/// <reference types="Cypress" />

describe('Buttons Handling', () => {
  // @RADIO_Button Handling
  it('Radio Button', () => {
    cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/');

    if (
      cy.get('#radio-choice-0a').should('not.be.checked') ||
      cy.get('#radio-choice-0b').should('not.be.checked')
    ) {
      cy.log('None of the Options checked');

      cy.get('#radio-choice-0a').click({ force: true });
      cy.wait(2000);
      cy.get('#radio-choice-0b').click({ force: true });
    } else {
      cy.log('Already Checked');
    }
  });

  /**
   * @CHECK_BOX Handling
   *
   * !using .check() instead of .click()-->
   *  *1.State Management: .check() will only check the checkbox if it’s not already checked. If the checkbox is already checked, it won't uncheck it
   *  *2.Intended Method: .check() is specifically designed for interacting with checkboxes and radio buttons, making it more semantically correct.
   *  *3.Automatic Verification: .check() automatically verifies that the checkbox was successfully checked, adding an extra layer of assertion that the action was performed correctly.
   *  *4.Built-in Workarounds: .check() handles edge cases like hidden or disabled checkboxes, which may not work properly with .click().
   */

  it('Checkbox Handling', () => {
    cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/');

    cy.get('#checkbox-enhanced')
      .should('not.be.checked')
      .click({ force: true })
      .should('be.checked');
  });
});
