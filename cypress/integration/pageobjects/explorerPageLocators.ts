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

    searchBoxInSouceBladeExplorerXpath()
    {
        return '(//input[@id = "fabric-search-box"])[2]';
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

    testSelectorAfterSearchSourceBlade()
    {
        return 'div[class *= SyntheticSourceSelectorTreeTableDisplay_syntheticSourceSelectorTable_3B8GW] > div > div > div > label'
    }

    selectButtonInSourceSelector()
    {
        return '#primary-button > span';
    }

    coloumnByDropDownButtonXpath()
    {
        return '(//div[contains(@class , "ExplorerDimensionSelectorQuery_dimensionCont__UmNS")]//i[@data-icon-name = "chevrondownLarge"]/div[@class = "fabricIcons_chevrondownLarge_2mav2"])[2]';
    }

    coloumnByOptions()
    {
        return 'div [id *= "ComboBox"] > button > span > span> div > span';
    }

    metricsListLocatorXpath()
    {
        return '//button[@id = "metric_list_btn"]/span';
    }

}