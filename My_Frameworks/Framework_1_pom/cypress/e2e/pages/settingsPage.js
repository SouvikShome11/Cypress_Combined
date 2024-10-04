import BasePage from './basePage';
class SettingsPage extends BasePage {
  getLogoutButton() {
    return 'Or click here to logout.';
  }

  clickLogoutButton() {
    //cy.contains(this.getLogoutButton()).click(); //*stage 1: Implemnetaion
    this.clickElement(this.getLogoutButton(), true); //*Stage 2: Implementaing Base Page
  }
}

const settingsPage = new SettingsPage();
export default settingsPage;
