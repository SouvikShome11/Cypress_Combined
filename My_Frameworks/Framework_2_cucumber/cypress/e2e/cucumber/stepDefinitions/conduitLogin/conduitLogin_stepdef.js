import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../../pages/homePage';
import landingPage from '../../../pages/landingPage';
import loginPage from '../../../pages/loginPage';
import settingsPage from '../../../pages/settingsPage';

beforeEach(function () {
  cy.fixture('conduitLoginData').as('data');
});

Given('User is on the login page', function () {
  /* //*Removing to Implemnet Page Object Model
  cy.visit('https://react-redux.realworld.io/');
  cy.get('a[href="#login"]').click(); */
  landingPage.navigateTo('https://react-redux.realworld.io/');
  landingPage.clickSigninButton();
});

When('User login with valid credentials', function () {
  /*
  cy.get('input[placeholder="Email"]').type(this.data.validEmail);
  cy.get('input[placeholder="Password"]').type(this.data.validPassword);
  cy.get('button[type="submit"]').click(); */
  loginPage.enterEmail(this.data.validEmail);
  loginPage.enterPassword(this.data.validPassword);
  loginPage.clickSigninButton();
});

When(/^User login with valid credentials from data table$/, (dataTable) => {
  /*
  cy.get('input[placeholder="Email"]').type(dataTable.rawTable[1][0]);
  cy.get('input[placeholder="Password"]').type(dataTable.rawTable[1][1]);
  cy.get('button[type="submit"]').click(); */
  loginPage.enterEmail(dataTable.rawTable[1][0]);
  loginPage.enterPassword(dataTable.rawTable[1][1]);
  loginPage.clickSigninButton();
});

When('User click on the settings button', function () {
  //cy.get('a[href="#settings"]').click();
  homePage.clickSettingsButton();
});

When('User click on the logout button', function () {
  //cy.get('.btn.btn-outline-danger').click();
  settingsPage.clickLogoutButton();
});

Then('User should be routed back to login page', function () {
  cy.title().should('eq', 'Conduit');
});
