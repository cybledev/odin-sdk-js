/**
 * Represents a request model for counting hosts.
 */
class HostCountRequestModel {
  /**
   * Creates an instance of HostCountRequestModel.
   * @param {Object} query - The query object for the request.
   */
  constructor(query) {
    this.query = query;
  }
}

/**
 * Represents a request for searching hosts.
 */
class HostsSearchRequest {
  /**
   * Creates an instance of HostsSearchRequest.
   * @param {number} limit - The limit of results to fetch.
   * @param {string} query - The search query string.
   * @param {Array} start - An array of starting points for search.
   */
  constructor(query, limit, start) {
    this.limit = limit;
    this.query = query || "";
    this.start = start || [];
  }
}

/**
 * Represents a request for summarizing hosts.
 */
class HostsSummaryRequest {
  /**
   * Creates an instance of HostsSummaryRequest.
   * @param {number} limit - The limit of results to fetch.
   * @param {string} field - The field for summarization.
   */
  constructor(field, limit) {
    this.limit = limit;
    this.field = field || "";
  }
}

/**
 * Represents a request model for counting certificates.
 */
class CertificateCountRequest {
  /**
   * Creates an instance of CertificateCountRequest.
   * @param {Object} query - The query object for the request.
   */
  constructor(query) {
    this.query = query;
  }
}

/**
 * Represents a request for searching certificates.
 */
class CertificateSearchRequest {
  /**
   * Creates an instance of CertificateSearchRequest.
   * @param {number} limit - The limit of results to fetch.
   * @param {string} query - The search query string.
   * @param {Array} start - An array of starting points for search.
   */
  constructor(query, limit, start) {
    this.limit = limit;
    this.query = query || "";
    this.start = start || [];
  }
}

/**
 * Represents a request for summarizing certificates.
 */
class CertificateSummaryRequest {
  /**
   * Creates an instance of CertificateSummaryRequest.
   * @param {number} limit - The limit of results to fetch.
   * @param {string} field - The field for summarization.
   * @param {string} query - The search query string.
   */
  constructor(field, limit) {
    this.limit = limit;
    this.field = field || "";
  }
}

module.exports = {
  HostCountRequestModel,
  HostsSearchRequest,
  HostsSummaryRequest,
  CertificateCountRequest,
  CertificateSearchRequest,
  CertificateSummaryRequest,
};
