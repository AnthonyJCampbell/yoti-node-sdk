const DocumentResourceResponse = require('./document.resource.response');
const ZoomLivenessResourceResponse = require('./zoom.liveness.resource.response');
const DocScanConstants = require('../../doc.scan.constants');
const Validation = require('../../../yoti_common/validation');

class ResourceContainer {
  constructor(resources) {
    if (resources.id_documents) {
      Validation.isArray(resources.id_documents, 'id_documents');
      this.idDocuments = resources
        .id_documents
        .map(resource => new DocumentResourceResponse(resource));
    }

    if (resources.liveness_capture) {
      Validation.isArray(resources.liveness_capture, 'liveness_capture');
      this.livenessCapture = resources
        .liveness_capture
        .map((resource) => {
          switch (resource.type) {
            case DocScanConstants.ZOOM:
              return new ZoomLivenessResourceResponse(resource);
            default:
              return null;
          }
        })
        .filter(resource => resource !== null);
    }
  }

  /**
   * Returns ID documents that were uploaded for checking
   * by the user
   *
   * @return the list of documents
   */
  getIdDocuments() {
    return this.idDocuments;
  }

  /**
   * Returns associated information of liveness capture
   * if this task was specified during session creation.
   *
   * @return the list of liveness resources
   */
  getLivenessCapture() {
    return this.livenessCapture;
  }
}

module.exports = ResourceContainer;