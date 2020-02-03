const Validation = require('../../../yoti_common/validation');

class GeneratedMedia {
  constructor(media) {
    Validation.isString(media.id, 'id');
    this.id = media.id;

    Validation.isString(media.type, 'type');
    this.type = media.type;
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.type;
  }
}

module.exports = GeneratedMedia;
