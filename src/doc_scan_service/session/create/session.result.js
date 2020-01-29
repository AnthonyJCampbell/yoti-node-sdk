const Validation = require('../../../yoti_common/validation');

class SesssionResult {
  constructor(response) {
    Validation.isInteger(response.client_session_token_ttl);
    this.clientSessionTokenTtl = response.client_session_token_ttl;

    Validation.isString(response.client_session_token);
    this.clientSessionToken = response.client_session_token;

    Validation.isString(response.session_id);
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

module.exports = SesssionResult;
