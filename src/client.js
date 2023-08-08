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

  async getHostsCount(query, callback) {
    const apiUrl = `${this.baseUrl}/hosts/count`;
    const requestData = new HostCountRequestModel(query);

    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      const data = new HostCountResponse(
        response.success,
        response.data,
        response.message
      );

      if (typeof callback === "function") {
        callback(null, data);
      }

      return data;
    } catch (error) {
      if (typeof callback === "function") {
        callback(error, null);
      }

      return Promise.reject(error);
    }
  }

  async getHostsIpDetails(ip, callback) {
    const apiUrl = `${this.baseUrl}/hosts/${ip}/`;
    try {
      const response = await this.makeRequest(apiUrl, "GET");
      if (typeof callback === "function") {
        callback(null, response);
      }

      return response;
    } catch (error) {
      if (typeof callback === "function") {
        callback(error, null);
      }

      return Promise.reject(error);
    }
  }

  async getIpCveDetails(ip, callback) {
    const apiUrl = `${this.baseUrl}/hosts/cve/${ip}/`;
    try {
      const response = await this.makeRequest(apiUrl, "GET", ip);
      if (typeof callback === "function") {
        callback(null, response);
      }

      return response;
    } catch (error) {
      if (typeof callback === "function") {
        callback(error, null);
      }

      return Promise.reject(error);
    }
  }

  async searchHosts(query, callback) {
    const apiUrl = `${this.baseUrl}/hosts/search`;
    const requestData = new HostsSearchRequest(
      query.limit,
      query.query,
      query.start
    );
    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      if (typeof callback === "function") {
        callback(null, response);
      }

      return response;
    } catch (error) {
      if (typeof callback === "function") {
        callback(error, null);
      }

      return Promise.reject(error);
    }
  }

  async getHostsSummary(query, callback) {
    const apiUrl = `${this.baseUrl}/hosts/summary`;
    const requestData = new HostsSummaryRequest(query.limit, query.field);
    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      if (typeof callback === "function") {
        callback(null, response);
      }

      return response;
    } catch (error) {
      if (typeof callback === "function") {
        callback(error, null);
      }

      return Promise.reject(error);
    }
  }

  async getCertificateCount(query, callback) {
    const apiUrl = `${this.baseUrl}/certificates/count`;
    const requestData = new CertificateCountRequest(query);
    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      if (typeof callback === "function") {
        callback(null, response);
      }

      return response;
    } catch (error) {
      if (typeof callback === "function") {
        callback(error, null);
      }

      return Promise.reject(error);
    }
  }

  async getCertificateHashDetails(hash, callback) {
    const apiUrl = `${this.baseUrl}/certificates/${hash}/`;
    try {
      const response = await this.makeRequest(apiUrl, "GET", hash);
      if (typeof callback === "function") {
        callback(null, response);
      }

      return response;
    } catch (error) {
      if (typeof callback === "function") {
        callback(error, null);
      }

      return Promise.reject(error);
    }
  }

  // searchCertificates function with Promise and callback support
  async searchCertificates(query, callback) {
    const apiUrl = `${this.baseUrl}/certificates/search`;
    const requestData = new CertificateSearchRequest(
      query.limit,
      query.query,
      query.start,
      query.pages
    );
    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      if (typeof callback === "function") {
        callback(null, response);
      }

      return response;
    } catch (error) {
      if (typeof callback === "function") {
        callback(error, null);
      }

      return Promise.reject(error);
    }
  }

  async getCertificatesSummary(query, callback) {
    const apiUrl = `${this.baseUrl}/certificates/summary`;
    const requestData = new CertificateSummaryRequest(
      query.limit,
      query.field,
      query.query
    );
    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      if (typeof callback === "function") {
        callback(null, response);
      }

      return response;
    } catch (error) {
      if (typeof callback === "function") {
        callback(error, null);
      }

      return Promise.reject(error);
    }
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
