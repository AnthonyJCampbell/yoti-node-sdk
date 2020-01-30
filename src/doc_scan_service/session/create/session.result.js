const Validation = require('../../../yoti_common/validation');

class SessionResult {
  constructor(response) {
    Validation.isIntegerOrUndefined(response.client_session_token_ttl);
    this.clientSessionTokenTtl = response.client_session_token_ttl;

    Validation.isStringOrUndefined(response.client_session_token);
    this.clientSessionToken = response.client_session_token;

    Validation.isStringOrUndefined(response.session_id);
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
