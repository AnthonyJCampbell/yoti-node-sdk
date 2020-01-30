const Validation = require('../../../yoti_common/validation');
const NotificationConfig = require('./notification.config');
const SdkConfig = require('./sdk.config');
const RequestedTask = require('./task/requested.task');
const RequestedCheck = require('./check/requested.check');

class SessionSpecification {
  constructor(
    clientSessionTokenTtl,
    resourcesTtl,
    userTrackingId,
    notifications,
    requestedChecks,
    requestedTasks,
    sdkConfig
  ) {
    Validation.isIntegerOrUndefined(clientSessionTokenTtl, 'clientSessionTokenTtl');
    this.clientSessionTokenTtl = clientSessionTokenTtl;

    Validation.isIntegerOrUndefined(resourcesTtl, 'resourcesTtl');
    this.resourcesTtl = resourcesTtl;

    Validation.isStringOrUndefined(userTrackingId, 'userTrackingId');
    this.userTrackingId = userTrackingId;

    if (notifications) {
      Validation.instanceOf(notifications, NotificationConfig, 'notifications');
      this.notifications = notifications;
    }

    if (sdkConfig) {
      Validation.instanceOf(sdkConfig, SdkConfig, 'sdkConfig');
      this.sdkConfig = sdkConfig;
    }

    Validation.isArrayOfType(requestedChecks, RequestedCheck, 'requestedChecks');
    this.requestedChecks = requestedChecks;

    Validation.isArrayOfType(requestedTasks, RequestedTask, 'requestedTasks');
    this.requestedTasks = requestedTasks;
  }

  /**
   * @returns {Object} data for JSON.stringify()
   */
  toJSON() {
    return {
      client_session_token_ttl: this.clientSessionTokenTtl,
      resources_ttl: this.resourcesTtl,
      user_tracking_id: this.userTrackingId,
      notifications: this.notifications,
      requested_checks: this.requestedChecks,
      requested_tasks: this.requestedTasks,
      sdk_config: this.sdkConfig,
    };
  }
}

module.exports = SessionSpecification;
