/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

describe('DropDown Handling', () => {
  // @Handling Static Dropdown*************************
  xit('Static Dropdown', () => {
    cy.visit('https://seleniumbase.io/demo_page');

    // *can be selected by 1.By Visible Text, 2.By Value Attribute, 3. By Index [.slect(2)]
    cy.get('#mySelect').select('100%').should('have.value', '100%');
  });

  // @Handling Dynamic Dropdown*************************
  xit('Dynamic Dropdown', () => {
    cy.visit('https://www.flipkart.com/');

    cy.get("input[title*='Search for Products']").type('Mobile');
    cy.get("form[class*='search'] li div").contains('under 8000').click();
  });

  // @Handling Multi SelectDropdown*************************
  it('Multi Select', () => {
    cy.visit('https://demo.mobiscroll.com/jquery/select/multiple-select#');

    cy.get('#multiple-select-input').click({ force: true });

    cy.get(".mbsc-wheel-item-multi[role='option']")
      .contains(new RegExp('^book(s)?$', 'i'))
      .click({ force: true });

    cy.get(".mbsc-wheel-item-multi[role='option']")
      .contains(new RegExp('^electronic', 'i'))
      .click({ force: true });
  });
});
