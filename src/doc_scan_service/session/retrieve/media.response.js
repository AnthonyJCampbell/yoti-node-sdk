const Validation = require('../../../yoti_common/validation');

class MediaResponse {
  constructor(media) {
    Validation.isString(media.id, 'id', true);
    this.id = media.id;

    Validation.isString(media.type, 'type', true);
    this.type = media.type;

    Validation.isString(media.created, 'created', true);
    this.created = media.created;

    Validation.isString(media.lastUpdated, 'lastUpdated', true);
    this.lastUpdated = media.lastUpdated;
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.type;
  }

  getCreated() {
    return this.created;
  }

  getLastUpdated() {
    return this.lastUpdated;
  }
}

module.exports = MediaResponse;
