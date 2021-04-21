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
}