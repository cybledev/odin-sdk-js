// HostCountRequestModel
class HostCountRequestModel {
  constructor(query) {
    this.query = query;
  }
}

// HostsSearchRequest
class HostsSearchRequest {
  constructor(limit, query, start) {
    this.limit = limit;
    this.query = query || "";
    this.start = start || [];
  }
}

// HostsSummaryRequest
class HostsSummaryRequest {
  constructor(limit, field) {
    this.limit = limit;
    this.field = field || "";
  }
}

// CertificateCountRequest
class CertificateCountRequest {
  constructor(query) {
    this.query = query;
  }
}

// CertificateSearchRequest
class CertificateSearchRequest {
  constructor(limit, query, start, pages) {
    this.limit = limit;
    this.query = query || "";
    this.start = start || [];
    this.pages = pages || "";
  }
}

// CertificateSummaryRequest
class CertificateSummaryRequest {
  constructor(limit, field, query) {
    this.limit = limit;
    this.field = field || "";
    this.query = query || "";
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
