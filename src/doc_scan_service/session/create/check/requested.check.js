
const Validation = require('../../../../yoti_common/validation');

class RequestedCheck {
  constructor(type, config) {
    if (new.target === RequestedCheck) {
      throw TypeError('RequestedCheck cannot be instantiated');
    }

    Validation.isString(type, 'type');
    this.type = type;

    this.config = config;
  }

  toJSON() {
    return {
      type: this.type,
      config: this.config,
    };
  }
}

module.exports = RequestedCheck;
