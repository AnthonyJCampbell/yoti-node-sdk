const {
  SessionSpecificationBuilder,
  RequestedTextExtractionTaskBuilder,
  RequestedLivenessCheckBuilder,
  RequestedFaceMatchCheckBuilder,
  RequestedDocumentAuthenticityCheckBuilder,
  NotificationConfigBuilder,
  SdkConfigBuilder,
} = require('../../../../src/doc_scan_service');

describe('SessionSpecificationBuilder', () => {
  it('should build SessionSpecification', () => {
    const sdkConfigBuilder = new SdkConfigBuilder()
      .withAllowsCamera()
      .withPrimaryColour('some-colour')
      .withSecondaryColour('some-secondary-colour')
      .withFontColour('some-font-colour')
      .withErrorUrl('some-error-url')
      .withSuccessUrl('some-success-url')
      .withLocale('some-url')
      .withPresetIssuingCountry('some-country')
      .build();

    const notificationConfig = new NotificationConfigBuilder()
      .withEndpoint('some-endpoint')
      .withAuthToken('some-auth-token')
      .withTopic('some-topic')
      .build();

    const textExtractionTask = new RequestedTextExtractionTaskBuilder()
      .withManualCheckFallback()
      .build();

    const faceMatchCheck = new RequestedFaceMatchCheckBuilder()
      .withManualCheckNever()
      .build();

    const livenessCheck = new RequestedLivenessCheckBuilder()
      .forZoomLiveness()
      .build();

    const docAuthenticityCheck = new RequestedDocumentAuthenticityCheckBuilder()
      .build();

    const sessionSpec = new SessionSpecificationBuilder()
      .withClientSessionTokenTtl(30)
      .withUserTrackingId('some-tracking-id')
      .withSdkConfig(sdkConfigBuilder)
      .withNotifications(notificationConfig)
      .withResourcesTtl(10)
      .withRequestedCheck(faceMatchCheck)
      .withRequestedCheck(livenessCheck)
      .withRequestedCheck(docAuthenticityCheck)
      .withRequestedTask(textExtractionTask)
      .build();

    const expectedJson = JSON.stringify({
      client_session_token_ttl: 30,
      resources_ttl: 10,
      user_tracking_id: 'some-tracking-id',
      notifications: {},
      requested_checks: [
        {
          type: 'ID_DOCUMENT_FACE_MATCH',
          config: {
            manual_check: 'NEVER',
          },
        },
        {
          type: 'LIVENESS',
          config: {
            max_retries: 1,
            liveness_type: 'ZOOM',
          },
        },
        {
          type: 'ID_DOCUMENT_AUTHENTICITY',
        },
      ],
      requested_tasks: [
        {
          type: 'ID_DOCUMENT_FACE_MATCH',
          config: {
            manual_check: 'FALLBACK',
          },
        },
      ],
      sdk_config: {
        allowed_capture_methods: 'CAMERA',
        primary_colour: 'some-colour',
        secondary_colour: 'some-secondary-colour',
        font_colour: 'some-font-colour',
        locale: 'some-url',
        preset_issuing_country: 'some-country',
        success_url: 'some-success-url',
        error_url: 'some-error-url',
      },
    });

    expect(JSON.stringify(sessionSpec)).toBe(expectedJson);
  });
});
