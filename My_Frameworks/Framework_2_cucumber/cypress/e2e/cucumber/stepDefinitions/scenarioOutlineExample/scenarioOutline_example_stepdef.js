/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^I Visit Google$/, () => {
  cy.visit('https://www.google.com/');
});

When('I search for {string}', function (keyword) {
  cy.get("[title='Search']").type(keyword);
  cy.wait(3000);
});
