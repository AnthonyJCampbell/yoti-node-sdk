const Validation = require('../../../../yoti_common/validation');

class RequestedTask {
  constructor(type, config) {
    if (new.target === RequestedTask) {
      throw TypeError('RequestedTask cannot be instantiated');
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

module.exports = RequestedTask;
