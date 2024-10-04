/// <reference types="Cypress" />
import BasePage from './basePage';
import loginPage from './loginPage';

class LandingPag extends BasePage {
  getSignin() {
    return 'Sign in';
  }

  // @Action Methods Are written belwo ----------------------->
  clickSigninButton() {
    //cy.contains(this.getSignin()).click(); //* stage 1 Implemnetaion
    this.clickElement(this.getSignin(), true); //* Stage 2: Implementaing Base Page
    return loginPage; //* Returning loginPage Object as this action will navigate to LoginPage
  }
}

const landingPage = new LandingPag();
export default landingPage;
