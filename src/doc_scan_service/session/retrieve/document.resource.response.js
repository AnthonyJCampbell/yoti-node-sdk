const ResourceResponse = require('./resource.response');
const DocumentFieldsResponse = require('./document.fields.response');
const PageInfo = require('./page.info');
const Validation = require('../../../yoti_common/validation');

class DocumentResourceResponse extends ResourceResponse {
  constructor(resource) {
    super(resource);

    Validation.isString(resource.documentType, 'documentType', true);
    this.documentType = resource.documentType;

    Validation.isString(resource.issuingCountry, 'issuingCountry', true);
    this.issuingCountry = resource.issuingCountry;

    if (resource.pages) {
      Validation.isArray(resource.pages, 'pages');
      this.pages = resource.pages.map(page => new PageInfo(page));
    }

    if (resource.documentFields) {
      this.documentFields = new DocumentFieldsResponse(resource.documentFields);
    }
  }

  getDocumentType() {
    return this.documentType;
  }

  getIssuingCountry() {
    return this.issuingCountry;
  }

  getPages() {
    return this.pages;
  }

  getDocumentFields() {
    return this.documentFields;
  }
}

module.exports = DocumentResourceResponse;
