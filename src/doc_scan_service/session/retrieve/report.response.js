const RecommendationResponse = require('./recommendation.response');
const BreakdownResponse = require('./breakdown.response');

class ReportResponse {
  constructor(report) {
    if (report.recommendation) {
      this.recommendation = new RecommendationResponse(report.recommendation);
    }
    if (report.breakdown) {
      this.breakdown = report.breakdown.map(breakdown => new BreakdownResponse(breakdown));
    }
  }

  getRecommendation() {
    return this.recommendation;
  }

  getBreakdown() {
    return this.breakdown;
  }
}

module.exports = ReportResponse;
