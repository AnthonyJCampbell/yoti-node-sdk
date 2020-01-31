const TaskResponse = require('./task.response');

class ResourceResponse {
  constructor(resource) {
    this.id = resource.id;
    this.tasks = resource.tasks.map(task => new TaskResponse(task));
  }

  getTasks() {
    return this.tasks;
  }

  getId() {
    return this.id;
  }
}

module.exports = ResourceResponse;
