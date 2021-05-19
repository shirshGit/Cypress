import ExplorerHelper from '../../../Helpers/SyntheticExplorerHelper';
import ExplorerLocator from '../../../pageobjects/explorerPageLocators';
import BuildUrls from '../../../utilities/buildUrls';
import Login from '../../../pageobjects/loginpage';
import LoginHelper from '../../../Helpers/LoginHelper';

describe('Verify Indicator metrics available in metrics list', function() {

    const explorer = new ExplorerHelper();
    const explorerSelctor = new ExplorerLocator();
    const urlBuild = new BuildUrls();
    const login = new Login();
    const loginHelper = new LoginHelper();

    beforeEach('', () => {
        
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    it('Verify Indicators metrics available in metrics list', function()
    {
        loginHelper.loginToPortal();
        explorer.mockDefaultDataForAllRequestsForExplorer();
        cy.visit(urlBuild.ExplorerUrl()).then(() => {
            explorer.searchTestInSourceSelector('Test1');
            explorer.selectSearchedItemFromSourceBlade();
            explorer.clickOnMetricListInDimention();
        })
    })
})