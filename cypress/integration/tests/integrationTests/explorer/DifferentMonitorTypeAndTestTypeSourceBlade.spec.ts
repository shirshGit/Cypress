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
            'GetTestTypesWithMonitorsForDivision' : null

        }

        explorer.mockDataForExplorerPageLoad(mockDataExplorer)


    })

    it('Verify User should only able to see test when they have synthetic monitoring access', function () {
        cy.visit('https://localhost:44302/Preview/Explorer/');
        
    })
})