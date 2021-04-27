import ExplorerHelper from '../../../Helpers/SyntheticExplorer';
import ExplorerLocator from '../../../pageobjects/explorer'

describe('Test Cases For Synthetic Source Balde', function () {
    const explorer = new ExplorerHelper();
    const explorerSelctor = new ExplorerLocator();

    beforeEach('', () => {
        
        cy.clearLocalStorage();
        cy.clearCookies();
        const mockDataExplorer = {
            'GetUserIdentity': null,
            'syntheticSource': null,
            'GetTimezones': null,
            'insights': null,
            'metricsData': null,
            'zoneBasics': null,
            'GetTestTypesWithMonitorsForDivision' : null,
            'dateTimeInfoQuery' : null
        };

        explorer.mockDataForExplorerPageLoad(mockDataExplorer)
    });

    it('Verify User should only able to see test when they have synthetic monitoring access', function () {
        cy.visit('https://localhost:44302/Preview/Explorer/');
        explorerSelctor.testoptionInSourceBlade().should('be.visible');
        explorerSelctor.productLocator().eq(0).should('be.visible').click().then(() => {
            explorerSelctor.sourceBladeCommonTextSelector().should(($el) => {
                expect($el.eq(6)).to.contain('Test2');
            })
            
        })
    })

    it('Verify Able to select multiple items (products, folders and tests)', function () {

        cy.visit('https://localhost:44302/Preview/Explorer/').then(() => {
            explorerSelctor.commonCheckBoxinSourceSelector().each(($el) => {

                cy.wrap($el).invoke('click').then(() => {
                    explorerSelctor.commonCheckBoxLabelInSourceSelector().invoke('attr', 'class').should('contain', 'TreeTable_');
                    debugger;
                });
                

            });

        });        

    })


    it('Verify search from the list', function() {

        cy.visit('https://localhost:44302/Preview/Explorer/').then(() => {
            cy.wait(1000);
            cy.get(explorerSelctor.searchBoxInSouceBladeExplorer()).eq(1).should('be.visible').type('Test{Enter}');
            explorerSelctor.sourceBladeCommonTextSelector().eq(0).should('contain.text', 'DoNotDelete-DataStore');
            cy.get(explorerSelctor.testTextselectorFromSourceBlade()).eq(0).should('contain.text', 'Test');
            
        })

        
    })

})