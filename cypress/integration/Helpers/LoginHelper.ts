import Login from '../pageobjects/loginpage';
import BuildUrls from '../utilities/buildUrls'

export default class LoginHelper
{
    login = new Login();
    urlBuild = new BuildUrls();
    environment : string = Cypress.env('environment');

    loginToPortal()
    {
        cy.log('Login Start')
        if (this.environment != 'localhost') {
            cy.log('Reaced Login')
            cy.visit(this.urlBuild.LoginUrl());
            cy.fixture('userlogindetails').then((user) => {
                this.login.email().should('be.visible').type(user.email);
                this.login.password().should('be.visible').type(user.password);
                this.login.signInButton().should('be.visible').click();
            })
        }
    }
}