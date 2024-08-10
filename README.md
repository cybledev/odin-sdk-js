# Odin SDK for Javascript

ODIN's primary focus is to equip infosec teams with a precise depiction of the internet, enabling them to strengthen their security defences and proactively detect threats within their attack surface.

The Odin SDK for Go provides a simple way to interact with the [Odin API](https://docs.odin.io/api/api-key) and access various services related to cybersecurity, ip services, certificates, exposed files, domains and more.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Then install it via:

```shell
npm install odin-sdk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming _main.js_ is your entry file):

```shell
browserify main.js > bundle.js
```

Then include _bundle.js_ in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false,
      },
    },
  ];
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Odin = require("odin");

var defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['X-API-Key'] = "Token"

// search exposed buckets (using pagination)
var api = new OdinApis.ExposedBucketsApi();
var buckets = [];

for (var i = 0; i < 10; i++) {
  var query = new OdinApis.ExposedCountRequest();
  query.query = "name:'lit-link-prd.appspot.com'";
  var callback = function (error, data, response) {
    if (error) {
      console.error(error);
    } else {
      buckets.push(data);
    }
  };
  api.exposedBucketsCountPost(query, callback);
  console.log(JSON.stringify(buckets));
}

// search files in a exposed bucket
var api = new OdinApis.ExposedFilesApi();
var query = {
  query: "provider: aws",
  limit: 1,
  sortDir: "desc",
  sortBy: "files",
};
var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.stringify(data));
  }
};
api.exposedFilesSearchPost(query, callback);

// search hosts
var api = new OdinApis.ExposedHostsApi();
var query = {
  query:
    '(last_updated_at:["2024-07-08T02:41:15.528Z" TO *] AND services.port:80) OR asn.number:AS63949',
  limit: 1,
};
var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.stringify(data));
  }
};
api.exposedHostsSearchPost(query, callback);

// certificates search
var api = new OdinApis.CertificateApi();
var query = {
  query:
    "certificate.subject_alt_name.dns_names:'cloudflare.com' AND certificate.validity.not_after:\"2024-09-20T18:19:24\"",
  limit: 1,
};
var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.stringify(data));
  }
};
api.certificatesSearchPost(query, callback);

// certificates count
var api = new OdinApis.CertificateApi();
var query = new OdinApis.CertificateCertCountRequest();
var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.stringify(data));
  }
};
api.certificatesCountPost(query, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.odin.io*

| Class                    | Method                                                                                                 | HTTP request                                         | Description                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ---------------------------------------------- |
| _Odin.CertificateApi_    | [**v1CertificatesCountPost**](docs/CertificateApi.md#v1CertificatesCountPost)                          | **POST** /v1/certificates/count                      | Get records count                              |
| _Odin.CertificateApi_    | [**v1CertificatesHashGet**](docs/CertificateApi.md#v1CertificatesHashGet)                              | **GET** /v1/certificates/{hash}                      | Get the complete certificate                   |
| _Odin.CertificateApi_    | [**v1CertificatesScrollNextPost**](docs/CertificateApi.md#v1CertificatesScrollNextPost)                | **POST** /v1/certificates/scroll/next                | Get the next batch of record                   |
| _Odin.CertificateApi_    | [**v1CertificatesScrollPost**](docs/CertificateApi.md#v1CertificatesScrollPost)                        | **POST** /v1/certificates/scroll                     | Get the record based on query                  |
| _Odin.CertificateApi_    | [**v1CertificatesSearchPost**](docs/CertificateApi.md#v1CertificatesSearchPost)                        | **POST** /v1/certificates/search                     | Search records                                 |
| _Odin.CertificateApi_    | [**v1CertificatesSummaryPost**](docs/CertificateApi.md#v1CertificatesSummaryPost)                      | **POST** /v1/certificates/summary                    | Get summary                                    |
| _Odin.DomainApi_         | [**v1DomainCountPost**](docs/DomainApi.md#v1DomainCountPost)                                           | **POST** /v1/domain/count                            | Get domains count                              |
| _Odin.DomainApi_         | [**v1DomainSearchPost**](docs/DomainApi.md#v1DomainSearchPost)                                         | **POST** /v1/domain/search                           | Search domains                                 |
| _Odin.DomainApi_         | [**v1DomainSubdomainCountPost**](docs/DomainApi.md#v1DomainSubdomainCountPost)                         | **POST** /v1/domain/subdomain/count                  | Fetch the total no. of subdomain records       |
| _Odin.DomainApi_         | [**v1DomainSubdomainSearchPost**](docs/DomainApi.md#v1DomainSubdomainSearchPost)                       | **POST** /v1/domain/subdomain/search                 | Fetch the subdomain record                     |
| _Odin.DomainApi_         | [**v1DomainWhoisDomainNameGet**](docs/DomainApi.md#v1DomainWhoisDomainNameGet)                         | **GET** /v1/domain/whois/{domain-name}               | Fetch the domain whois record details          |
| _Odin.DomainApi_         | [**v1DomainWhoisDomainNameHistoricalGet**](docs/DomainApi.md#v1DomainWhoisDomainNameHistoricalGet)     | **GET** /v1/domain/whois/{domain-name}/historical    | Fetch all the domain whois historical records  |
| _Odin.DomainApi_         | [**v1DomainWhoisDomainNameIsExpiredGet**](docs/DomainApi.md#v1DomainWhoisDomainNameIsExpiredGet)       | **GET** /v1/domain/whois/{domain-name}/is-expired    | Get the expiry for a particular domain         |
| _Odin.DomainApi_         | [**v1DomainWhoisDomainNameIsRegisteredGet**](docs/DomainApi.md#v1DomainWhoisDomainNameIsRegisteredGet) | **GET** /v1/domain/whois/{domain-name}/is-registered | Fetch all the domain whois historical records  |
| _Odin.ExposedBucketsApi_ | [**v1ExposedBucketsCountPost**](docs/ExposedBucketsApi.md#v1ExposedBucketsCountPost)                   | **POST** /v1/exposed/buckets/count                   | Get exposed bucket count                       |
| _Odin.ExposedBucketsApi_ | [**v1ExposedBucketsSearchPost**](docs/ExposedBucketsApi.md#v1ExposedBucketsSearchPost)                 | **POST** /v1/exposed/buckets/search                  | Search exposed buckets                         |
| _Odin.ExposedBucketsApi_ | [**v1ExposedBucketsSummaryPost**](docs/ExposedBucketsApi.md#v1ExposedBucketsSummaryPost)               | **POST** /v1/exposed/buckets/summary                 | Get Exposed buckets summary                    |
| _Odin.ExposedFilesApi_   | [**v1ExposedFilesCountPost**](docs/ExposedFilesApi.md#v1ExposedFilesCountPost)                         | **POST** /v1/exposed/files/count                     | Get file count                                 |
| _Odin.ExposedFilesApi_   | [**v1ExposedFilesSearchPost**](docs/ExposedFilesApi.md#v1ExposedFilesSearchPost)                       | **POST** /v1/exposed/files/search                    | Search exposed files                           |
| _Odin.ExposedFilesApi_   | [**v1ExposedFilesSummaryPost**](docs/ExposedFilesApi.md#v1ExposedFilesSummaryPost)                     | **POST** /v1/exposed/files/summary                   | Get file summary                               |
| _Odin.FieldsApi_         | [**v1FieldsCertificatesCategoryGet**](docs/FieldsApi.md#v1FieldsCertificatesCategoryGet)               | **GET** /v1/fields/certificates/{category}/          | Get the fields for certificates                |
| _Odin.FieldsApi_         | [**v1FieldsExposedBucketsGet**](docs/FieldsApi.md#v1FieldsExposedBucketsGet)                           | **GET** /v1/fields/exposed/buckets/                  | Get the fields for exposed                     |
| _Odin.FieldsApi_         | [**v1FieldsExposedFilesGet**](docs/FieldsApi.md#v1FieldsExposedFilesGet)                               | **GET** /v1/fields/exposed/files/                    | Get the fields data                            |
| _Odin.FieldsApi_         | [**v1FieldsHostsCategoryGet**](docs/FieldsApi.md#v1FieldsHostsCategoryGet)                             | **GET** /v1/fields/hosts/{category}/                 | Get the fields for hosts                       |
| _Odin.HealthApi_         | [**v1PingGet**](docs/HealthApi.md#v1PingGet)                                                           | **GET** /v1/ping                                     | Health Check                                   |
| _Odin.HostsApi_          | [**v1CvesAllIpPageGet**](docs/HostsApi.md#v1CvesAllIpPageGet)                                          | **GET** /v1/cves/all/{ip}/{page}                     | Get cve details                                |
| _Odin.HostsApi_          | [**v1HostsCountPost**](docs/HostsApi.md#v1HostsCountPost)                                              | **POST** /v1/hosts/count                             | Get the record count                           |
| _Odin.HostsApi_          | [**v1HostsCveIpGet**](docs/HostsApi.md#v1HostsCveIpGet)                                                | **GET** /v1/hosts/cve/{ip}/                          | Get ip cve details                             |
| _Odin.HostsApi_          | [**v1HostsCvesIpCveGet**](docs/HostsApi.md#v1HostsCvesIpCveGet)                                        | **GET** /v1/hosts/cves/{ip}/{cve}                    | Get cve                                        |
| _Odin.HostsApi_          | [**v1HostsExploitsIpCveGet**](docs/HostsApi.md#v1HostsExploitsIpCveGet)                                | **GET** /v1/hosts/exploits/{ip}/{cve}                | Get exploits for ip and cve                    |
| _Odin.HostsApi_          | [**v1HostsExploitsIpGet**](docs/HostsApi.md#v1HostsExploitsIpGet)                                      | **GET** /v1/hosts/exploits/{ip}/                     | Get exploits for ip                            |
| _Odin.HostsApi_          | [**v1HostsIpGet**](docs/HostsApi.md#v1HostsIpGet)                                                      | **GET** /v1/hosts/{ip}/                              | Get the latest ip details                      |
| _Odin.HostsApi_          | [**v1HostsSearchPost**](docs/HostsApi.md#v1HostsSearchPost)                                            | **POST** /v1/hosts/search                            | Search hosts                                   |
| _Odin.HostsApi_          | [**v1HostsSummaryPost**](docs/HostsApi.md#v1HostsSummaryPost)                                          | **POST** /v1/hosts/summary                           | Get summary                                    |
| _Odin.HostsApi_          | [**v2HostsCountPost**](docs/HostsApi.md#v2HostsCountPost)                                              | **POST** /v2/hosts/count                             | Fetch the record count                         |
| _Odin.HostsApi_          | [**v2HostsIpPost**](docs/HostsApi.md#v2HostsIpPost)                                                    | **POST** /v2/hosts/{ip}                              | Fetch the latest ip details                    |
| _Odin.HostsApi_          | [**v2HostsSearchPost**](docs/HostsApi.md#v2HostsSearchPost)                                            | **POST** /v2/hosts/search                            | Fetch the record based on query                |
| _Odin.HostsApi_          | [**v2HostsSummaryPost**](docs/HostsApi.md#v2HostsSummaryPost)                                          | **POST** /v2/hosts/summary                           | Create the summary of the field based on query |

## Documentation for Models

- [Odin.APIResponse](docs/APIResponse.md)
- [Odin.CertCount](docs/CertCount.md)
- [Odin.CertificateAPIResponse](docs/CertificateAPIResponse.md)
- [Odin.CertificateCertCount](docs/CertificateCertCount.md)
- [Odin.CertificateCertCountRequest](docs/CertificateCertCountRequest.md)
- [Odin.CertificateCertScroll](docs/CertificateCertScroll.md)
- [Odin.CertificateCertScrollRequest](docs/CertificateCertScrollRequest.md)
- [Odin.CertificateCertSearchRequest](docs/CertificateCertSearchRequest.md)
- [Odin.CertificateCertSummaryRequest](docs/CertificateCertSummaryRequest.md)
- [Odin.CertificateCertificateHashResponse](docs/CertificateCertificateHashResponse.md)
- [Odin.CertificateCertificateHashResponseData](docs/CertificateCertificateHashResponseData.md)
- [Odin.CertificateCertificateHashResponseDataCertificate](docs/CertificateCertificateHashResponseDataCertificate.md)
- [Odin.CertificateCertificateHashResponseDataCertificateExtensions](docs/CertificateCertificateHashResponseDataCertificateExtensions.md)
- [Odin.CertificateCertificateHashResponseDataCertificateExtensionsAuthorityInfoAccess](docs/CertificateCertificateHashResponseDataCertificateExtensionsAuthorityInfoAccess.md)
- [Odin.CertificateCertificateHashResponseDataCertificateExtensionsBasicConstraints](docs/CertificateCertificateHashResponseDataCertificateExtensionsBasicConstraints.md)
- [Odin.CertificateCertificateHashResponseDataCertificateExtensionsCertificatePoliciesInner](docs/CertificateCertificateHashResponseDataCertificateExtensionsCertificatePoliciesInner.md)
- [Odin.CertificateCertificateHashResponseDataCertificateExtensionsExtendedKeyUsage](docs/CertificateCertificateHashResponseDataCertificateExtensionsExtendedKeyUsage.md)
- [Odin.CertificateCertificateHashResponseDataCertificateExtensionsKeyUsage](docs/CertificateCertificateHashResponseDataCertificateExtensionsKeyUsage.md)
- [Odin.CertificateCertificateHashResponseDataCertificateExtensionsSubjectAltName](docs/CertificateCertificateHashResponseDataCertificateExtensionsSubjectAltName.md)
- [Odin.CertificateCertificateHashResponseDataCertificateIssuer](docs/CertificateCertificateHashResponseDataCertificateIssuer.md)
- [Odin.CertificateCertificateHashResponseDataCertificateSignature](docs/CertificateCertificateHashResponseDataCertificateSignature.md)
- [Odin.CertificateCertificateHashResponseDataCertificateSignatureSignatureAlgorithm](docs/CertificateCertificateHashResponseDataCertificateSignatureSignatureAlgorithm.md)
- [Odin.CertificateCertificateHashResponseDataCertificateSubject](docs/CertificateCertificateHashResponseDataCertificateSubject.md)
- [Odin.CertificateCertificateHashResponseDataCertificateSubjectAltName](docs/CertificateCertificateHashResponseDataCertificateSubjectAltName.md)
- [Odin.CertificateCertificateHashResponseDataCertificateSubjectAltNameExtendedDnsNamesInner](docs/CertificateCertificateHashResponseDataCertificateSubjectAltNameExtendedDnsNamesInner.md)
- [Odin.CertificateCertificateHashResponseDataCertificateSubjectKeyInfo](docs/CertificateCertificateHashResponseDataCertificateSubjectKeyInfo.md)
- [Odin.CertificateCertificateHashResponseDataCertificateSubjectKeyInfoPublicKey](docs/CertificateCertificateHashResponseDataCertificateSubjectKeyInfoPublicKey.md)
- [Odin.CertificateCertificateHashResponseDataCertificateValidity](docs/CertificateCertificateHashResponseDataCertificateValidity.md)
- [Odin.CertificateCertificateSearchData](docs/CertificateCertificateSearchData.md)
- [Odin.CertificateCertificateSearchResponse](docs/CertificateCertificateSearchResponse.md)
- [Odin.CertificateCertificateSearchResponsePagination](docs/CertificateCertificateSearchResponsePagination.md)
- [Odin.CertificateCertificateSummaryResponse](docs/CertificateCertificateSummaryResponse.md)
- [Odin.CertificateCertificateSummaryResponseData](docs/CertificateCertificateSummaryResponseData.md)
- [Odin.CertificateCertificateSummaryResponseDataBucketsInner](docs/CertificateCertificateSummaryResponseDataBucketsInner.md)
- [Odin.CertificateErrorResponse](docs/CertificateErrorResponse.md)
- [Odin.CertificateNextBatchRequest](docs/CertificateNextBatchRequest.md)
- [Odin.CertificateSearchPagination](docs/CertificateSearchPagination.md)
- [Odin.CountRequest](docs/CountRequest.md)
- [Odin.CybleComOdinApiControllersV2FieldsAPIResponse](docs/CybleComOdinApiControllersV2FieldsAPIResponse.md)
- [Odin.CybleComOdinApiControllersV2FieldsErrorResponse](docs/CybleComOdinApiControllersV2FieldsErrorResponse.md)
- [Odin.CybleComOdinApiControllersV2FieldsField](docs/CybleComOdinApiControllersV2FieldsField.md)
- [Odin.CybleComOdinApiControllersV2IpservicesAPIResponse](docs/CybleComOdinApiControllersV2IpservicesAPIResponse.md)
- [Odin.CybleComOdinApiControllersV2IpservicesCertCount](docs/CybleComOdinApiControllersV2IpservicesCertCount.md)
- [Odin.CybleComOdinApiControllersV2IpservicesCountRequest](docs/CybleComOdinApiControllersV2IpservicesCountRequest.md)
- [Odin.CybleComOdinApiControllersV2IpservicesErrorResponse](docs/CybleComOdinApiControllersV2IpservicesErrorResponse.md)
- [Odin.CybleComOdinApiControllersV2IpservicesSearchPagination](docs/CybleComOdinApiControllersV2IpservicesSearchPagination.md)
- [Odin.CybleComOdinApiControllersV2IpservicesSearchRequest](docs/CybleComOdinApiControllersV2IpservicesSearchRequest.md)
- [Odin.CybleComOdinApiControllersV2IpservicesSummaryRequest](docs/CybleComOdinApiControllersV2IpservicesSummaryRequest.md)
- [Odin.DnsAPIResponse](docs/DnsAPIResponse.md)
- [Odin.DnsDNSCountRequest](docs/DnsDNSCountRequest.md)
- [Odin.DnsData](docs/DnsData.md)
- [Odin.DnsDomainRequest](docs/DnsDomainRequest.md)
- [Odin.DnsErrorResponse](docs/DnsErrorResponse.md)
- [Odin.DnsSearchPagination](docs/DnsSearchPagination.md)
- [Odin.Encoding](docs/Encoding.md)
- [Odin.ErrorResponse](docs/ErrorResponse.md)
- [Odin.EshandlerAggregate](docs/EshandlerAggregate.md)
- [Odin.EshandlerDNS](docs/EshandlerDNS.md)
- [Odin.EshandlerEXTDNSName](docs/EshandlerEXTDNSName.md)
- [Odin.ExposedAPIResponse](docs/ExposedAPIResponse.md)
- [Odin.ExposedAggregate](docs/ExposedAggregate.md)
- [Odin.ExposedBucket](docs/ExposedBucket.md)
- [Odin.ExposedBucketAPIResponse](docs/ExposedBucketAPIResponse.md)
- [Odin.ExposedCountRequest](docs/ExposedCountRequest.md)
- [Odin.ExposedFile](docs/ExposedFile.md)
- [Odin.ExposedFileAPIResponse](docs/ExposedFileAPIResponse.md)
- [Odin.ExposedSearchCount](docs/ExposedSearchCount.md)
- [Odin.ExposedSearchPagination](docs/ExposedSearchPagination.md)
- [Odin.ExposedSearchRequest](docs/ExposedSearchRequest.md)
- [Odin.ExposedSummaryRequest](docs/ExposedSummaryRequest.md)
- [Odin.Field](docs/Field.md)
- [Odin.IPASN](docs/IPASN.md)
- [Odin.IPCVE](docs/IPCVE.md)
- [Odin.IPDomain](docs/IPDomain.md)
- [Odin.IPExploitDetails](docs/IPExploitDetails.md)
- [Odin.IPHostname](docs/IPHostname.md)
- [Odin.IPLocation](docs/IPLocation.md)
- [Odin.IPService](docs/IPService.md)
- [Odin.IPServiceMeta](docs/IPServiceMeta.md)
- [Odin.IPServiceSoftware](docs/IPServiceSoftware.md)
- [Odin.IPTag](docs/IPTag.md)
- [Odin.IPWhois](docs/IPWhois.md)
- [Odin.IpservicesHostsSummaryResponse](docs/IpservicesHostsSummaryResponse.md)
- [Odin.IpservicesHostsSummaryResponseData](docs/IpservicesHostsSummaryResponseData.md)
- [Odin.IpservicesHostsSummaryResponseDataBucketsInner](docs/IpservicesHostsSummaryResponseDataBucketsInner.md)
- [Odin.IpservicesIPSummaryData](docs/IpservicesIPSummaryData.md)
- [Odin.IpservicesIpCveDetails](docs/IpservicesIpCveDetails.md)
- [Odin.IpservicesIpCveDetailsExploitInner](docs/IpservicesIpCveDetailsExploitInner.md)
- [Odin.IpservicesIpCveResponse](docs/IpservicesIpCveResponse.md)
- [Odin.PaginationStruct](docs/PaginationStruct.md)
- [Odin.SchemaAPIResponse](docs/SchemaAPIResponse.md)
- [Odin.SchemaAudit](docs/SchemaAudit.md)
- [Odin.SchemaContact](docs/SchemaContact.md)
- [Odin.SchemaDomainWhoisResponse](docs/SchemaDomainWhoisResponse.md)
- [Odin.SchemaPaginationMeta](docs/SchemaPaginationMeta.md)
- [Odin.SchemaRegistrar](docs/SchemaRegistrar.md)
- [Odin.SearchPagination](docs/SearchPagination.md)
- [Odin.SearchRequest](docs/SearchRequest.md)
- [Odin.ServiceCoordinates](docs/ServiceCoordinates.md)
- [Odin.ServiceEncoding](docs/ServiceEncoding.md)
- [Odin.ServiceFullCveData](docs/ServiceFullCveData.md)
- [Odin.ServiceIPASN](docs/ServiceIPASN.md)
- [Odin.ServiceIPDomain](docs/ServiceIPDomain.md)
- [Odin.ServiceIPHostname](docs/ServiceIPHostname.md)
- [Odin.ServiceIPLocation](docs/ServiceIPLocation.md)
- [Odin.ServiceIPServiceMeta](docs/ServiceIPServiceMeta.md)
- [Odin.ServiceIPServiceSoftware](docs/ServiceIPServiceSoftware.md)
- [Odin.ServiceIPTag](docs/ServiceIPTag.md)
- [Odin.ServiceIPWhois](docs/ServiceIPWhois.md)
- [Odin.ServiceService](docs/ServiceService.md)
- [Odin.SummaryRequest](docs/SummaryRequest.md)
- [Odin.TokensDetailStat](docs/TokensDetailStat.md)
- [Odin.TokensErrorResponse](docs/TokensErrorResponse.md)
- [Odin.TokensFinalStats](docs/TokensFinalStats.md)
- [Odin.TokensSearchStat](docs/TokensSearchStat.md)
- [Odin.TokensUserTokenStats](docs/TokensUserTokenStats.md)
- [Odin.V1CertificatesCountPost200Response](docs/V1CertificatesCountPost200Response.md)
- [Odin.V1CertificatesScrollNextPost200Response](docs/V1CertificatesScrollNextPost200Response.md)
- [Odin.V1CertificatesScrollPost200Response](docs/V1CertificatesScrollPost200Response.md)
- [Odin.V1DomainCountPost200Response](docs/V1DomainCountPost200Response.md)
- [Odin.V1DomainSearchPost200Response](docs/V1DomainSearchPost200Response.md)
- [Odin.V1DomainSubdomainSearchPost200Response](docs/V1DomainSubdomainSearchPost200Response.md)
- [Odin.V1DomainWhoisDomainNameGet200Response](docs/V1DomainWhoisDomainNameGet200Response.md)
- [Odin.V1DomainWhoisDomainNameHistoricalGet200Response](docs/V1DomainWhoisDomainNameHistoricalGet200Response.md)
- [Odin.V1DomainWhoisDomainNameIsExpiredGet200Response](docs/V1DomainWhoisDomainNameIsExpiredGet200Response.md)
- [Odin.V1ExposedBucketsCountPost200Response](docs/V1ExposedBucketsCountPost200Response.md)
- [Odin.V1ExposedBucketsSummaryPost200Response](docs/V1ExposedBucketsSummaryPost200Response.md)
- [Odin.V1FieldsCertificatesCategoryGet200Response](docs/V1FieldsCertificatesCategoryGet200Response.md)
- [Odin.V1FieldsExposedBucketsGet200Response](docs/V1FieldsExposedBucketsGet200Response.md)
- [Odin.V1HostsCountPost200Response](docs/V1HostsCountPost200Response.md)
- [Odin.V1HostsCountPost400Response](docs/V1HostsCountPost400Response.md)
- [Odin.V1HostsExploitsIpCveGet200Response](docs/V1HostsExploitsIpCveGet200Response.md)
- [Odin.V1HostsIpGet200Response](docs/V1HostsIpGet200Response.md)
- [Odin.V1HostsSearchPost200Response](docs/V1HostsSearchPost200Response.md)
- [Odin.V2HostsCountPost200Response](docs/V2HostsCountPost200Response.md)
- [Odin.V2HostsSearchPost200Response](docs/V2HostsSearchPost200Response.md)
- [Odin.V2HostsSummaryPost200Response](docs/V2HostsSummaryPost200Response.md)
- [Odin.VisionExploitDetails](docs/VisionExploitDetails.md)

## Documentation for Authorization

Authentication schemes defined for the API:

### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header

Generate your [Odin API key from the odin dashboard.](https://search.odin.io/account/api-keys)

Thank you for using the Odin SDK for Javascript. If you encounter any issues, find a bug, or want to contribute, feel free to open an issue or submit a pull request. Your feedback and contributions are highly appreciated!

For more information about our other projects and services, visit our website at <https://odin.io>.
