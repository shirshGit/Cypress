import Login from '../../pageobjects/loginpage';

const mockData = [
    {
        "userIdentity": {
            "id": 572,
            "name": "sgiri@catchpoint.com",
            "userTimeZone": 4,
            "activeContact": {
                "id": 13599,
                "name": "Test SGiri",
                "email": "sgiri@catchpoint.com",
                "testAccessRestrictType": 0,
                "waterfallOpensInNewTab": false,
                "timeZone": null,
                "language": null,
                "smsEmail": null,
                "notificationFlags": [
                    1,
                    2
                ],
                "dashboardId": 15176,
                "smartboardId": null,
                "dashboardType": 1,
                "isLockedToDashboard": false,
                "__typename": "ContactType"
            },
            "levelSummary": {
                "defaultDivisionId": 24,
                "levelId": 12,
                "clientFeatures": [
                    2,
                    1,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    32,
                    33,
                    34,
                    36,
                    37,
                    39,
                    40,
                    42,
                    43,
                    44,
                    45,
                    46,
                    47,
                    48,
                    49,
                    50,
                    52,
                    55,
                    56,
                    57,
                    58,
                    59,
                    62
                ],
                "levelType": 17,
                "levelName": "QA Client For Test Automation",
                "allowedDisplayTestTypes": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    20
                ],
                "maxTracepoints": 10,
                "maxIndicators": 10,
                "parentLevelId": null,
                "parentLevelName": null,
                "parentLevelType": null,
                "__typename": "LevelSummaryType"
            },
            "userRole": {
                "id": 3,
                "permissions": [
                    {
                        "type": "19",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "20",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "1",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "2",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "3",
                        "activePermissions": [
                            1,
                            2,
                            3,
                            4
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "18",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "7",
                        "activePermissions": [
                            1,
                            2,
                            3,
                            6,
                            7
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "38",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "24",
                        "activePermissions": [
                            1,
                            11
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "25",
                        "activePermissions": [
                            1,
                            11
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "17",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "21",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "13",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "34",
                        "activePermissions": [
                            1,
                            2
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "31",
                        "activePermissions": [
                            1,
                            2
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "22",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "32",
                        "activePermissions": [
                            1,
                            2
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "16",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "15",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "4",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "14",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "30",
                        "activePermissions": [
                            1,
                            2
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "33",
                        "activePermissions": [
                            1,
                            2
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "37",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "5",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "6",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "27",
                        "activePermissions": [
                            1,
                            2,
                            3
                        ],
                        "__typename": "PermissionType"
                    },
                    {
                        "type": "28",
                        "activePermissions": [
                            1
                        ],
                        "__typename": "PermissionType"
                    }
                ],
                "__typename": "UserRoleSummaryType"
            },
            "isDrillingDown": false,
            "isLockedToDashboard": false,
            "__typename": "UserType"
        }
    }
]

describe('API Testing', () => {
    const login = new Login();
    it('GraphqlPOST - create', () => {


        cy.intercept('POST', 'https://localhost:44302/graphql', (req) => {
            //req.headers['Authorization'] = 'Bearer 6I4f1ji+5kI/waqH/rsPfzWcul4CMmz9cCTeGjSpSKw+xniIqBysonrwWO74edDKxpPLRqwtSyI8edA1u2txpfOMFfyEwUALEYLjq+jQ9B9YRplJK6VRNhARWsnGVGl/sq5TbMp1mITmYGPbrL1T0DPIPwm0hRDA4rFIReYBQ7QWtb2kKAvaDq3eQUcbPMPCwRoJ0KIJe8AbfwgcBFMwUCQW6XqvlHg5fLYT0JhUi500aA9GEe0iNg==';
            console.log('req body' + req.body);
            //debugger;
         //   console.log('req ' + JSON.parse(req));
            //cy.log('req body' + req);
          //  const g = JSON.parse(req.body);
         //   console.log('g' + g);
            if (req.body.operationName === 'GetUserIdentity') {
                debugger;
                req.reply((res) => {
                    //'id' : '2'
                    res.send({fixture : 'mockData.json'});

                });
            }

            else if (req.body.operationName === 'AlertData') {
                debugger;
                req.reply((res) => {
                    //'id' : '2'
                    res.send({fixture : 'alertData.json'});

                });
            }
            else if (req.body.operationName === 'GetContactsForCurrentUser') {
                debugger;
                req.reply((res) => {
                    //'id' : '2'
                    res.send({fixture : 'getContactsForCurrentUser.json'});

                });
            }
            else if (req.body.operationName === 'IntrospectionQuery') {
                debugger;
                req.reply((res) => {
                    //'id' : '2'
                    res.send({fixture : 'IntrospectionQuery.json'});

                });
            }
            else if (req.body.operationName === 'getEventsdata') {
                debugger;
                req.reply((res) => {
                    //'id' : '2'
                    res.send({fixture : 'EventsData.json'});

                });
            }
            else if (req.body.operationName === 'NodePerformanceOverviewQuery') {
                debugger;
                req.reply((res) => {
                    //'id' : '2'
                    res.send({fixture : 'NodePerformanceOverviewQuery.json'});

                });
            }
            else if (req.body.operationName === 'TestPerformanceData') {
                debugger;
                req.reply((res) => {
                    //'id' : '2'
                    res.send({fixture : 'TestPerformanceData.json'});

                });
            }
            else if (req.body.operationName === 'syntheticAnalyticsData') {
                debugger;
                req.reply((res) => {
                    //'id' : '2'
                    res.send({fixture : 'syntheticAnalyticsData.json'});

                });
            }
            else
            {
                //debugger;
                req.reply();
            }
        });

        cy.visit('https://localhost:44302/Preview/Dashboard');
        // login.email().type('qaautomationxclient-clientadministrator@catchpoint.com');
        // login.password().type('Password123!');
        // login.signInButton().should('be.visible').click();
    })


    // it('Test', () => {
        
    // })

})