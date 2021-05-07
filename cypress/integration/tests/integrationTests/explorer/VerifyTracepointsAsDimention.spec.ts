import ExplorerHelper from '../../../Helpers/SyntheticExplorerHelper';
import ExplorerLocator from '../../../pageobjects/explorer';
import BuildUrls from '../../../utilities/buildUrls';
import LoginHelper from '../../../Helpers/LoginHelper';

describe('This script is to verify Tracepoints are shown as dimention', function() {

    const explorer = new ExplorerHelper();
    const explorerSelctor = new ExplorerLocator();
    const urlBuild = new BuildUrls();
    const loginHelper = new LoginHelper();

    beforeEach('', () => {
        
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    it('Verify Tracepoint are shown as Dimentions', function() {
        
        loginHelper.loginToPortal();
        explorer.mockDefaultDataForAllRequestsForExplorer();
        cy.visit(urlBuild.ExplorerUrl()).then(() => {
            explorer.searchTestInSourceSelector('API');
            explorer.selectSearchedItemFromSourceBlade();
            explorer.clickOnColumnByDropDown();
        })



    })

})