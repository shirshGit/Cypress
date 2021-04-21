import { should } from 'chai';
import ExplorerHelper from '../../../Helpers/SyntheticExplorer';
import ExplorerLocator from '../../../pageobjects/explorer'

describe('Test Cases For Synthetic Source Balde', function () {
    const explorer = new ExplorerHelper();
    const explorerSelctor = new ExplorerLocator();

    beforeEach('', () => {
        const mockDataExplorer = {
            'GetUserIdentity': null,
            'syntheticSource': null,
            'GetTimezones': null,
            'insights': null,
            'metricsData': null,
            'zoneBasics': null,
            'GetTestTypesWithMonitorsForDivision' : null

        }

        explorer.mockDataForExplorerPageLoad(mockDataExplorer)


    })

    // it('Verify User should only able to see test when they have synthetic monitoring access', function () {
    //     cy.visit('https://localhost:44302/Preview/Explorer/');
    //     explorerSelctor.testoptionInSourceBlade().should('be.visible');
    //     explorerSelctor.productLocator().eq(0).should('be.visible').click().then(() => {
    //         explorerSelctor.sourceBladeCommonTextSelector().should(($el) => {
    //             expect($el.eq(4)).to.contain('Test2');
    //         })
            
    //     })
    // })

    // it('Verify Able to select multiple items (products, folders and tests)', function () {

    //     cy.visit('https://localhost:44302/Preview/Explorer/').then(() => {
    //         explorerSelctor.commonCheckBoxinSourceSelector().each(($el) => {

    //             cy.wrap($el).invoke('click').then(() => {
    //                 explorerSelctor.commonCheckBoxLabelInSourceSelector().invoke('attr', 'class').should('contain', 'TreeTable_indeterminate');
    //                 debugger;
    //             });
                

    //         });

    //     });        

    // })


    it('Verify search from the list', function() {

        cy.visit('https://localhost:44302/Preview/Explorer/').then(() => {

            cy.get(explorerSelctor.searchBoxInSouceBladeExplorer()).eq(1).type('Test{Enter}');
            explorerSelctor.sourceBladeCommonTextSelector().eq(0).should('contain.text', 'DoNotDelete-DataStore');
            explorerSelctor.sourceBladeCommonTextSelector().eq(1).should('contain.text', 'Test');
        })
    })

})