const Validation = require('../../../../yoti_common/validation');

class RequestedTextExtractionConfig {
  constructor(manualCheck) {
    Validation.isString(manualCheck, 'manualCheck');
    this.manualCheck = manualCheck;
  }

  toJSON() {
    return {
      manual_check: this.manualCheck,
    };
  }
}

module.exports = RequestedTextExtractionConfig;
