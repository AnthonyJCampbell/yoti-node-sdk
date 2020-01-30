const Validation = require('../../../yoti_common/validation');

class CheckResponse {
  constructor(response) {
    if (new.target === CheckResponse) {
      throw TypeError('CheckResponse cannot be instantiated');
    }

    Validation.isString(response.id, 'id', true);
    this.id = response.id;

    Validation.isString(response.state, 'state', true);
    this.state = response.state;

    Validation.isArrayOfStrings(response.resources_used, 'resources_used');
    this.resourcesUsed = response.resources_used;

    // Validation.isArrayOfType(response.generated_media, GeneratedMedia,  'generated_media');
    this.generatedMedia = response.generated_media;

    // Validation.instanceOf(response.report, ReportResponse, 'report');
    this.report = response.report;

    Validation.isString(response.created, 'created', true);
    this.created = response.created;

    Validation.isString(response.last_updated, 'last_updated', true);
    this.lastUpdated = response.last_updated;
  }

  getId() {
    return this.id;
  }

  getState() {
    return this.state;
  }

  getResourcesUsed() {
    return this.resourcesUsed;
  }

  getGeneratedMedia() {
    return this.generatedMedia;
  }

  getReport() {
    return this.report;
  }

  getCreated() {
    return this.created;
  }

  getLastUpdated() {
    return this.lastUpdated;
  }
}

module.exports = CheckResponse;
