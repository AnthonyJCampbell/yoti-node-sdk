const RequestedDocumentAuthenticityCheck = require('./requested.document.authenticity.check');

/**
 * @class RequestedDocumentAuthenticityCheckBuilder
 */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["build"] }] */
class RequestedDocumentAuthenticityCheckBuilder {
  build() {
    return new RequestedDocumentAuthenticityCheck();
  }
}

module.exports = RequestedDocumentAuthenticityCheckBuilder;
