# Odin.CertificateApi

All URIs are relative to *https://api.odin.io*

| Method                                                                             | HTTP request                          | Description                   |
| ---------------------------------------------------------------------------------- | ------------------------------------- | ----------------------------- |
| [**v1CertificatesCountPost**](CertificateApi.md#v1CertificatesCountPost)           | **POST** /v1/certificates/count       | Get records count             |
| [**v1CertificatesHashGet**](CertificateApi.md#v1CertificatesHashGet)               | **GET** /v1/certificates/{hash}       | Get the complete certificate  |
| [**v1CertificatesScrollNextPost**](CertificateApi.md#v1CertificatesScrollNextPost) | **POST** /v1/certificates/scroll/next | Get the next batch of record  |
| [**v1CertificatesScrollPost**](CertificateApi.md#v1CertificatesScrollPost)         | **POST** /v1/certificates/scroll      | Get the record based on query |
| [**v1CertificatesSearchPost**](CertificateApi.md#v1CertificatesSearchPost)         | **POST** /v1/certificates/search      | Search records                |
| [**v1CertificatesSummaryPost**](CertificateApi.md#v1CertificatesSummaryPost)       | **POST** /v1/certificates/summary     | Get summary                   |

## v1CertificatesCountPost

> V1CertificatesCountPost200Response v1CertificatesCountPost(query)

Get records count

Get total no of records based on query

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.CertificateApi();
let query = new Odin.CertificateCertCountRequest(); // CertificateCertCountRequest | Count Query
apiInstance.v1CertificatesCountPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                                              | Description | Notes |
| --------- | ----------------------------------------------------------------- | ----------- | ----- |
| **query** | [**CertificateCertCountRequest**](CertificateCertCountRequest.md) | Count Query |

### Return type

[**V1CertificatesCountPost200Response**](V1CertificatesCountPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1CertificatesHashGet

> CertificateCertificateHashResponse v1CertificatesHashGet(hash)

Get the complete certificate

Get the complete certificate based on provided hash

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.CertificateApi();
let hash = "hash_example"; // String | get the complete cert by hash
apiInstance.v1CertificatesHashGet(hash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type       | Description                   | Notes |
| -------- | ---------- | ----------------------------- | ----- |
| **hash** | **String** | get the complete cert by hash |

### Return type

[**CertificateCertificateHashResponse**](CertificateCertificateHashResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1CertificatesScrollNextPost

> V1CertificatesScrollNextPost200Response v1CertificatesScrollNextPost(query)

Get the next batch of record

Get the next batch of record based on query. It uses es scroll api for the pagination.

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.CertificateApi();
let query = new Odin.CertificateNextBatchRequest(); // CertificateNextBatchRequest | Search Query
apiInstance.v1CertificatesScrollNextPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                                              | Description  | Notes |
| --------- | ----------------------------------------------------------------- | ------------ | ----- |
| **query** | [**CertificateNextBatchRequest**](CertificateNextBatchRequest.md) | Search Query |

### Return type

[**V1CertificatesScrollNextPost200Response**](V1CertificatesScrollNextPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1CertificatesScrollPost

> V1CertificatesScrollPost200Response v1CertificatesScrollPost(query)

Get the record based on query

Get the record based on query. It uses es scroll api for the pagination.

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.CertificateApi();
let query = new Odin.CertificateCertScrollRequest(); // CertificateCertScrollRequest | Search Query
apiInstance.v1CertificatesScrollPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                                                | Description  | Notes |
| --------- | ------------------------------------------------------------------- | ------------ | ----- |
| **query** | [**CertificateCertScrollRequest**](CertificateCertScrollRequest.md) | Search Query |

### Return type

[**V1CertificatesScrollPost200Response**](V1CertificatesScrollPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1CertificatesSearchPost

> CertificateCertificateSearchResponse v1CertificatesSearchPost(query)

Search records

Search record baseds based on the query

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.CertificateApi();
let query = new Odin.CertificateCertSearchRequest(); // CertificateCertSearchRequest | Search Query
apiInstance.v1CertificatesSearchPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                                                | Description  | Notes |
| --------- | ------------------------------------------------------------------- | ------------ | ----- |
| **query** | [**CertificateCertSearchRequest**](CertificateCertSearchRequest.md) | Search Query |

### Return type

[**CertificateCertificateSearchResponse**](CertificateCertificateSearchResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1CertificatesSummaryPost

> CertificateCertificateSummaryResponse v1CertificatesSummaryPost(query)

Get summary

Get summary of records based on the query

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.CertificateApi();
let query = new Odin.CertificateCertSummaryRequest(); // CertificateCertSummaryRequest | Summary
apiInstance.v1CertificatesSummaryPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                                                  | Description | Notes |
| --------- | --------------------------------------------------------------------- | ----------- | ----- |
| **query** | [**CertificateCertSummaryRequest**](CertificateCertSummaryRequest.md) | Summary     |

### Return type

[**CertificateCertificateSummaryResponse**](CertificateCertificateSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
