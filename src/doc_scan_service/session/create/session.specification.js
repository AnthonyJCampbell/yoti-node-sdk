const Validation = require('../../../yoti_common/validation');
const NotificationConfig = require('./notification.config');
const SdkConfig = require('./sdk.config');

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
    Validation.isInteger(clientSessionTokenTtl, 'clientSessionTokenTtl');
    this.clientSessionTokenTtl = clientSessionTokenTtl;

    Validation.isInteger(resourcesTtl, 'resourcesTtl');
    this.resourcesTtl = resourcesTtl;

    Validation.isString(userTrackingId, 'userTrackingId');
    this.userTrackingId = userTrackingId;

    Validation.instanceOf(notifications, NotificationConfig, 'notifications');
    this.notifications = notifications;

    // @TODO List<RequestedCheck> validation
    this.requestedChecks = requestedChecks;

    // @TODO List<RequestedTask> validation
    this.requestedTasks = requestedTasks;

    Validation.instanceOf(sdkConfig, SdkConfig, 'sdkConfig');
    this.sdkConfig = sdkConfig;
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
