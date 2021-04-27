// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


/* Cypress.on('window:before:load', function (window) {
  const original = window.EventTarget.prototype.addEventListener

  window.EventTarget.prototype.addEventListener = function () {
    if (arguments && arguments[0] === 'beforeunload') {
      return
    }
    return original.apply(this, arguments)
  }

  Object.defineProperty(window, 'onbeforeunload', {
    get: function () { },
    set: function () { }
  })
}) */

const GRAPHQL_URL = '/graphql';

Cypress.Commands.add('mockGraphQLServer', () => {
  // defined in this file. see next section of this blog post.
  resetGraphQLMock();
  cy.on('window:before:load', win => {
    const originalFunction = win.fetch;
    function fetch(path, request) {
      if (path.includes(GRAPHQL_URL) && request.method === 'POST') {
        // defined in this file. see next section of this blog post.
        return processGraphQLResponse(request.body);
      }
      return originalFunction.apply(this, arguments);
    }
    cy.stub(win, 'fetch', fetch).as('graphqlStub');
  });
});


const GLOBAL_LOOKUP = '*';

// <String, Number>
let gqlRequestMap = {};

// <String, Map<Number, JSON>>
let gqlResponseMap = {};

const resetGraphQLMock = () => {
  gqlRequestMap = {};
  gqlResponseMap = {};
};
/* function resetGraphQLMock() {

} */

resetGraphQLMock();
const initializeRequestMap = (requestKey) => {
  if (gqlRequestMap[requestKey] === undefined) {
    gqlRequestMap[requestKey] = 0;
  }
}

const responseMapHasKey = (request, count) =>
  !gqlResponseMap[request] !== undefined &&
  gqlResponseMap[request][count] !== undefined;

const getResponse = (request, count) => {
  gqlRequestMap[request] += 1;
  const result = gqlResponseMap[request][count];
  return getResponseStub(result);
};

const getResponseStub = (result) => {
  return Promise.resolve({
    json() {
      return Promise.resolve(result);
    },
    text() {
      return Promise.resolve(JSON.stringify(result));
    },
    ok: true
  });
};

const getRequest = (requestJSON) => {
  const request = JSON.stringify(requestJSON);
  initializeRequestMap(request);
  const counter = gqlRequestMap[request];
  return { request, counter };
}

const processGraphQLResponse = (requestBody) => {
  // `body` also contains `query` and we need to remove it
  const { operationName, variables } = JSON.parse(requestBody);
  // Return the most specific response we can find
  const {
    request: specificRequest,
    counter: specificCounter
  } = getRequest({ operationName, variables });
  if (responseMapHasKey(specificRequest, specificCounter)) {
    return getResponse(specificRequest, specificCounter);
  }
  if (responseMapHasKey(specificRequest, GLOBAL_LOOKUP)) {
    return getResponse(specificRequest, GLOBAL_LOOKUP);
  }
  // Return a common response to all requests if it exists
  const {
    request: genericRequest,
    counter: genericCounter
  } = getRequest({ operationName });
  if (responseMapHasKey(genericRequest, genericCounter)) {
    return getResponse(genericRequest, genericCounter);
  }
  if (responseMapHasKey(genericRequest, GLOBAL_LOOKUP)) {
    return getResponse(genericRequest, GLOBAL_LOOKUP);
  }
  console.log(
    'Not found counter/operation/variables: ',
    specificCounter,
    operationName,
    variables
  );
  return getResponseStub({});
};


Cypress.Commands.add(
  'addGraphQLServerResponse',
  (requestDetailsInput, responseBody, allRequests = false) => {
    let requestDetails;
    if (typeof requestDetailsInput === 'string') {
      requestDetails = JSON.stringify({
        operationName: requestDetailsInput
      });
    } else {
      requestDetails = JSON.stringify(requestDetailsInput);
    }
    if (allRequests) {
      if (gqlResponseMap[requestDetails] === undefined) {
        gqlResponseMap[requestDetails] = [];
      }
      gqlResponseMap[requestDetails][GLOBAL_LOOKUP] = responseBody;
    } else if (gqlResponseMap[requestDetails] === undefined) {
      gqlResponseMap[requestDetails] = [];
      gqlResponseMap[requestDetails][0] = responseBody;
    } else {
      const array = gqlResponseMap[requestDetails];
      gqlResponseMap[requestDetails][array.length] = responseBody;
    }
  }
);


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // debugger;
  return false
})