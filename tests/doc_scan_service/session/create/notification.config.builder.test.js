const {
  NotificationConfigBuilder,
} = require('../../../../src/doc_scan_service');

describe('NotificationConfigBuilder', () => {
  it('should build NotificationConfig', () => {
    const notificationConfig = new NotificationConfigBuilder()
      .withEndpoint('some-endpoint')
      .withAuthToken('some-auth-token')
      .withTopic('some-topic')
      .withTopic('some-other-topic')
      .build();

    const expectedJson = JSON.stringify({
      auth_token: 'some-auth-token',
      endpoint: 'some-endpoint',
      topics: [
        'some-topic',
        'some-other-topic',
      ],
    });

    expect(JSON.stringify(notificationConfig)).toBe(expectedJson);
  });
});
