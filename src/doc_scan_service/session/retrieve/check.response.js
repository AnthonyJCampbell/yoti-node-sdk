const Validation = require('../../../yoti_common/validation');
const ReportResponse = require('./report.response');

class CheckResponse {
  constructor(check) {
    if (new.target === CheckResponse) {
      throw TypeError('CheckResponse cannot be instantiated');
    }

    Validation.isString(check.id, 'id', true);
    this.id = check.id;

    Validation.isString(check.state, 'state', true);
    this.state = check.state;

    Validation.isArrayOfStrings(check.resources_used, 'resources_used');
    this.resourcesUsed = check.resources_used;

    /** @TODO GeneratedMedia[] */
    this.generatedMedia = check.generated_media;

    if (check.report) {
      this.report = new ReportResponse(check.report);
    }

    Validation.isString(check.created, 'created', true);
    this.created = check.created;

    Validation.isString(check.last_updated, 'last_updated', true);
    this.lastUpdated = check.last_updated;
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
