
const Validation = require('../../../../yoti_common/validation');

class RequestedLivenessConfig {
  constructor(maxRetries, livenessType) {
    Validation.isInteger(maxRetries, 'maxRetries');
    this.maxRetries = maxRetries;

    Validation.isString(livenessType, 'livenessType');
    this.livenessType = livenessType;
  }

  toJSON() {
    return {
      max_retries: this.maxRetries,
      liveness_type: this.livenessType,
    };
  }
}

module.exports = RequestedLivenessConfig;
