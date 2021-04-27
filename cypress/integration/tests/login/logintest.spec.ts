import Login from '../../pageobjects/loginpage';
import HomePage from '../../pageobjects/homepage'

describe('Login', function () {
  const login = new Login();
  const homePage = new HomePage();
  let un: string = null;
  let pwd: string = null;
  
  beforeEach('', function() {
    cy.fixture('userlogindetails').as('user');
  })

  // it('Sign in', function () {
  //   cy.clearCookies();
  //   cy.fixture('userlogindetails').then((userDetails) => {
  //     debugger;
  //     un = userDetails.email;
  //     pwd = userDetails.password;
  //     cy.visit('https://localhost:44300/Preview/Dashboard');

  //     cy.wait(500);

  //     login.email().should('be.visible').type(un);
  //     // cy.wait(500);
  //     login.password().should('be.visible').type(pwd);
  //     // cy.wait(500);
  //     login.signInButton().should('be.visible').click();
  //     cy.url().should('includes', '/Dashboard');
  //     cy.visit('https://localhost:44300/Content/Dashboard');

  //   });
  //   //Cypress.Cookies.debug(true);
  //   //Cypress.config({"pageLoadTimeout" : 120000});
  //   //const baseUrl = Cypress.env('url');
  //   //cy.setCookie("authorization", "Bearer SLPlbxmCLkuZYsfSuaWGFGH9l7V63ufSfBEyiyfk/epzxYXvbHbCII8djPU8QvAetGQOE3JZ7vHYli5cWeZeMmRGV1mqRxyNd+l+8QYclH4MbGgquIaEFbx8DYVB4Z4MM3c8u9/WW1a837J43yhfflJcfaHi90fFeWS+HxVl15+SPXMfzIpJLkDIuHSFM28aAzbSIG1vJPzaLmQszrr/8Bhps6aSiFSLd8iMHh62GyA=")
  //   //cy.visit('https://localhost:44300/Entry/Login.aspx');


  //   cy.visit('https://localhost:44300/Preview/Dashboard');
  //   // cy.visit('https://localhost:44300/Entry/Login.aspx', {
  //   //     onBeforeLoad: win => {
  //   //       win.sessionStorage.clear();
  //   //     }
  //   //   });
  //   cy.wait(500);

  //   login.email().should('be.visible').type(un);
  //   // cy.wait(500);
  //   login.password().should('be.visible').type(pwd);
  //   // cy.wait(500);
  //   login.signInButton().should('be.visible').click();
  //   cy.url().should('includes', '/Dashboard');
  //   cy.visit('https://localhost:44300/Content/Dashboard');
  // })

    it('Smartboard Page Navigation', function(){
      
      cy.clearCookies();
      const baseUrl = Cypress.env('url');
      cy.visit('https://localhost:44300/Preview/Dashboard')
      // cy.visit('https://localhost:44300/Entry/Login.aspx');
      // // cy.visit(baseUrl, {
      // //     onBeforeLoad: win => {
      // //       win.sessionStorage.clear();
      // //     }
      // //   });
      login.email().should('be.visible').type(this.user.email);
      // cy.wait(500);
      login.password().should('be.visible').type(this.user.password);
      // cy.wait(500);
      login.signInButton().should('be.visible').click();
      debugger;
      cy.get('a[class = "home"]').should('be.visible').then($el=>{
        cy.wrap($el).invoke('mouseover');
      })
      homePage.smartboard_nvgn_frm_home().should('be.visible').click();
  })
})

