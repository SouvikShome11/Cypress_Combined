/// <reference types="Cypress" />
import BasePage from './basePage';
import settingsPage from './settingsPage';

class HomePage extends BasePage {
  getYourFeed() {
    return 'Your Feed';
  }

  getGlobalFeed() {
    return 'Global Feed';
  }

  getHome() {
    return 'Home';
  }

  getNewPost() {
    return 'New Post';
  }

  getSettings() {
    return 'Settings';
  }

  // @Action Methods Are written belwo ----------------------->
  checkYourFeedIsVisible() {
    this.isElementVisible(this.getYourFeed(), true);
    return this;
  }

  clickSettingsButton() {
    //cy.contains(this.getSettings()).click();//*stage 1 Implemnetaion
    this.clickElement(this.getSettings(), true); //*Stage 2: Implementaing Base Page
    return settingsPage;
  }
}

const homePage = new HomePage();
export default homePage;
