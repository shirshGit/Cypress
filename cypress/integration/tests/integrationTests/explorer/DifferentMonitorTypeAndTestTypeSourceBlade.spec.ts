import ExplorerHelper from '../../../Helpers/SyntheticExplorerHelper';
import ExplorerLocator from '../../../pageobjects/explorer'
import LoginHelper from '../../../Helpers/LoginHelper';
import BuildUrls from '../../../utilities/buildUrls';

describe('Test Cases For Synthetic Source Balde', function () {

    const explorer = new ExplorerHelper();
    const explorerSelctor = new ExplorerLocator();
    const urlBuild = new BuildUrls();
    const loginHelper = new LoginHelper();

    beforeEach('', () => {
        cy.clearLocalStorage();
        cy.clearCookies();
    })

    it('Verify User should only able to see test when they have synthetic monitoring access', function () {
        loginHelper.loginToPortal();
        explorer.mockDataForTestTypeAndMonitorType()

        cy.visit(urlBuild.ExplorerUrl()).then(() => {

            cy.get(explorerSelctor.testTypesSourceBlade()).click();
            cy.get(explorerSelctor.webTestTypeInTestTypeDropDown()).click();
        });
    })

    it('Verify filter by monitor type on source selection blade', function(){
        loginHelper.loginToPortal();

        explorer.mockDataForTestTypeAndMonitorType();

        cy.visit(urlBuild.ExplorerUrl()).then(() => {
            cy.get(explorerSelctor.monitorTypeSourceBlade()).click();
            cy.wait(2000);
            cy.get(explorerSelctor.chromeMonitorSelectionInSourceBlade()).then(($monitor) => {
                cy.wrap($monitor).invoke('click');
                cy.wait(2000);
                explorerSelctor.productLocator().eq(0).should('be.visible').click().then(() => {
                    cy.get(explorerSelctor.monitorTypeTextInSourceBlade()).each(($el) => {
                        expect(cy.wrap($el).should('contain.text', 'Chrome'));

                    })
                   
                })
            })
            
        })
    })
})