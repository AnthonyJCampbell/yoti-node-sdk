const { DocScanService } = require('../doc_scan_service');

class DocScanClient {
  constructor(applicationId, pem) {
    this.docScanService = new DocScanService(applicationId, pem);
  }

  createSession(sessionSpecification) {
    return this.docScanService.createSession(sessionSpecification);
  }
}

module.exports = DocScanClient;
