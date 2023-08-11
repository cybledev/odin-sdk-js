const {
  HostCountRequestModel,
  HostsSearchRequest,
  HostsSummaryRequest,
  CertificateCountRequest,
  CertificateSearchRequest,
  CertificateSummaryRequest,
} = require("./models");

/**
 * Represents an API client for making requests.
 */
class APIClient {
  /**
   * Creates an instance of APIClient.
   * @param {string} baseUrl - The base URL for API requests.
   * @param {string} apiKey - The API key for authentication.
   */
  constructor(baseUrl, apiKey) {
    /**
     * The base URL for API requests.
     * @type {string}
     */
    this.baseUrl = baseUrl;

    /**
     * The API key for authentication.
     * @type {string}
     */
    this.apiKey = apiKey;
  }

  /**
   * Makes an API request.
   * @param {string} apiUrl - The API URL for the request.
   * @param {string} method - The HTTP method for the request.
   * @param {Object} query - The request query object.
   * @returns {Promise<Object>} - The API response data.
   * @throws {APIError} - If the request fails.
   */

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

  /**
   * Gets the count of hosts.
   * @param {string} query - The query string for the request.
   * @param {function} [callback] - The callback function for handling the response.
   * @returns {Promise<Object>} - The count of hosts.
   * @throws {APIError} - If the request fails.
   */

  async getHostsCount(query, callback) {
    const apiUrl = `${this.baseUrl}/hosts/count`;
    const requestData = new HostCountRequestModel(query);

    try {
      const data = await this.makeRequest(apiUrl, "POST", requestData);
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

  /**
   * Gets details of a host by its IP address.
   * @param {string} ip - The IP address of the host.
   * @param {function} [callback] - The callback function for handling the response.
   * @returns {Promise<Object>} - The details of the host.
   * @throws {APIError} - If the request fails.
   */
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

  /**
   * Gets CVE details for a host by its IP address.
   * @param {string} ip - The IP address of the host.
   * @param {function} [callback] - The callback function for handling the response.
   * @returns {Promise<Object>} - The CVE details of the host.
   * @throws {APIError} - If the request fails.
   */
  async getIpCveDetails(ip, callback) {
    const apiUrl = `${this.baseUrl}/hosts/cve/${ip}/`;
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

  /**
   * Searches for hosts based on a query.
   * @param {Object} query - The query object for the request.
   * @param {number} limit - The maximum number of results to return.
   * @param {float[]} start - The array of start points (optional).
   * @param {function} [callback] - The callback function for handling the response.
   * @returns {Promise<Object>} - The search results for hosts.
   * @throws {APIError} - If the request fails.
   */
  async searchHosts(query, limit, start, callback) {
    const apiUrl = `${this.baseUrl}/hosts/search`;
    const requestData = new HostsSearchRequest(query, limit, start);
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

  /**
   * Gets summary details of hosts.
   * @param {number} limit - The maximum number of results to return.
   * @param {string} field - The field to group summary by (optional).
   * @param {function} [callback] - The callback function for handling the response.
   * @returns {Promise<Object>} - The summary details of hosts.
   * @throws {APIError} - If the request fails.
   */
  async getHostsSummary(field, limit, callback) {
    const apiUrl = `${this.baseUrl}/hosts/summary`;
    const requestData = new HostsSummaryRequest(field, limit);
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

  /**
   * Gets the count of certificates.
   * @param {string} query - The query object for the request.
   * @param {function} [callback] - The callback function for handling the response.
   * @returns {Promise<Object>} - The count of certificates.
   * @throws {APIError} - If the request fails.
   */
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

  /**
   * Gets details of a certificate by its hash.
   * @param {string} hash - The hash of the certificate.
   * @param {function} [callback] - The callback function for handling the response.
   * @returns {Promise<Object>} - The details of the certificate.
   * @throws {APIError} - If the request fails.
   */
  async getCertificateHashDetails(hash, callback) {
    const apiUrl = `${this.baseUrl}/certificates/${hash}/`;
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

  /**
   * Searches for certificates based on a query.
   * @param {Object} query - The query object for the request.
   * @param {number} limit - The maximum number of results to return.
   * @param {float[]} start - The array of start points (optional).
   * @param {function} [callback] - The callback function for handling the response.
   * @returns {Promise<Object>} - The search results for certificates.
   * @throws {APIError} - If the request fails.
   */
  async searchCertificates(query, limit, start, callback) {
    const apiUrl = `${this.baseUrl}/certificates/search`;
    const requestData = new HostsSearchRequest(query, limit, start);
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

  /**
   * Gets summary details of certificates.
   * @param {string} field - The field to group summary by.
   * @param {number} limit - The maximum number of results to return.
   * @param {function} [callback] - The callback function for handling the response.
   * @returns {Promise<Object>} - The summary details of certificates.
   * @throws {APIError} - If the request fails.
   */
  async getCertificatesSummary(field, limit, callback) {
    const apiUrl = `${this.baseUrl}/certificates/summary`;
    const requestData = new CertificateSummaryRequest(field, limit);
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

/**
 * Represents an error in API responses.
 */
class APIError extends Error {
  /**
   * Creates an instance of APIError.
   * @param {number} statusCode - The HTTP status code.
   * @param {string} message - The error message.
   */
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
