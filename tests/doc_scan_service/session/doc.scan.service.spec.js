const fs = require('fs');
const nock = require('nock');
const uuid = require('uuid');

const config = require('../../../config');

const {
  SessionSpecificationBuilder,
  DocScanService,
} = require('../../../src/doc_scan_service');

const SessionResult = require('../../../src/doc_scan_service/session/create/session.result');

const PEM_STRING = fs.readFileSync('./tests/sample-data/keys/node-sdk-test.pem', 'utf8');
const APP_ID = uuid();

describe('DocScanService', () => {
  describe('when a valid response is returned', () => {
    const sessionSpec = new SessionSpecificationBuilder().build();

    it('should return a session response', (done) => {
      nock(config.yoti.docScanApi)
        .post(
          new RegExp(`^/idverify/v1/sessions\\?sdkId=${APP_ID}`),
          JSON.stringify(sessionSpec)
        )
        .reply(200, JSON.stringify({
          client_session_token_ttl: 30,
          client_session_token: 'some-token',
          session_id: 'some-id',
        }));

      const docScanService = new DocScanService(APP_ID, PEM_STRING);
      docScanService
        .createSession(sessionSpec)
        .then((result) => {
          expect(result).toBeInstanceOf(SessionResult);
          expect(result.getClientSessionTokenTtl()).toBe(30);
          expect(result.getClientSessionToken()).toBe('some-token');
          expect(result.getSessionId()).toBe('some-id');
          done();
        })
        .catch(done);
    });
  });
});
