const Validation = require('../../../yoti_common/validation');

class SessionResult {
  constructor(response) {
    Validation.isInteger(response.client_session_token_ttl, 'client_session_token_ttl', true);
    this.clientSessionTokenTtl = response.client_session_token_ttl;

    Validation.isString(response.client_session_token, 'client_session_token', true);
    this.clientSessionToken = response.client_session_token;

    Validation.isString(response.session_id, 'session_id', true);
    this.sessionId = response.session_id;
  }

  getClientSessionTokenTtl() {
    return this.clientSessionTokenTtl;
  }

  getClientSessionToken() {
    return this.clientSessionToken;
  }

  getSessionId() {
    return this.sessionId;
  }
}

module.exports = SessionResult;
