const {
  SdkConfigBuilder,
} = require('../../../../src/doc_scan_service');

describe('SdkConfigBuilder', () => {
  it('should build SdkConfig', () => {
    const sdkConfig = new SdkConfigBuilder()
      .withAllowsCamera()
      .withPrimaryColour('some-colour')
      .withSecondaryColour('some-secondary-colour')
      .withFontColour('some-font-colour')
      .withErrorUrl('some-error-url')
      .withSuccessUrl('some-success-url')
      .withLocale('some-url')
      .withPresetIssuingCountry('some-country')
      .build();

    const expectedJson = JSON.stringify({
      allowed_capture_methods: 'CAMERA',
      primary_colour: 'some-colour',
      secondary_colour: 'some-secondary-colour',
      font_colour: 'some-font-colour',
      locale: 'some-url',
      preset_issuing_country: 'some-country',
      success_url: 'some-success-url',
      error_url: 'some-error-url',
    });

    expect(JSON.stringify(sdkConfig)).toBe(expectedJson);
  });
});
