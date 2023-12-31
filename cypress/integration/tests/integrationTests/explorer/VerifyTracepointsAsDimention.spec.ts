import ExplorerHelper from '../../../Helpers/SyntheticExplorerHelper';
import ExplorerLocator from '../../../pageobjects/explorerPageLocators';
import BuildUrls from '../../../utilities/buildUrls';
import LoginHelper from '../../../Helpers/LoginHelper';
import CyWrapper from '../../../utilities/cpCypressWrapper';

describe('This script is to verify Tracepoints are shown as dimention', function() {

    const explorer = new ExplorerHelper();
    const explorerSelctor = new ExplorerLocator();
    const urlBuild = new BuildUrls();
    const loginHelper = new LoginHelper();
    const cyWrapper = new CyWrapper();

    beforeEach('', () => {
        
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    it('Verify Tracepoint are shown as Dimentions', function() {
        
        let tracepoints : string[] = [];
        tracepoints.push('TR-Content-Type');
        tracepoints.push('TR-GetDate');

        loginHelper.loginToPortal();
        explorer.mockDefaultDataForAllRequestsForExplorer();
        cy.visit(urlBuild.ExplorerUrl()).then(() => {
            explorer.searchTestInSourceSelector('Test1');
            explorer.selectSearchedItemFromSourceBlade();
            explorer.clickOnColumnByDropDown();
            cyWrapper.verifyTextOfCommonElementsContainsTextOrTexts(explorerSelctor.coloumnByOptions(), tracepoints);

        })

    })

})