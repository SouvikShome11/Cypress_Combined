/// <reference types="Cypress" />
import landingPage from '../pages/landingPage';
import loginPage from '../pages/loginPage';
import homePage from '../pages/homePage';
import settingsPage from '../pages/settingsPage';

describe('Test Case 1', function () {
  /* //*not  needed as we are exporting the objcet of the pages from thge POM classes
  const landingPage = new LandingPag();
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const settingsPage = new SettingsPage();
  */
  beforeEach(function () {
    cy.fixture('ConduitData').as('data');
  });

  it('1st Test Case', function () {
    cy.visit('https://react-redux.realworld.io/#/?_k=hk6m59');
    landingPage
      .clickSigninButton()
      .enterEmail(this.data.email)
      .enterPassword(this.data.passwordWrong)
      .clickSigninButton()
      .checkYourFeedIsVisible()
      .clickSettingsButton()
      .clickLogoutButton();
  });
});
