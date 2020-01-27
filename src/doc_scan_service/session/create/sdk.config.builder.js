const SdkConfig = require('./sdk.config');
const DocScanConstants = require('../../doc.scan.constants');
const Validation = require('../../../yoti_common/validation');

class SdkConfigBuilder {
  withAllowsCamera() {
    return this.withAllowedCaptureMethod(DocScanConstants.CAMERA);
  }

  withAllowsCameraAndUpload() {
    return this.withAllowedCaptureMethod(DocScanConstants.CAMERA_AND_UPLOAD);
  }

  withAllowedCaptureMethods(allowedCaptureMethods) {
    Validation.isString(allowedCaptureMethods, 'allowedCaptureMethods');
    this.allowedCaptureMethods = allowedCaptureMethods;
    return this;
  }

  withPrimaryColour(primaryColour) {
    Validation.isString(primaryColour, 'primaryColour');
    this.primaryColour = primaryColour;
    return this;
  }

  withSecondaryColour(secondaryColour) {
    Validation.isString(secondaryColour, 'secondaryColour');
    this.secondaryColour = secondaryColour;
    return this;
  }

  withFontColour(fontColour) {
    Validation.isString(fontColour, 'fontColour');
    this.fontColour = fontColour;
    return this;
  }

  withLocale(locale) {
    Validation.isString(locale, 'locale');
    this.locale = locale;
    return this;
  }

  withPresetIssuingCountry(presetIssuingCountry) {
    Validation.isString(presetIssuingCountry, 'presetIssuingCountry');
    this.presetIssuingCountry = presetIssuingCountry;
    return this;
  }

  withSuccessUrl(successUrl) {
    Validation.isString(successUrl, 'successUrl');
    this.successUrl = successUrl;
    return this;
  }

  withErrorUrl(errorUrl) {
    Validation.isString(errorUrl, 'errorUrl');
    this.errorUrl = errorUrl;
    return this;
  }

  build() {
    return new SdkConfig(
      this.allowedCaptureMethods,
      this.primaryColour,
      this.secondaryColour,
      this.fontColour,
      this.locale,
      this.presetIssuingCountry,
      this.successUrl,
      this.errorUrl
    );
  }
}

module.exports = SdkConfigBuilder;
