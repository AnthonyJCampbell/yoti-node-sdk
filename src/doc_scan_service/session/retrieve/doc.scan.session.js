const Validation = require('../../../yoti_common/validation');
const CheckResponse = require('./check.response');
const CheckResponseFactory = require('./check.response.factory');
const ResourceContainer = require('./resource.container');

class DocScanSession {
  constructor(response) {
    Validation.isInteger(response.client_session_token_ttl, 'client_session_token_ttl', true);
    this.clientSessionTokenTtl = response.client_session_token_ttl;

    Validation.isString(response.session_id, 'session_id', true);
    this.sessionId = response.session_id;

    Validation.isString(response.user_tracking_id, 'user_tracking_id', true);
    this.userTrackingId = response.user_tracking_id;

    Validation.isString(response.state, 'state', true);
    this.state = response.state;

    Validation.isString(response.client_session_token, 'client_session_token', true);
    this.clientSessionToken = response.client_session_token;

    if (response.checks) {
      Validation.isArray(response.checks, 'checks');
      this.checks = response
        .checks
        .map((check) => {
          try {
            return CheckResponseFactory.createFromResponse(check);
          } catch (e) {
            console.log(e.message());
            return null;
          }
        })
        .filter(check => check instanceof CheckResponse);
    }

    this.resources = new ResourceContainer(response.resources);
  }

  getSessionId() {
    return this.sessionId;
  }

  getClientSessionTokenTtl() {
    return this.clientSessionTokenTtl;
  }

  getState() {
    return this.state;
  }

  getClientSessionToken() {
    return this.clientSessionToken;
  }

  getChecks() {
    return this.checks;
  }

  getResources() {
    return this.resources;
  }

  getUserTrackingId() {
    return this.userTrackingId;
  }
}

module.exports = DocScanSession;
