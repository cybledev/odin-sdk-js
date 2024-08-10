# OdinApis.CreditsApi

All URIs are relative to *https://api.odin.io/v1/*

| Method                                               | HTTP request           | Description                              |
| ---------------------------------------------------- | ---------------------- | ---------------------------------------- |
| [**creditsUsageGet**](CreditsApi.md#creditsUsageGet) | **GET** /credits/usage | Get the user&#x27;s credit usage details |

<a name="creditsUsageGet"></a>

# **creditsUsageGet**

> TokensUserTokenStats creditsUsageGet()

Get the user&#x27;s credit usage details

Get the user&#x27;s credit usage details

### Example

```javascript
import { OdinApis } from "odin_apis";
let defaultClient = OdinApis.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new OdinApis.CreditsApi();
apiInstance.creditsUsageGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TokensUserTokenStats**](TokensUserTokenStats.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
