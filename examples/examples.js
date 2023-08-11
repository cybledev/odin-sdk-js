const { APIClient } = require("odin-sdk-js");

const apiKey = "<APIKey>";
const baseUrl = "https://api.getodin.com/v1";

const client = new APIClient(baseUrl, apiKey);

async function getHostsCount() {
  try {
    const hostCount = await client.getHostsCount("string");
    console.log("Hosts Count:", hostCount);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getHostDetailsByIp() {
  try {
    const hostDetails = await client.getHostsIpDetails("100.26.248.109");
    console.log("Host Details:", hostDetails);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getHostCveDetailsByIp() {
  try {
    const ipCveDetails = await client.getIpCveDetails("100.26.248.109");
    console.log("Host CVE Details:", ipCveDetails);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function searchHosts() {
  try {
    let start = null;
    let hosts = [];
    for (let i = 0; i < 5; i++) {
      const response = await client.searchHosts("services.port:80", 10, start);
      hosts.push(...response.data);
      start = response.pagination.last;
    }
    console.log("Total Hosts:", hosts.length);
    console.log("searched Data:", hosts);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getHostsSummary() {
  try {
    const hostSummary = await client.getHostsSummary("services.port", 9);
    console.log("Hosts Summary:", hostSummary);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getCertificateCount() {
  try {
    const certCount = await client.getCertificateCount("string");
    console.log("Certificates Count:", certCount);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getCertificateDetailsByHash() {
  try {
    const certDetails = await client.getCertificateHashDetails("5821D920257433710022A66B701E794A954012601CABE63F8F0499A74D3489FE");
    console.log("Certificate Details:", certDetails);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function searchCertificates() {
  try {
    let start = null;
    let certificates = [];
    for (let i = 0; i < 5; i++) {
      const response = await client.searchCertificates("certificate.issuer.common_name:R3", 1, start);
      certificates.push(...response.data);
      start = response.pagination.last;
    }
    console.log("Total Certificates:", certificates.length);
    console.log("searched Data:", certificates);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getCertificatesSummary() {
  try {
    const certSummary = await client.getCertificatesSummary("certificate.issuer.common_name", 1);
    console.log("Certificates Summary:", certSummary);
  } catch (error) {
    console.error("Error:", error);
  }
}

(async () => {
  // Call the individual functions here based on what you want to test
  await getHostsCount();
  // await getHostDetailsByIp();
  // await getHostCveDetailsByIp();
  // await searchHosts();
  // await getHostsSummary();
  // await getCertificateCount();
  // await getCertificateDetailsByHash();
  // await searchCertificates();
  // await getCertificatesSummary();
})();
