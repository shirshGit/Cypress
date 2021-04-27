import Explorer from '../../pageobjects/explorer';
import Login from '../../pageobjects/loginpage';

describe('Check Insight Present in Filtertab', function () {
    const explorerPage = new Explorer();
    const login = new Login();
    let filterOptions: string[] = [];
    let check: boolean = false;
    let products: string[] = [];



    beforeEach(() => {
        cy.intercept('POST', 'https://portalstage.catchpoint.com/m/g', (req) => {
            console.log('1');
            if (req.body.operationName === 'insights') {
                req.reply((res) => {
                    res.send({ fixture: 'insightsExplorer.json' });

                })
            }
            else if(req.body.operationName === 'syntheticSource'){
                req.reply((res) => {
                    res.send({ fixture: 'syntheticSourceExplorer.json' });
                })
            }
            else {
                req.reply();
            }
        });
    })

    // it('Explorer Insight verification', () => {

    //     cy.visit('https://portalstage.catchpoint.com/ui/Entry/Login.aspx');
    //     //cy.visit('https://localhost:44300/Entry/Login.aspx');
    //     cy.log('2');
    //     login.email().type('qaautomationxclient-clientadministrator@catchpoint.com');
    //     login.password().type('Password123!');
    //     login.signInButton().should('be.visible').click();
    //     cy.visit('https://portalstage.catchpoint.com/ui/Content/Explorer/?sIds=[133182]&pIds=[]&fIds=[]&sT=1&dim={%22dimensions%22:[{%22type%22:17}],%22breakdownOne%22:{%22type%22:0},%22breakdownTwo%22:{%22type%22:16}}&mtr=[]&tf={%22id%22:4,%22compareDays%22:7}&favId=0&tI=6&viz=1&dwq=0');
    //     cy.log('3');
    //     explorerPage.filterbutton().should('be.visible').click();
    //     cy.log('Reached here');
    //     cy.wait(2000);

    //     debugger;
    //     explorerPage.filteroptions().each(($el) => {
    //         const text = $el.prop('innerHTML');
    //         filterOptions.push(text);
    //         debugger;
    //         //console.log(filterOptions.length);
    //     }).then(() => {
    //         debugger;
    //         check = filterOptions.some((x) => x === 'DoNotDelete');
    //         expect(check).to.be.true;
    //     })

    // })

    it('verify Product, Folder, Test in source Explorer', () => {

        cy.visit('https://portalstage.catchpoint.com/ui/Entry/Login.aspx').url().then(() => {
            debugger;
            var envn = Cypress.env();
        });
        login.email().type('qaautomationxclient-clientadministrator@catchpoint.com');
        login.password().type('Password123!');
        login.signInButton().should('be.visible').click();
        cy.visit('https://portalstage.catchpoint.com/ui/Content/Explorer/');
        cy.wait(2000);
        cy.get('div[class *= "SyntheticSourceSelectorTreeTableDisplay_sourceNameAndCount"]', { timeout: 10000 }).should('be.visible').each(($el) => {
            const text = $el.prop('innerText');
            debugger;
            products.push(text);
        }).then(() => {
            // check = products.some((x) => {
            //     x.search('DoNotDelete-DataStore');
            check = products.some((x) =>
                x.includes('DoNotDelete-DataStore'));

            expect(check).to.be.true;
        })
    })
})
