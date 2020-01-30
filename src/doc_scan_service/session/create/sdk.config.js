
const Validation = require('../../../yoti_common/validation');

class SdkConfig {
  constructor(
    allowedCaptureMethods,
    primaryColour,
    secondaryColour,
    fontColour,
    locale,
    presetIssuingCountry,
    successUrl,
    errorUrl
  ) {
    Validation.isStringOrUndefined(allowedCaptureMethods, 'allowedCaptureMethods');
    this.allowedCaptureMethods = allowedCaptureMethods;

    Validation.isStringOrUndefined(primaryColour, 'primaryColour');
    this.primaryColour = primaryColour;

    Validation.isStringOrUndefined(secondaryColour, 'secondaryColour');
    this.secondaryColour = secondaryColour;

    Validation.isStringOrUndefined(fontColour, 'fontColour');
    this.fontColour = fontColour;

    Validation.isStringOrUndefined(locale, 'locale');
    this.locale = locale;

    Validation.isStringOrUndefined(presetIssuingCountry, 'presetIssuingCountry');
    this.presetIssuingCountry = presetIssuingCountry;

    Validation.isStringOrUndefined(successUrl, 'successUrl');
    this.successUrl = successUrl;

    Validation.isStringOrUndefined(errorUrl, 'errorUrl');
    this.errorUrl = errorUrl;
  }

  toJSON() {
    return {
      allowed_capture_methods: this.allowedCaptureMethods,
      primary_colour: this.primaryColour,
      secondary_colour: this.secondaryColour,
      font_colour: this.fontColour,
      locale: this.locale,
      preset_issuing_country: this.presetIssuingCountry,
      success_url: this.successUrl,
      error_url: this.errorUrl,
    };
  }
}

module.exports = SdkConfig;
