# Odin.ExposedBucketsApi

All URIs are relative to *https://staging.odinn.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ExposedBucketsCountPost**](ExposedBucketsApi.md#v1ExposedBucketsCountPost) | **POST** /v1/exposed/buckets/count | Get exposed bucket count
[**v1ExposedBucketsSearchPost**](ExposedBucketsApi.md#v1ExposedBucketsSearchPost) | **POST** /v1/exposed/buckets/search | Search exposed buckets
[**v1ExposedBucketsSummaryPost**](ExposedBucketsApi.md#v1ExposedBucketsSummaryPost) | **POST** /v1/exposed/buckets/summary | Get Exposed buckets summary



## v1ExposedBucketsCountPost

> V1ExposedBucketsCountPost200Response v1ExposedBucketsCountPost(query)

Get exposed bucket count

Get exposed bucket count according to provided filters

### Example

```javascript
import Odin from 'odin';
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.ExposedBucketsApi();
let query = new Odin.ExposedCountRequest(); // ExposedCountRequest | Count Request
apiInstance.v1ExposedBucketsCountPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**ExposedCountRequest**](ExposedCountRequest.md)| Count Request | 

### Return type

[**V1ExposedBucketsCountPost200Response**](V1ExposedBucketsCountPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ExposedBucketsSearchPost

> ExposedBucketAPIResponse v1ExposedBucketsSearchPost(query)

Search exposed buckets

Search exposed buckets according to provided filters Search across categories {img, aud, vid, font, doc, src, web, bkup, dbdump} Search across labels {credential, financial, pii, legal, ip, medical, hr, report, confidential, backup, compromised, vulnerable} Search across providers {aws, gcp, do, linode}

### Example

```javascript
import Odin from 'odin';
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.ExposedBucketsApi();
let query = new Odin.ExposedSearchRequest(); // ExposedSearchRequest | Search Query
apiInstance.v1ExposedBucketsSearchPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**ExposedSearchRequest**](ExposedSearchRequest.md)| Search Query | 

### Return type

[**ExposedBucketAPIResponse**](ExposedBucketAPIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ExposedBucketsSummaryPost

> V1ExposedBucketsSummaryPost200Response v1ExposedBucketsSummaryPost(query)

Get Exposed buckets summary

Get Returns exposed buckets aggregated count according to filters

### Example

```javascript
import Odin from 'odin';
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.ExposedBucketsApi();
let query = new Odin.ExposedSummaryRequest(); // ExposedSummaryRequest | Summary Request
apiInstance.v1ExposedBucketsSummaryPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**ExposedSummaryRequest**](ExposedSummaryRequest.md)| Summary Request | 

### Return type

[**V1ExposedBucketsSummaryPost200Response**](V1ExposedBucketsSummaryPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

