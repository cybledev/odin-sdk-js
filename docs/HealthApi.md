# Odin.HealthApi

All URIs are relative to *https://staging.odinn.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PingGet**](HealthApi.md#v1PingGet) | **GET** /v1/ping | Health Check



## v1PingGet

> String v1PingGet()

Health Check

Returns the pong as response

### Example

```javascript
import Odin from 'odin';

let apiInstance = new Odin.HealthApi();
apiInstance.v1PingGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

