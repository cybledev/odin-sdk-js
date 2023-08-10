const {
  HostCountRequestModel,
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
        throw error;
      }
      return responseBody;
    } catch (error) {
      throw error;
    }
  }

  promisify(callbackFunction) {
    return (...args) => {
      return new Promise((resolve, reject) => {
        if (callbackFunction) {
          callbackFunction(...args, (err, data) => {
            if (err) {
              console.log(err);
              reject(err);
            } else {
              resolve(data);
            }
          });
        } else {
          resolve(...args);
        }
      });
    };
  }

  async getHostsCount(query, callback) {
    const apiUrl = `${this.baseUrl}/hosts/count`;
    const requestData = new HostCountRequestModel(query);

    const promisifiedCallback = this.promisify(callback);

    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      promisifiedCallback(null, response);
      // callback(null, response)
      return response;
    } catch (error) {
      promisifiedCallback(error, null);
      // call
      return error;
    }
  }

  async searchCertificates(query, callback) {
    const apiUrl = `${this.baseUrl}/certificates/search`;
    const requestData = new CertificateSearchRequest(
      query.limit,
      query.query,
      query.start,
      query.pages
    );

    const promisifiedCallback = this.promisify(callback);
    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      promisifiedCallback(null, response);
      return response;
    } catch (error) {
      promisifiedCallback(error, null);
      throw error;
    }
  }

  async getHostsIpDetails(ip, callback) {
    const apiUrl = `${this.baseUrl}/hosts/${ip}/`;
    const promisifiedCallback = this.promisify(callback);

    try {
      const response = await this.makeRequest(apiUrl, "GET");
      promisifiedCallback(null, response);
      return response;
    } catch (error) {
      promisifiedCallback(error, null);
      throw error;
    }
  }

  async getIpCveDetails(ip, callback) {
    const apiUrl = `${this.baseUrl}/hosts/cve/${ip}/`;

    const promisifiedCallback = this.promisify(callback);
    try {
      const response = await this.makeRequest(apiUrl, "GET");
      promisifiedCallback(null, response);
      return response;
    } catch (error) {
      promisifiedCallback(error, null);
      throw error;
    }
  }

  async searchHosts(query, callback) {
    const apiUrl = `${this.baseUrl}/hosts/search`;
    const requestData = new HostsSearchRequest(
      query.limit,
      query.query,
      query.start
    );
    const promisifiedCallback = this.promisify(callback);

    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      promisifiedCallback(null, response);
      return response;
    } catch (error) {
      promisifiedCallback(error, null);
      throw error;
    }
  }

  async getHostsSummary(query, callback) {
    const apiUrl = `${this.baseUrl}/hosts/summary`;
    const requestData = new HostsSummaryRequest(query.limit, query.field);

    const promisifiedCallback = this.promisify(callback);
    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      promisifiedCallback(null, response);
      return response;
    } catch (error) {
      promisifiedCallback(error, null);
      throw error;
    }
  }

  async getCertificateCount(query, callback) {
    const apiUrl = `${this.baseUrl}/certificates/count`;
    const requestData = new CertificateCountRequest(query);
    const promisifiedCallback = this.promisify(callback);

    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      promisifiedCallback(null, response);
      return response;
    } catch (error) {
      promisifiedCallback(error, null);
      throw error;
    }
  }

  async getCertificateHashDetails(hash, callback) {
    const apiUrl = `${this.baseUrl}/certificates/${hash}/`;
    const promisifiedCallback = this.promisify(callback);

    try {
      const response = await this.makeRequest(apiUrl, "GET");
      promisifiedCallback(null, response);
      return response;
    } catch (error) {
      promisifiedCallback(error, null);
      throw error;
    }
  }

  async searchCertificates(query, callback) {
    const apiUrl = `${this.baseUrl}/certificates/search`;
    const requestData = new CertificateSearchRequest(
      query.limit,
      query.query,
      query.start,
      query.pages
    );
    const promisifiedCallback = this.promisify(callback);

    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      promisifiedCallback(null, response);
      return response;
    } catch (error) {
      promisifiedCallback(error, null);
      throw error;
    }
  }

  async getCertificatesSummary(query, callback) {
    const apiUrl = `${this.baseUrl}/certificates/summary`;
    const requestData = new CertificateSummaryRequest(
      query.limit,
      query.field,
      query.query
    );
    const promisifiedCallback = this.promisify(callback);

    try {
      const response = await this.makeRequest(apiUrl, "POST", requestData);
      promisifiedCallback(null, response);
      return response;
    } catch (error) {
      promisifiedCallback(error, null);
      throw error;
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
