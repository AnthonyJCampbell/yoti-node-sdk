const Validation = require('../../../yoti_common/validation');

class TaskResponse {
  constructor(task) {
    Validation.isString(task.id, 'id', true);
    this.id = task.id;

    Validation.isString(task.state, 'state', true);
    this.state = task.state;

    Validation.isString(task.created, 'created', true);
    this.created = task.created;

    Validation.isString(task.last_updated, 'last_updated', true);
    this.last_updated = task.last_updated;

    /** @TODO GeneratedCheckResponse[] */
    this.generated_checks = task.generated_checks;

    /** @TODO GeneratedMedia[] */
    this.generated_media = task.generated_media;
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
