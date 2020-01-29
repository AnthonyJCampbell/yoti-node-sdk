const RequestedFaceMatchConfig = require('./requested.face.match.config');
const RequestedFaceMatchCheck = require('./requested.face.match.check');
const DocScanConstants = require('../../../doc.scan.constants');
const Validation = require('../../../../yoti_common/validation');

class RequestedFaceMatchCheckBuilder {
  withManualCheckAlways() {
    this.manualCheck = DocScanConstants.ALWAYS;
    return this;
  }

  withManualCheckFallback() {
    this.manualCheck = DocScanConstants.FALLBACK;
    return this;
  }

  withManualCheckNever() {
    this.manualCheck = DocScanConstants.NEVER;
    return this;
  }

  build() {
    Validation.notNullOrEmpty(this.manualCheck, 'manualCheck');

    const config = new RequestedFaceMatchConfig(this.manualCheck);
    return new RequestedFaceMatchCheck(config);
  }
}

module.exports = RequestedFaceMatchCheckBuilder;
