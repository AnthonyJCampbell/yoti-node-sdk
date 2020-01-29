
const RequestedCheck = require('./requested.check');
const RequestedFaceMatchCheckConfig = require('./requested.face.match.config');
const DocScanConstants = require('../../../doc.scan.constants');
const Validation = require('../../../../yoti_common/validation');

class RequestedFaceMatchCheck extends RequestedCheck {
  constructor(config) {
    Validation.instanceOf(config, RequestedFaceMatchCheckConfig, 'config');
    super(DocScanConstants.ID_DOCUMENT_FACE_MATCH, config);
  }
}

module.exports = RequestedFaceMatchCheck;
