import BasePage from './basePage';
import homePage from './homePage';

class LoginPage extends BasePage {
  getEmail() {
    return 'input[type="email"]';
  }

  getPassword() {
    return 'input[type="password"]';
  }

  getSigninButton() {
    return 'button[type="submit"]';
  }

  // @Action Methods Are written belwo ----------------------->

  enterEmail(email) {
    //cy.get(this.getEmail()).type(email); //*stage 1 Implemnetaion
    this.fillText(this.getEmail(), email); //*Stage 2: Implementaing Base Page
    return this; // *Returning same page object as this action is not navigating to some new page
  }

  enterPassword(password) {
    //cy.get(this.getPassword()).type(password); //*stage 1 Implemnetaion
    this.fillText(this.getPassword(), password); //*Stage 2: Implementaing Base Page
    return this; // *Returning same page object as this action is not navigating to some new page
  }

  clickSigninButton() {
    //cy.get(this.getSigninButton()).click(); //*stage 1 Implemnetaion
    this.clickElement(this.getSigninButton()); //*Stage 2: Implementaing Base Page
    return homePage;
  }
}

const loginPage = new LoginPage();
export default loginPage;
