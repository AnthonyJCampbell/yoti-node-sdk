const MediaResponse = require('./media.response');

class FrameResponse {
  constructor(frame) {
    this.media = new MediaResponse(frame.media);
  }

  getMedia() {
    return this.media;
  }
}

module.exports = FrameResponse;
