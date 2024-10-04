/// <reference types="Cypress" />

/** //@ Excel Read: dependency xlsx
 *
 *  //* Added as custom command -> see Support-> commnads.js
 *
 */

describe('Excel Data Test', function () {
  it('Reads data from Excel file', function () {
    cy.readExcel('cypress/fixtures/ConduitExcelData.xlsx', 'Sheet1').then(
      function (data) {
        // Access the first row of the sheet
        //var firstRow = data[0];

        cy.log(JSON.stringify(data[0]));
        cy.log(data[0].username);
        cy.log(data[0].password);
        // Use the data in your test
        //expect(firstRow['Your Column Name']).to.equal('Expected Value');
      }
    );
  });
});
