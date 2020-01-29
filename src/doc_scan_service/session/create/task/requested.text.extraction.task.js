const RequestedTask = require('./requested.task');
const RequestedTextExtractionConfig = require('./requested.text.extraction.config');
const DocScanConstants = require('../../../doc.scan.constants');
const Validation = require('../../../../yoti_common/validation');

class RequestedTextExtractionTask extends RequestedTask {
  constructor(config) {
    Validation.instanceOf(config, RequestedTextExtractionConfig, 'config');
    super(DocScanConstants.ID_DOCUMENT_FACE_MATCH, config);
  }
}

module.exports = RequestedTextExtractionTask;
