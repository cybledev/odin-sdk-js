// HostCountRequestModel
class HostCountRequestModel {
    constructor(query) {
      this.query = query;
    }
  }
  
  // HostCountResponse
  class HostCountResponse {
    constructor(success, count, message) {
      this.success = success;
      this.data = {
        count: count
      };
      this.message = message || '';
    }
  }
  
  // HostsIpDetailsResponse
  class HostsIpDetailsResponse {
    constructor(success, message, data) {
      this.success = success;
      this.message = message || '';
      this.data = data;
    }
  }
  
  // IpCveDetails
  class IpCveDetails {
    constructor(id, references, score, services, severity, summary, vectorString, weakness) {
      this.id = id;
      this.references = references;
      this.score = score;
      this.services = services;
      this.severity = severity;
      this.summary = summary;
      this.vectorString = vectorString;
      this.weakness = weakness;
    }
  }
  
  // IpCveResponse
  class IpCveResponse {
    constructor(success, data, message) {
      this.success = success;
      this.data = data;
      this.message = message || '';
    }
  }
  
  // HostsSearchRequest
  class HostsSearchRequest {
    constructor(limit, query, start) {
      this.limit = limit;
      this.query = query || '';
      this.start = start || [];
    }
  }
  
  // HostsSearchResponse
  class HostsSearchResponse {
    constructor(success, message, data, pagination) {
      this.success = success;
      this.message = message || '';
      this.data = data;
      this.pagination = pagination || {};
    }
  }
  
  // HostsSearchData
  class HostsSearchData {
    constructor(asn, asnUpdatedAt, domains, hostnames, ip, isIPv4, isIPv6, lastUpdatedAt, location, locationUpdatedAt, scanID, services, servicesHash, tags, whois, whoisUpdatedAt) {
      this.asn = asn;
      this.asnUpdatedAt = asnUpdatedAt;
      this.domains = domains;
      this.hostnames = hostnames;
      this.ip = ip;
      this.isIPv4 = isIPv4;
      this.isIPv6 = isIPv6;
      this.lastUpdatedAt = lastUpdatedAt;
      this.location = location;
      this.locationUpdatedAt = locationUpdatedAt;
      this.scanID = scanID;
      this.services = services;
      this.servicesHash = servicesHash;
      this.tags = tags;
      this.whois = whois;
      this.whoisUpdatedAt = whoisUpdatedAt;
    }
  }
  
  // HostsSummaryRequest
  class HostsSummaryRequest {
    constructor(limit, field) {
      this.limit = limit;
      this.field = field || '';
    }
  }
  
  // HostsSummaryResponse
  class HostsSummaryResponse {
    constructor(success, message, data) {
      this.success = success;
      this.message = message || '';
      this.data = data;
    }
  }
  
  // CertificateCountRequest
  class CertificateCountRequest {
    constructor(query) {
      this.query = query;
    }
  }
  
  // CertificateCountResponse
  class CertificateCountResponse {
    constructor(success, count, message) {
      this.success = success;
      this.data = {
        count: count
      };
      this.message = message || '';
    }
  }
  
  // CertificateSearchRequest
  class CertificateSearchRequest {
    constructor(limit, query, start, pages) {
      this.limit = limit;
      this.query = query || '';
      this.start = start || [];
      this.pages = pages || '';
    }
  }
  
  // CertificateSearchResponse
  class CertificateSearchResponse {
    constructor(success, message, pagination, data) {
      this.success = success;
      this.message = message || '';
      this.pagination = pagination;
      this.data = data;
    }
  }
  
  // CertificateSearchData
  class CertificateSearchData {
    constructor(fingerprintMD5, fingerprintSHA1, fingerprintSHA256, issuer, subject, subjectAltName, tags, validity) {
      this.fingerprintMD5 = fingerprintMD5;
      this.fingerprintSHA1 = fingerprintSHA1;
      this.fingerprintSHA256 = fingerprintSHA256;
      this.issuer = issuer;
      this.subject = subject;
      this.subjectAltName = subjectAltName;
      this.tags = tags;
      this.validity = validity;
    }
  }
  
  // CertificateHashResponse
  class CertificateHashResponse {
    constructor(success, message, data) {
      this.success = success;
      this.message = message || '';
      this.data = data;
    }
  }
  
  // CertificateSummaryRequest
  class CertificateSummaryRequest {
    constructor(limit, field, query) {
      this.limit = limit;
      this.field = field || '';
      this.query = query || '';
    }
  }
  
  // CertificateSummaryResponse
  class CertificateSummaryResponse {
    constructor(success, message, data) {
      this.success = success;
      this.message = message || '';
      this.data = data;
    }
  }
  
  module.exports = {
    HostCountRequestModel,
    HostCountResponse,
    HostsIpDetailsResponse,
    IpCveDetails,
    IpCveResponse,
    HostsSearchRequest,
    HostsSearchResponse,
    HostsSearchData,
    HostsSummaryRequest,
    HostsSummaryResponse,
    CertificateCountRequest,
    CertificateCountResponse,
    CertificateSearchRequest,
    CertificateSearchResponse,
    CertificateSearchData,
    CertificateHashResponse,
    CertificateSummaryRequest,
    CertificateSummaryResponse
  };
  