const SessionSpecification = require('../doc_scan_service/session/create/session.specification');
const SessionResult = require('../doc_scan_service/session/create/session.result');
const { RequestBuilder } = require('../request/request.builder');
const { Payload } = require('../request/payload');
const Validation = require('../yoti_common/validation');
const config = require('../../config');

class DocScanService {
  constructor(applicationId, pem) {
    this.applicationId = applicationId;
    this.pem = pem;
  }

  createSession(sessionSpecification) {
    Validation.instanceOf(sessionSpecification, SessionSpecification, 'sessionSpecification');

    const request = new RequestBuilder()
      .withPemString(this.pem)
      .withBaseUrl(config.yoti.docScanApi)
      .withEndpoint('/sessions')
      .withQueryParam('sdkId', this.applicationId)
      .withPost()
      .withPayload(new Payload(sessionSpecification))
      .withHeader('Content-Type', 'application/json')
      .build();

    return new Promise((resolve, reject) => {
      request.execute()
        .then((response) => {
          try {
            const parsedResponse = response.getParsedResponse();
            return resolve(new SessionResult(parsedResponse));
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

module.exports = DocScanService;
