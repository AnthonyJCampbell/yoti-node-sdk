
const RequestedCheck = require('./requested.liveness.config');
const RequestedLivenessConfig = require('./requested.liveness.config');
const DocScanConstants = require('../../../doc.scan.constants');
const Validation = require('../../../../yoti_common/validation');

class RequestedLivenessCheck extends RequestedCheck {
  constructor(config) {
    Validation.instanceOf(config, RequestedLivenessConfig, 'config');
    super(DocScanConstants.LIVENESS, config);
  }
}

module.exports = RequestedLivenessCheck;
