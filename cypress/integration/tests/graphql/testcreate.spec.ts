describe('API Testing', () => {
    
    it('GraphqlPOST - create', () => {
      var name = 'all types of testsss2'
      //cy.productUpdate(name);
      const mutation ='mutation ProductUpdate($product: ProductUpdateInputType!) {\n  productUpdate(product: $product) {\n    ...ProductDetail\n    __typename\n  }\n}\n\nfragment ProductDetail on ProductType {\n  id\n  name\n  statusType\n  advancedSettings {\n    appliedTestFlags\n    additionalMonitor\n    matchSelfZoneBy\n    matchSelfZoneCriteria\n    maxStepRuntimeSecOverride\n    testBandwidthThrottling\n    viewportHeight\n    viewportWidth\n    waitForNoActivity\n    ednsSubnet\n    clientId\n    filmstripFrequency\n    failureHopCount\n    pingCount\n    __typename\n  }\n  requestSettings {\n    authentication {\n      authenticationMethodType\n      userName\n      passwordStatus\n      __typename\n    }\n    certificate {\n      name\n      passwordStatus\n      __typename\n    }\n    httpHeaderRequests {\n      id\n      childHostPattern\n      headerName\n      requestHeaderType\n      requestValue\n      __typename\n    }\n    __typename\n  }\n  scheduleSettings {\n    networkType\n    frequency\n    maintenanceScheduleId\n    runScheduleId\n    roundRobinAmount\n    testNodeDistribution\n    associatedNodes {\n      id\n      name\n      isPaused\n      status\n      networkType\n      __typename\n    }\n    associatedNodeGroups {\n      id\n      name\n      syntheticNetworkType\n      nodesCount\n      __typename\n    }\n    __typename\n  }\n  insights {\n    indicators {\n      id\n      name\n      __typename\n    }\n    tracepoints {\n      id\n      name\n      __typename\n    }\n    __typename\n  }\n  alerts {\n    ...SyntheticAlertGroup\n    __typename\n  }\n  testDataWebhookId\n  __typename\n}\n\nfragment SyntheticAlertGroup on SyntheticAlertGroupType {\n  id\n  alertGroupItems {\n    id\n    alertSubType\n    alertType\n    enforceTestFailure\n    matchAllRecords\n    nodeThreshold {\n      consecutiveRuns\n      consecutiveRunsEnabled\n      nodeThresholdType\n      numberOfFailingUnits\n      numberOfUnits\n      percentageOfUnits\n      utilizePerNodeHistoricalAverage\n      __typename\n    }\n    notificationType\n    notificationGroup {\n      ...AlertNotificationGroup\n      __typename\n    }\n    omitScatterplot\n    syntheticMetric\n    instruction {\n      name\n      instructions\n      id\n      instructionType\n      __typename\n    }\n    trigger {\n      criticalReminderFrequency\n      criticalTrigger\n      customDataId\n      dnsRecordType\n      dnsResolvedName\n      dnsTTL\n      expression\n      fileHash\n      fileName\n      filterItems {\n        filterValues\n        status\n        tracepointId\n        __typename\n      }\n      filterType\n      filterValue\n      historicalInterval\n      operationType\n      statisticalType\n      thresholdInterval\n      triggerType\n      useIntervalRollingWindow\n      warningReminderFrequency\n      warningTrigger\n      __typename\n    }\n    __typename\n  }\n  id\n  notificationGroup {\n    ...AlertNotificationGroup\n    __typename\n  }\n  __typename\n}\n\nfragment AlertNotificationGroup on NotificationGroupType {\n  alertWebhooks {\n    id\n    name\n    url\n    __typename\n  }\n  id\n  notifyOnCritical\n  notifyOnImproved\n  notifyOnWarning\n  recipients {\n    firstName\n    email\n    id\n    lastName\n    recipientType\n    __typename\n  }\n  subject\n  __typename\n}\n'
       var  variables = '{"product":{"scheduleSettings":{"frequency":7,"testNodeDistribution":0,"nodeGroups":[],"nodes":[2,3],"networkType":0},"advancedSettings":{"matchSelfZoneBy":0},"requestSettings":{"httpHeaderRequests":[],"authentication":{"authenticationMethodType":0,"passwordStatus":0}},"status":0,"name":"All type of testss","id":10,"alertGroup":{"id":0,"notificationGroup":{"id":0,"notifyOnCritical":true,"notifyOnWarning":true,"notifyOnImproved":true,"subject":"${NotificationLevel}:  test=#${TestId} - ${TestName}, alert=${AlertType}","recipients":[]},"alertGroupItems":[]}}}'
       var variableObj = JSON.parse(variables);
       variableObj['product']['name']= name
       cy.log(name)
       cy.log(variableObj['product']['name'])
       debugger;
       cy.request({
          url: 'https://portalstage.catchpoint.com/m/g',
          method: 'POST',
          body: {
            query: mutation,
            variables: variableObj
          },
          failOnStatusCode:true,
          headers: {
            Authorization: 'Bearer U8OHyiEU5Yt4FySikEZGvOoCvtEtkG5lp4QlJG5VI8y0RSE4Y0kMeCuQu3Kf/GTaos26iZ7fKw2ZRN16GnHtmE3nfiyeczk+XKW9vqGLEq5J/EDFU4d0ddDKAb94sSv3PFXiWSGnFMtca5WUR769AaJ6jsi9F7TrKo9ncU1Ua+k=',
          },
        }).then((res) => {
          expect(res.status).to.eq(200)
          expect(res.body).to.have.property('data');
          cy.log(res.body['data']['productUpdate']['name'])
          expect(res.body['data']['productUpdate']['name']).to.eq(variableObj['product']['name'])
         
          
      })
                   
        
     })

    

})



