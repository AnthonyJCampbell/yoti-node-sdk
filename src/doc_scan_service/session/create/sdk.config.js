
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
    Validation.isString(allowedCaptureMethods, 'allowedCaptureMethods');
    this.allowedCaptureMethods = allowedCaptureMethods;

    Validation.isString(primaryColour, 'primaryColour');
    this.primaryColour = primaryColour;

    Validation.isString(secondaryColour, 'secondaryColour');
    this.secondaryColour = secondaryColour;

    Validation.isString(fontColour, 'fontColour');
    this.fontColour = fontColour;

    Validation.isString(locale, 'locale');
    this.locale = locale;

    Validation.isString(presetIssuingCountry, 'presetIssuingCountry');
    this.presetIssuingCountry = presetIssuingCountry;

    Validation.isString(successUrl, 'successUrl');
    this.successUrl = successUrl;

    Validation.isString(errorUrl, 'errorUrl');
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
