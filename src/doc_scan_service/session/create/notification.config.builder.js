const NotificationConfig = require('./notification.config');
const Validation = require('../../../yoti_common/validation');
const DocScanConstants = require('../../doc.scan.constants');

class NotificationConfigBuilder {
  constructor() {
    this.topics = [];
  }

  withAuthToken(authToken) {
    Validation.isString(authToken, 'authToken');
    this.authToken = authToken;
    return this;
  }

  withEndpoint(endpoint) {
    Validation.isString(endpoint, 'endpoint');
    this.endpoint = endpoint;
    return this;
  }

  forResourceUpdate() {
    return this.withTopic(DocScanConstants.RESOURCE_UPDATE);
  }

  forTaskCompletion() {
    return this.withTopic(DocScanConstants.TASK_COMPLETION);
  }

  forCheckCompletion() {
    return this.withTopic(DocScanConstants.CHECK_COMPLETION);
  }

  forSessionCompletion() {
    return this.withTopic(DocScanConstants.SESSION_COMPLETION);
  }

  withTopic(topicName) {
    Validation.isString(topicName, 'topicName');
    this.topics.push(topicName);
    return this;
  }

  build() {
    return new NotificationConfig(
      this.authToken,
      this.endpoint,
      this.topics
    );
  }
}

module.exports = NotificationConfigBuilder;
