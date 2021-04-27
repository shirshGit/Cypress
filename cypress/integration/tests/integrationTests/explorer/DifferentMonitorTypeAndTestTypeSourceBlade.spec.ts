import ExplorerHelper from '../../../Helpers/SyntheticExplorer';
import ExplorerLocator from '../../../pageobjects/explorer'

describe('Test Cases For Synthetic Source Balde', function () {

    const explorer = new ExplorerHelper();
    const explorerSelctor = new ExplorerLocator();

    beforeEach('', () => {
        const mockDataExplorer = {
            'GetUserIdentity': null,
            'syntheticSource': 'DifferentMonitorTypeSourceBlade.json',
            'GetTimezones': null,
            'insights': null,
            'metricsData': null,
            'zoneBasics': null,
            'GetTestTypesWithMonitorsForDivision' : null,
            'dateTimeInfoQuery' : null

        }

        explorer.mockDataForExplorerPageLoad(mockDataExplorer)


    })

    it('Verify User should only able to see test when they have synthetic monitoring access', function () {
        cy.visit('https://localhost:44302/Preview/Explorer/').then(() => {

            cy.get(explorerSelctor.testTypesSourceBlade()).click();
            cy.get(explorerSelctor.webTestTypeInTestTypeDropDown()).click();
        });
    })

    it('Verify filter by monitor type on source selection blade', function(){
        cy.visit('https://localhost:44302/Preview/Explorer/').then(() => {
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