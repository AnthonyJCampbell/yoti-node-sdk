class ResourceContainer {
  constructor(response) {
    /** @TODO DocumentResourceResponse[] */
    this.idDocuments = response.id_documents;

    /** @TODO LivenessResourceResponse[] */
    this.livenessCapture = response.liveness_capture;

    /** @TODO - should this be here? */
    // CheckResponse[]
    this.checks = response.checks;
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

  /**
   * @TODO should this be here?
   */
  getChecks() {
    return this.checks;
  }
}

module.exports = ResourceContainer;
