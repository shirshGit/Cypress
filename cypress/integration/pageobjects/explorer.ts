export default class explorer{

    filterbutton()
    {
        return cy.get('button[class *= "Button_filter"]');
    }

    filteroptions()
    {
        return cy.get('div[class *= "ListViewItem_cont"]');
    }

    testoptionInSourceBlade()
    {
        return cy.get('li[class *= "Tab_selected"]');
    }

    productLocator()
    {
        return cy.get('div[class *= "SyntheticSourceSelectorTreeTableDisplay_collapseIcon"]');
    }

    sourceBladeCommonTextSelector()
    {
        return cy.get('div[class *= "SyntheticSourceSelectorTreeTableDisplay_sourceNameAndCount"] > span');
    }

    commonCheckBoxinSourceSelector()
    {
        return cy.get('div[class *= "TreeTable_checkboxCell"] > label > input', {timeout: 15000});
    }

    commonCheckBoxLabelInSourceSelector()
    {
        return cy.get('div[class *= "TreeTable_checkboxCell"] > label');
    }

    searchBoxInSouceBladeExplorer()
    {
        return 'input[data-testid = "fabricsearchbox"]';
    }

    testTextselectorFromSourceBlade()
    {
        return 'div[class *= "SyntheticSourceSelectorTreeTableDisplay_testIcon"] + div';
    }

    testTypesSourceBlade()
    {
        return '#Dropdown199-option';
    }

    webTestTypeInTestTypeDropDown()
    {
        return '#Dropdown199-list17 > span > div';
    }

    monitorTypeSourceBlade()
    {
        return '#Dropdown197-option > div';
    }

    chromeMonitorSelectionInSourceBlade()
    {        return '#Dropdown197-list1 > span > div'

    }

    monitorTypeTextInSourceBlade()
    {
        return 'div[class *= "SyntheticSourceSelectorTreeTableDisplay_syntheticSourceSelectorTable_3B8GW"] > div:nth-child(2) > div > div > div > div > div:nth-child(4) > div';
    }

}