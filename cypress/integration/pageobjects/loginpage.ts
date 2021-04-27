export default class login
{
    email(){
        return cy.get('input[id="Email"]')
    }
    password(){
        return cy.get('input[type="password"]')
    }
    signInButton(){
        return cy.get('input[id="LoginButton"]').contains('Login')
    }
}
