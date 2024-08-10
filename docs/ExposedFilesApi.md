# Odin.ExposedFilesApi

All URIs are relative to *https://api.odin.io*

| Method                                                                        | HTTP request                       | Description          |
| ----------------------------------------------------------------------------- | ---------------------------------- | -------------------- |
| [**v1ExposedFilesCountPost**](ExposedFilesApi.md#v1ExposedFilesCountPost)     | **POST** /v1/exposed/files/count   | Get file count       |
| [**v1ExposedFilesSearchPost**](ExposedFilesApi.md#v1ExposedFilesSearchPost)   | **POST** /v1/exposed/files/search  | Search exposed files |
| [**v1ExposedFilesSummaryPost**](ExposedFilesApi.md#v1ExposedFilesSummaryPost) | **POST** /v1/exposed/files/summary | Get file summary     |

## v1ExposedFilesCountPost

> V1ExposedBucketsCountPost200Response v1ExposedFilesCountPost(query)

Get file count

Returns overall count of exposed bucket files according to filters

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.ExposedFilesApi();
let query = new Odin.ExposedCountRequest(); // ExposedCountRequest | Count Request
apiInstance.v1ExposedFilesCountPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                              | Description   | Notes |
| --------- | ------------------------------------------------- | ------------- | ----- |
| **query** | [**ExposedCountRequest**](ExposedCountRequest.md) | Count Request |

### Return type

[**V1ExposedBucketsCountPost200Response**](V1ExposedBucketsCountPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1ExposedFilesSearchPost

> ExposedFileAPIResponse v1ExposedFilesSearchPost(query)

Search exposed files

Search exposed files using advanved filters Search across categories {img, aud, vid, font, txt, doc, src, db, march, arch, 3d, exec, key, cert} Search across labels {credential, financial, pii, legal, ip, medical, hr, report, confidential, backup, compromised, vulnerable} Search across providers {aws, gcp, do, linode}

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.ExposedFilesApi();
let query = new Odin.ExposedSearchRequest(); // ExposedSearchRequest | Search Query
apiInstance.v1ExposedFilesSearchPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                                | Description  | Notes |
| --------- | --------------------------------------------------- | ------------ | ----- |
| **query** | [**ExposedSearchRequest**](ExposedSearchRequest.md) | Search Query |

### Return type

[**ExposedFileAPIResponse**](ExposedFileAPIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1ExposedFilesSummaryPost

> V1ExposedBucketsSummaryPost200Response v1ExposedFilesSummaryPost(query)

Get file summary

Returns a summary of exposed bucket files according to provided filters

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.ExposedFilesApi();
let query = new Odin.ExposedSummaryRequest(); // ExposedSummaryRequest | Summary Request
apiInstance.v1ExposedFilesSummaryPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                                  | Description     | Notes |
| --------- | ----------------------------------------------------- | --------------- | ----- |
| **query** | [**ExposedSummaryRequest**](ExposedSummaryRequest.md) | Summary Request |

### Return type

[**V1ExposedBucketsSummaryPost200Response**](V1ExposedBucketsSummaryPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
