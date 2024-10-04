// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const XLSX = require('xlsx');

Cypress.Commands.add('readExcel', function (filePath, sheetName) {
  return cy.readFile(filePath, 'binary').then(function (fileContent) {
    var workbook = XLSX.read(fileContent, { type: 'binary' });
    var sheetToRead = workbook.SheetNames.includes(sheetName)
      ? sheetName
      : workbook.SheetNames[0]; // Select the first sheet
    var sheet = workbook.Sheets[sheetToRead];
    var jsonData = XLSX.utils.sheet_to_json(sheet);
    return jsonData; // Return data from the Excel file
  });
});

//* Login Custom Command

Cypress.Commands.add('conduitLogin', function (email, password) {
  cy.visit('https://react-redux.realworld.io/');
  cy.contains('Sign in').click();
  cy.get('input[type="email"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
