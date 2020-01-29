
const RequestedLivenessConfig = require('./requested.liveness.config');
const RequestedLivenessCheck = require('./requested.liveness.check');
const DocScanConstants = require('../../../doc.scan.constants');
const Validation = require('../../../../yoti_common/validation');

class RequestedLivenessCheckBuilder {
  constructor() {
    this.maxRetries = 1;
  }

  forZoomLiveness() {
    return this.forLivenessType(DocScanConstants.ZOOM);
  }

  forLivenessType(livenessType) {
    Validation.isString(livenessType, 'livenessType');
    this.livenessType = livenessType;
    return this;
  }

  withMaxRetries(maxRetries) {
    Validation.isInteger(maxRetries, 'maxRetries');
    this.maxRetries = maxRetries;
    return this;
  }

  build() {
    Validation.notNullOrEmpty(this.livenessType, 'livenessType');

    const config = new RequestedLivenessConfig(this.maxRetries, this.livenessType);
    return new RequestedLivenessCheck(config);
  }
}

module.exports = RequestedLivenessCheckBuilder;
