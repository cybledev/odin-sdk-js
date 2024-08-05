# OdinApis.IPApi

All URIs are relative to *http://staging.odinn.tech/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**faviconMurmurGet**](IPApi.md#faviconMurmurGet) | **GET** /favicon/{murmur} | Fetch the latest ip favicon

<a name="faviconMurmurGet"></a>
# **faviconMurmurGet**
> IpservicesAPIResponse faviconMurmurGet(murmur)

Fetch the latest ip favicon

Returns the ip favicon details using murmur hash

### Example
```javascript
import {OdinApis} from 'odin_apis';
let defaultClient = OdinApis.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new OdinApis.IPApi();
let murmur = "murmur_example"; // String | murmur hash

apiInstance.faviconMurmurGet(murmur, (error, data, response) => {
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
 **murmur** | **String**| murmur hash | 

### Return type

[**IpservicesAPIResponse**](IpservicesAPIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

