import ExplorerHelper from '../../../Helpers/SyntheticExplorerHelper';
import ExplorerLocator from '../../../pageobjects/explorerPageLocators';
import BuildUrls from '../../../utilities/buildUrls';
import Login from '../../../pageobjects/loginpage';
import LoginHelper from '../../../Helpers/LoginHelper';

describe('Test Cases For Synthetic Source Balde', function () {
    const explorer = new ExplorerHelper();
    const explorerSelctor = new ExplorerLocator();
    const urlBuild = new BuildUrls();
    const login = new Login();
    const loginHelper = new LoginHelper();
    

    beforeEach('', () => {
        
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    it('Verify User should only able to see test when they have synthetic monitoring access', function () {

        loginHelper.loginToPortal();

        explorer.mockDefaultDataForAllRequestsForExplorer()

        cy.visit(urlBuild.ExplorerUrl());

        explorerSelctor.testoptionInSourceBlade().should('be.visible');
        explorerSelctor.productLocator().eq(0).should('be.visible').click().then(() => {
            explorerSelctor.sourceBladeCommonTextSelector().should(($el) => {
                expect($el.eq(6)).to.contain('Test2');
            })
            
        })
    })

    it('Verify Able to select multiple items (products, folders and tests)', function () {

        loginHelper.loginToPortal();

        explorer.mockDefaultDataForAllRequestsForExplorer();

        cy.visit(urlBuild.ExplorerUrl()).then(() => {
            explorerSelctor.commonCheckBoxinSourceSelector().each(($el) => {

                cy.wrap($el).invoke('click').then(() => {
                    explorerSelctor.commonCheckBoxLabelInSourceSelector().invoke('attr', 'class').should('contain', 'TreeTable_');
                    debugger;
                });
                

            });

        });        

    })


    it('Verify search from the list', function() {

        loginHelper.loginToPortal();

        explorer.mockDefaultDataForAllRequestsForExplorer();

        cy.visit(urlBuild.ExplorerUrl()).then(() => {
            cy.wait(1000);
            explorer.searchTestInSourceSelector('Test');
            //cy.get(explorerSelctor.searchBoxInSouceBladeExplorer()).eq(1).should('be.visible').type('Test{Enter}');
            explorerSelctor.sourceBladeCommonTextSelector().eq(0).should('contain.text', 'DoNotDelete-DataStore');
            cy.get(explorerSelctor.testTextselectorFromSourceBlade()).eq(0).should('contain.text', 'Test');
            
        })

        
    })

})