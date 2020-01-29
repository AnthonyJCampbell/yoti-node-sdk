const RequestedTextExtractionConfig = require('./requested.text.extraction.config');
const RequestedTextExtractionTask = require('./requested.text.extraction.task');
const DocScanConstants = require('../../../doc.scan.constants');
const Validation = require('../../../../yoti_common/validation');

class RequestedTextExtractionTaskBuilder {
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

    const config = new RequestedTextExtractionConfig(this.manualCheck);
    return new RequestedTextExtractionTask(config);
  }
}

module.exports = RequestedTextExtractionTaskBuilder;
