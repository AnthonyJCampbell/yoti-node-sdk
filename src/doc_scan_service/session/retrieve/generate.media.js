const Validation = require('../../../yoti_common/validation');

class GeneratedMedia {
  constructor(response) {
    Validation.isString(response.id, 'id', true);
    this.id = response.id;

    Validation.isString(response.type, 'type', true);
    this.type = response.type;
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.type;
  }
}

module.exports = GeneratedMedia;
