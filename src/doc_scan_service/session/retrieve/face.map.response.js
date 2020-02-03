const MediaResponse = require('./media.response');

class FaceMapResponse {
  constructor(facemap) {
    this.media = new MediaResponse(facemap.media);
  }

  getMedia() {
    return this.media;
  }
}

module.exports = FaceMapResponse;
