export default class syntheticExplorerHelper {

    mockDataForExplorerPageLoad(mockDataQueryFileDict: object) {

        cy.intercept('POST', 'https://localhost:44302/graphql', (req) => {
            let opName = req.body.operationName;
            switch (opName) {
                case 'GetUserIdentity':
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


                default:
                    req.reply();
            }
        })
    }
}