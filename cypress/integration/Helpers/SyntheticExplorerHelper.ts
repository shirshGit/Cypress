import ExplorerLocator from '../pageobjects/explorer';
const explorerSelctor = new ExplorerLocator();

export default class syntheticExplorerHelper {

    // environmentForScriptRun : string = Cypress.env('environment');
    // graphQLUrl : string = Cypress.env('graphQLUrl');
    // dataNeedMocking : string = Cypress.env('DataMock');

    /*
        This function is to mock graphQL requests for Explorer Page
    */

    mockDataForExplorerPageLoad(mockDataQueryFileDict: object, graphQLUrl: string) {
        const environmentForScriptRun: string = Cypress.env('environment');
        cy.intercept('POST', graphQLUrl, (req) => {
            let opName = req.body.operationName;
            switch (opName) {
                case 'GetUserIdentity':
                    if (environmentForScriptRun === 'localhost' ) {
                        if (mockDataQueryFileDict['GetUserIdentity'] === null) {
                            if (req.body.operationName === 'GetUserIdentity') {
                                req.reply((res) => {
                                    res.send({ fixture: 'explorermockdata/useridentity.json' });

                                });
                            }
                        }
                        else {
                            req.reply((res) => {
                                //'id' : '2'
                                res.send({
                                    body: { data: mockDataQueryFileDict[opName] }
                                });
                            });
                        }
                    }
                    break;

                    case 'syntheticSource':
                    if (mockDataQueryFileDict['syntheticSource'] === null) {
                        if (req.body.operationName === 'syntheticSource') {
                            req.reply((res) => {
                                res.send({ fixture: 'explorermockdata/syntheticSource.json' });

                            });
                        }
                    }
                    else {
                        let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName];
                        req.reply((res) => {
                            //'id' : '2'
                            res.send({ fixture: customMockFile });

                        });

                    }
                    break;

                    case 'GetTimezones':
                    if (mockDataQueryFileDict['GetTimezones'] === null) {
                        if (req.body.operationName === 'GetTimezones') {
                            req.reply((res) => {
                                res.send({ fixture: 'explorermockdata/GetTimezones.json' });

                            });
                        }
                    }
                    else {
                        let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName];
                        req.reply((res) => {
                            //'id' : '2'
                            res.send({ fixture: customMockFile });

                        });

                    }
                    break;

                    case 'insights':
                    if (mockDataQueryFileDict['insights'] === null) {
                        if (req.body.operationName === 'insights') {
                            req.reply((res) => {
                                res.send({ fixture: 'explorermockdata/insights.json' });

                            });
                        }
                    }
                    else {
                        let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName];
                        req.reply((res) => {
                            //'id' : '2'
                            res.send({ fixture: customMockFile });

                        });

                    }
                    break;

                case 'metricsData':

                    if (mockDataQueryFileDict['metricsData'] === null) {
                        if (req.body.operationName === 'metricsData') {
                            if (req.body.operationName.reportType === undefined) {

                                req.reply((res) => {
                                    res.send({ fixture: 'explorermockdata/metricDataNoReportType.json' });

                                });
                            }
                            else if (req.body.operationName.reportType === '5') {
                                req.reply((res) => {
                                    res.send({ fixture: 'explorermockdata/metricDataReportTypeFive.json' });
                                })
                            }
                            else if (req.body.operationName.reportType === '6') {
                                req.reply((res) => {
                                    res.send({ fixture: 'explorermockdata/metricDataReportTypeSix.json' });
                                })
                            }
                            else if (req.body.operationName.reportType === '4') {
                                req.reply((res) => {
                                    res.send({ fixture: 'explorermockdata/metricDataReportTypeFour.json' });
                                })
                            }
                        }
                    }

                    else {
                        if (req.body.operationName.reportType === undefined) {
                            let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName]['noreportTypenull'];
                            req.reply((res) => {
                                res.send({ fixture: customMockFile });

                            });
                        }

                        else if(req.body.operationName.reportType === '5')
                        {
                            let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName]['reportTypeFive'];
                            req.reply((res) => {
                                res.send({ fixture: customMockFile });

                            });
                        }

                        else if(req.body.operationName.reportType === '6')
                        {
                            let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName]['reportTypeSix'];
                            req.reply((res) => {
                                res.send({ fixture: customMockFile });

                            });
                        }
                        else if(req.body.operationName.reportType === '4')
                        {
                            let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName]['reportTypeFour'];
                            req.reply((res) => {
                                res.send({ fixture: customMockFile });

                            });
                        }
                    }

                    break;

                    case 'zoneBasics' :
                        if (mockDataQueryFileDict['zoneBasics'] === null) {
                            if (req.body.operationName === 'zoneBasics') {
                                req.reply((res) => {
                                    res.send({ fixture: 'explorermockdata/zoneBasics.json' });

                                });
                            }
                        }
                        else {
                            let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName];
                            req.reply((res) => {
                                //'id' : '2'
                                res.send({ fixture: customMockFile });

                            });

                        }
                        break;

                        case 'dateTimeInfoQuery' :
                        if (mockDataQueryFileDict['dateTimeInfoQuery'] === null) {
                            if (req.body.operationName === 'dateTimeInfoQuery') {
                                req.reply((res) => {
                                    res.send({ fixture: 'explorermockdata/dateTimeInfoQuery.json' });

                                });
                            }
                        }
                        else {
                            let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName];
                            req.reply((res) => {
                                //'id' : '2'
                                res.send({ fixture: customMockFile });

                            });

                        }
                        break;

                        case 'GetTestTypesWithMonitorsForDivision' :
                        if (mockDataQueryFileDict['GetTestTypesWithMonitorsForDivision'] === null) {
                            if (req.body.operationName === 'GetTestTypesWithMonitorsForDivision') {
                                req.reply((res) => {
                                    res.send({ fixture: 'explorermockdata/GetTestTypesWithMonitorsForDivision.json' });

                                });
                            }
                        }
                        else {
                            let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName];
                            req.reply((res) => {
                                //'id' : '2'
                                res.send({ fixture: customMockFile });

                            });

                        }
                        break;

                        case 'InsightsExplorerDimensionSelector' :
                            if (mockDataQueryFileDict['InsightsExplorerDimensionSelector'] === null) {
                                if (req.body.operationName === 'InsightsExplorerDimensionSelector') {
                                    req.reply((res) => {
                                        res.send({ fixture: 'explorermockdata/InsightsExplorerDimensionSelector.json' });
    
                                    });
                                }
                            }
                            else {
                                let customMockFile = 'explorermockdata/' + mockDataQueryFileDict[opName];
                                req.reply((res) => {
                                    //'id' : '2'
                                    res.send({ fixture: customMockFile });
    
                                });
    
                            }
                            break;


                default:
                    req.reply();
            }
        })
    }


    /*
        This function is to mock all the graphQL request with default data
    */
    mockDefaultDataForAllRequestsForExplorer()
    {
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

        const graphQLUrl = Cypress.env('graphQLUrl')
        this.mockDataForExplorerPageLoad(mockDataExplorer, graphQLUrl);       
    }

    mockDataForTestTypeAndMonitorType()
    {
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

        const graphQLUrl = Cypress.env('graphQLUrl')
        this.mockDataForExplorerPageLoad(mockDataExplorer, graphQLUrl); 
    }

    searchTestInSourceSelector(testName: string)
    {
        cy.get(explorerSelctor.searchBoxInSouceBladeExplorer()).eq(1).should('be.visible').type(testName + '{Enter}');
    }

    selectSearchedItemFromSourceBlade()
    {
        cy.get(explorerSelctor.testSelectorAfterSearchSourceBlade()).click();
        cy.get(explorerSelctor.selectButtonInSourceSelector()).click();
    }

    clickOnColumnByDropDown()
    {
        cy.get(explorerSelctor.coloumnByDropDownButton()).click();
    }
}