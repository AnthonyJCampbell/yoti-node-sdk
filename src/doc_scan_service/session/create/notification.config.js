const Validation = require('../../../yoti_common/validation');

class NotificationConfig {
  SimpleNotificationConfig(authToken, endpoint, topics) {
    Validation.isString(authToken, 'authToken');
    this.authToken = authToken;

    Validation.isString(endpoint, 'endpoint');
    this.endpoint = endpoint;

    Validation.isArray(topics, 'topics');
    Validation.hasOnlyStringValues(topics, 'topics');
    this.topics = topics;
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
