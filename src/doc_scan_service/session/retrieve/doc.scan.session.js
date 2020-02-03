const Validation = require('../../../yoti_common/validation');
const ResourceContainer = require('./resource.container');
const AuthenticityCheckResponse = require('./authenticity.check.response');
const FaceMatchCheckResponse = require('./face.match.check.response');
const TextDataCheckResponse = require('./text.data.check.response');
const ZoomLivenessCheckResponse = require('./zoom.liveness.check.response');

const ID_DOCUMENT_AUTHENTICITY = 'ID_DOCUMENT_AUTHENTICITY';
const ID_DOCUMENT_TEXT_DATA_CHECK = 'ID_DOCUMENT_TEXT_DATA_CHECK';
const ID_DOCUMENT_FACE_MATCH = 'ID_DOCUMENT_FACE_MATCH';
const LIVENESS = 'LIVENESS';

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
          switch (check.type) {
            case ID_DOCUMENT_AUTHENTICITY:
              return new AuthenticityCheckResponse(check);
            case ID_DOCUMENT_TEXT_DATA_CHECK:
              return new FaceMatchCheckResponse(check);
            case ID_DOCUMENT_FACE_MATCH:
              return new TextDataCheckResponse(check);
            case LIVENESS:
              return new ZoomLivenessCheckResponse(check);
            default:
              console.log(`${this.constructor.name}: Unknown check type ${check.type}`);
              return null;
          }
        })
        .filter(check => check !== null);
    }

    if (response.resources) {
      Validation.instanceOf(response.resources, Object);
      this.resources = new ResourceContainer(response.resources);
    }
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