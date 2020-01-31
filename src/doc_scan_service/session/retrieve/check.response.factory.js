const AuthenticityCheckResponse = require('./authenticity.check.response');
const FaceMatchCheckResponse = require('./face.match.check.response');
const TextDataCheckResponse = require('./text.data.check.response');
const ZoomLivenessCheckResponse = require('./zoom.liveness.check.response');

const ID_DOCUMENT_AUTHENTICITY = 'ID_DOCUMENT_AUTHENTICITY';
const ID_DOCUMENT_TEXT_DATA_CHECK = 'ID_DOCUMENT_TEXT_DATA_CHECK';
const ID_DOCUMENT_FACE_MATCH = 'ID_DOCUMENT_FACE_MATCH';
const LIVENESS = 'LIVENESS';

/**
 * @TODO can this be moved into CheckResponse as private function?
 */
class CheckResponseFactory {
  static createFromResponse(check) {
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
        throw new TypeError(check.type);
    }
  }
}

module.exports = CheckResponseFactory;
