const Validation = require('../../../yoti_common/validation');
const GeneratedCheckResponse = require('./generated.check.response');
const GeneratedMedia = require('./generated.media');

class TaskResponse {
  constructor(task) {
    Validation.isString(task.id, 'id');
    this.id = task.id;

    Validation.isString(task.state, 'state');
    this.state = task.state;

    Validation.isString(task.created, 'created');
    this.created = task.created;

    Validation.isString(task.last_updated, 'last_updated');
    this.last_updated = task.last_updated;

    if (task.generated_checks) {
      Validation.isArray(task.generated_checks, 'generated_checks');
      this.generatedChecks = task.generated_checks.map(check => new GeneratedCheckResponse(check));
    }

    if (task.generated_media) {
      Validation.isArray(task.generated_media, 'generated_media');
      this.generatedMedia = task.generated_media.map(media => new GeneratedMedia(media));
    }
  }

  getId() {
    return this.id;
  }

  getState() {
    return this.state;
  }

  getCreated() {
    return this.created;
  }

  getLastUpdated() {
    return this.lastUpdated;
  }

  getGeneratedChecks() {
    return this.generatedChecks;
  }

  getGeneratedMedia() {
    return this.generatedMedia;
  }
}

module.exports = TaskResponse;
