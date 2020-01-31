const LivenessResourceResponse = require('./liveness.resource.response');
const FrameResponse = require('./frame.response');
const DocScanConstants = require('../../doc.scan.constants');

class ZoomLivenessResourceResponse extends LivenessResourceResponse {
  constructor(resource) {
    super(DocScanConstants.ZOOM, resource);

    /** @TODO FaceMapResponse */
    this.faceMap = resource.facemap;

    this.frames = resource.frames.map(frame => new FrameResponse(frame));
  }

  getFaceMap() {
    return this.faceMap;
  }

  getFrames() {
    return this.frames;
  }
}

module.exports = ZoomLivenessResourceResponse;
