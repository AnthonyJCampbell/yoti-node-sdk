const Validation = require('../../../yoti_common/validation');

class NotificationConfig {
  constructor(authToken, endpoint, topics) {
    Validation.isString(authToken, 'authToken', true);
    this.authToken = authToken;

    Validation.isString(endpoint, 'endpoint', true);
    this.endpoint = endpoint;

    if (topics) {
      Validation.isArray(topics, 'topics');
      Validation.hasOnlyStringValues(topics, 'topics');
      this.topics = topics;
    }
  }

  toJSON() {
    return {
      auth_token: this.authToken,
      endpoint: this.endpoint,
      topics: this.topics,
    };
  }
}

module.exports = NotificationConfig;
