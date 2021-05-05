export default class login
{
    email(){
        return cy.get('input[id="Username"]')
    }
    password(){
        return cy.get('input[id="Password"]')
    }
    signInButton(){
        return cy.get('button[id="user-login-button"]')
    }
}
