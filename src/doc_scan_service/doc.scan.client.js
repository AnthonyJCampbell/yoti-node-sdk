const { RequestBuilder } = require('../request/request.builder');
const { Payload } = require('../request/payload');
const SessionSpecification = require('./session/create/session.specification');
const Validation = require('../yoti_common/validation');
const config = require('../../config');

class DocScanClient {
  constructor(applicationId, pem) {
    this.applicationId = applicationId;
    this.pem = pem;
  }

  createSession(sessionSpecification) {
    Validation.instanceOf(sessionSpecification, SessionSpecification, 'sessionSpecification');

    const request = new RequestBuilder()
      .withPemString(this.pem)
      .withBaseUrl(config.yoti.docScanApi)
      .withEndpoint(`/sessions?sdkId=${this.applicationId}`)
      .withPost()
      .withPayload(new Payload(sessionSpecification))
      .withHeader('Content-Type', 'application/json')
      .build();

    return new Promise((resolve, reject) => {
      request.execute()
        .then((response) => {
          try {
            const parsedResponse = response.getParsedResponse();
            return resolve(parsedResponse);
          } catch (err) {
            console.log(`Error getting response data: ${err}`);
            return reject(err);
          }
        })
        .catch((err) => {
          console.log(`Error retrieving requested data: ${err}`);
          return reject(err);
        });
    });
  }
}

module.exports = DocScanClient;
