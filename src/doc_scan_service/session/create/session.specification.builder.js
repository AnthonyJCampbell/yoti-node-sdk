const SessionSpecification = require('./session.specification');
const NotificationConfig = require('./notification.config');
const RequestedTask = require('./task/requested.task');
const RequestedCheck = require('./check/requested.check');
const SdkConfig = require('./sdk.config');
const Validation = require('../../../yoti_common/validation');

class SessionSpecificationBuilder {
  constructor() {
    this.requestedChecks = [];
    this.requestedTasks = [];
  }

  withClientSessionTokenTtl(clientSessionTokenTtl) {
    Validation.isInteger(clientSessionTokenTtl, 'clientSessionTokenTtl');
    this.clientSessionTokenTtl = clientSessionTokenTtl;
    return this;
  }

  withResourcesTtl(resourcesTtl) {
    Validation.isInteger(resourcesTtl, 'resourcesTtl');
    this.resourcesTtl = resourcesTtl;
    return this;
  }

  withUserTrackingId(userTrackingId) {
    Validation.isString(userTrackingId, 'userTrackingId');
    this.userTrackingId = userTrackingId;
    return this;
  }

  withNotifications(notifications) {
    Validation.instanceOf(notifications, NotificationConfig, 'notifications');
    this.notifications = notifications;
    return this;
  }

  withRequestedCheck(requestedCheck) {
    Validation.instanceOf(requestedCheck, RequestedCheck, 'requestedCheck');
    this.requestedChecks.push(requestedCheck);
    return this;
  }

  withRequestedTask(requestedTask) {
    Validation.instanceOf(requestedTask, RequestedTask, 'requestedTask');
    this.requestedTasks.push(requestedTask);
    return this;
  }

  withSdkConfig(sdkConfig) {
    Validation.instanceOf(sdkConfig, SdkConfig, 'sdkConfig');
    this.sdkConfig = sdkConfig;
    return this;
  }

  build() {
    return new SessionSpecification(
      this.clientSessionTokenTtl,
      this.resourcesTtl,
      this.userTrackingId,
      this.notifications,
      this.requestedChecks,
      this.requestedTasks,
      this.sdkConfig
    );
  }
}

module.exports = SessionSpecificationBuilder;