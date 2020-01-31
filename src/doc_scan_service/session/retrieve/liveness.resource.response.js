const ResourceResponse = require('./resource.response');

/**
 * @TODO this should be abstract
 */
class LivenessResourceResponse extends ResourceResponse {
  constructor(livenessType, resource) {
    super(resource);
    this.livenessType = livenessType;
  }

  getLivenessType() {
    return this.livenessType;
  }
}

module.exports = LivenessResourceResponse;
