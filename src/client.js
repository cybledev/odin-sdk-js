const {
  HostCountRequestModel,
  HostCountResponse,
  HostsSearchRequest,
  HostsSummaryRequest,
  CertificateCountRequest,
  CertificateSearchRequest,
  CertificateSummaryRequest,
} = require("./models");

class APIClient {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async makeRequest(apiUrl, method, query) {
    const requestOptions = {
      method: method.toUpperCase(),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-API-Key": this.apiKey,
      },
      body: JSON.stringify(query),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);
      const responseBody = await response.json();

      if (!response.ok) {
        const error = new APIError(response.status, responseBody.message);
        return Promise.reject(error);
      }
      return Promise.resolve(responseBody);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getHostsCount(query) {
    const apiUrl = `${this.baseUrl}/hosts/count`;
    const requestData = new HostCountRequestModel(query);
    const response = await this.makeRequest(
      apiUrl,
      "POST",
      requestData
    );
    const data = new HostCountResponse(
      response.success,
      response.data,
      response.message
    );
    return response;
  }

  async getHostsIpDetails(ip) {
    const apiUrl = `${this.baseUrl}/hosts/${ip}/`;
    const response = await this.makeRequest(
      apiUrl,
      "GET",
    );

    return response;
  }

  async getIpCveDetails(ip) {
    const apiUrl = `${this.baseUrl}/hosts/cve/${ip}/`;
    const response = await this.makeRequest(apiUrl, "GET", ip);

    return response;
  }

  async searchHosts(query) {
    const apiUrl = `${this.baseUrl}/hosts/search`;
    const requestData = new HostsSearchRequest(
      query.limit,
      query.query,
      query.start
    );
    const response = await this.makeRequest(
      apiUrl,
      "POST",
      requestData
    );

    return response;
  }

  async getHostsSummary(query) {
    const apiUrl = `${this.baseUrl}/hosts/summary`;
    const requestData = new HostsSummaryRequest(query.limit, query.field);
    const response = await this.makeRequest(
      apiUrl,
      "POST",
      requestData
    );

    return response;
  }

  async getCertificateCount(query) {
    const apiUrl = `${this.baseUrl}/certificates/count`;
    const requestData = new CertificateCountRequest(query);
    const response = await this.makeRequest(
      apiUrl,
      "POST",
      requestData
    );

    return response;
  }

  async getCertificateHashDetails(hash) {
    const apiUrl = `${this.baseUrl}/certificates/${hash}/`;
    const response = await this.makeRequest(
      apiUrl,
      "GET",
      hash
    );

    return response;
  }

  async searchCertificates(query) {
    const apiUrl = `${this.baseUrl}/certificates/search`;
    const requestData = new CertificateSearchRequest(
      query.limit,
      query.query,
      query.start,
      query.pages
    );
    const response = await this.makeRequest(
      apiUrl,
      "POST",
      requestData
    );

    return response;
  }

  async getCertificatesSummary(query) {
    const apiUrl = `${this.baseUrl}/certificates/summary`;
    const requestData = new CertificateSummaryRequest(
      query.limit,
      query.field,
      query.query
    );
    const response = await this.makeRequest(
      apiUrl,
      "POST",
      requestData
    );

    return response;
  }
}

class APIError extends Error {
  constructor(statusCode, message) {
    super(`${statusCode} ${message}`);
    this.name = "APIError";
    this.statusCode = statusCode;
  }
}

module.exports = {
  APIClient,
  APIError,
};
