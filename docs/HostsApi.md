# Odin.HostsApi

All URIs are relative to *https://api.odin.io*

| Method                                                             | HTTP request                          | Description                                    |
| ------------------------------------------------------------------ | ------------------------------------- | ---------------------------------------------- |
| [**v1CvesAllIpPageGet**](HostsApi.md#v1CvesAllIpPageGet)           | **GET** /v1/cves/all/{ip}/{page}      | Get cve details                                |
| [**v1HostsCountPost**](HostsApi.md#v1HostsCountPost)               | **POST** /v1/hosts/count              | Get the record count                           |
| [**v1HostsCveIpGet**](HostsApi.md#v1HostsCveIpGet)                 | **GET** /v1/hosts/cve/{ip}/           | Get ip cve details                             |
| [**v1HostsCvesIpCveGet**](HostsApi.md#v1HostsCvesIpCveGet)         | **GET** /v1/hosts/cves/{ip}/{cve}     | Get cve                                        |
| [**v1HostsExploitsIpCveGet**](HostsApi.md#v1HostsExploitsIpCveGet) | **GET** /v1/hosts/exploits/{ip}/{cve} | Get exploits for ip and cve                    |
| [**v1HostsExploitsIpGet**](HostsApi.md#v1HostsExploitsIpGet)       | **GET** /v1/hosts/exploits/{ip}/      | Get exploits for ip                            |
| [**v1HostsIpGet**](HostsApi.md#v1HostsIpGet)                       | **GET** /v1/hosts/{ip}/               | Get the latest ip details                      |
| [**v1HostsSearchPost**](HostsApi.md#v1HostsSearchPost)             | **POST** /v1/hosts/search             | Search hosts                                   |
| [**v1HostsSummaryPost**](HostsApi.md#v1HostsSummaryPost)           | **POST** /v1/hosts/summary            | Get summary                                    |
| [**v2HostsCountPost**](HostsApi.md#v2HostsCountPost)               | **POST** /v2/hosts/count              | Fetch the record count                         |
| [**v2HostsIpPost**](HostsApi.md#v2HostsIpPost)                     | **POST** /v2/hosts/{ip}               | Fetch the latest ip details                    |
| [**v2HostsSearchPost**](HostsApi.md#v2HostsSearchPost)             | **POST** /v2/hosts/search             | Fetch the record based on query                |
| [**v2HostsSummaryPost**](HostsApi.md#v2HostsSummaryPost)           | **POST** /v2/hosts/summary            | Create the summary of the field based on query |

## v1CvesAllIpPageGet

> IpservicesIpCveResponse v1CvesAllIpPageGet(ip, page)

Get cve details

Get the detailed cve details for ip based on page

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let ip = "ip_example"; // String | get the ip
let page = "page_example"; // String | get the page
apiInstance.v1CvesAllIpPageGet(ip, page, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type       | Description  | Notes |
| -------- | ---------- | ------------ | ----- |
| **ip**   | **String** | get the ip   |
| **page** | **String** | get the page |

### Return type

[**IpservicesIpCveResponse**](IpservicesIpCveResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1HostsCountPost

> V1HostsCountPost200Response v1HostsCountPost(query)

Get the record count

Returns the total no of records based on query

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let query = new Odin.CountRequest(); // CountRequest | Count Query
apiInstance.v1HostsCountPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                | Description | Notes |
| --------- | ----------------------------------- | ----------- | ----- |
| **query** | [**CountRequest**](CountRequest.md) | Count Query |

### Return type

[**V1HostsCountPost200Response**](V1HostsCountPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1HostsCveIpGet

> IpservicesIpCveResponse v1HostsCveIpGet(ip)

Get ip cve details

Get detailed lost of cve ips

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let ip = "ip_example"; // String | get the ip
apiInstance.v1HostsCveIpGet(ip, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **ip** | **String** | get the ip  |

### Return type

[**IpservicesIpCveResponse**](IpservicesIpCveResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1HostsCvesIpCveGet

> IpservicesIpCveResponse v1HostsCvesIpCveGet(ip, cve)

Get cve

Get the detailed cve based on ip and cve

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let ip = "ip_example"; // String | host ip ip
let cve = "cve_example"; // String | cve id
apiInstance.v1HostsCvesIpCveGet(ip, cve, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name    | Type       | Description | Notes |
| ------- | ---------- | ----------- | ----- |
| **ip**  | **String** | host ip ip  |
| **cve** | **String** | cve id      |

### Return type

[**IpservicesIpCveResponse**](IpservicesIpCveResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1HostsExploitsIpCveGet

> V1HostsExploitsIpCveGet200Response v1HostsExploitsIpCveGet(ip, cve)

Get exploits for ip and cve

Get the detailed exploit details for ip and cve

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let ip = "ip_example"; // String | ip address of the host
let cve = "cve_example"; // String | cve id
apiInstance.v1HostsExploitsIpCveGet(ip, cve, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name    | Type       | Description            | Notes |
| ------- | ---------- | ---------------------- | ----- |
| **ip**  | **String** | ip address of the host |
| **cve** | **String** | cve id                 |

### Return type

[**V1HostsExploitsIpCveGet200Response**](V1HostsExploitsIpCveGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1HostsExploitsIpGet

> IpservicesIpCveResponse v1HostsExploitsIpGet(ip)

Get exploits for ip

Get the detailed list of exploits for the ip

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let ip = "ip_example"; // String | get the ip
apiInstance.v1HostsExploitsIpGet(ip, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **ip** | **String** | get the ip  |

### Return type

[**IpservicesIpCveResponse**](IpservicesIpCveResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1HostsIpGet

> V1HostsIpGet200Response v1HostsIpGet(ip)

Get the latest ip details

Get the complete and latest ip details

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let ip = "ip_example"; // String | get the ip
apiInstance.v1HostsIpGet(ip, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **ip** | **String** | get the ip  |

### Return type

[**V1HostsIpGet200Response**](V1HostsIpGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1HostsSearchPost

> V1HostsSearchPost200Response v1HostsSearchPost(query)

Search hosts

Get the detailed list of hosts based on query

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let query = new Odin.SearchRequest(); // SearchRequest | Search Query
apiInstance.v1HostsSearchPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                  | Description  | Notes |
| --------- | ------------------------------------- | ------------ | ----- |
| **query** | [**SearchRequest**](SearchRequest.md) | Search Query |

### Return type

[**V1HostsSearchPost200Response**](V1HostsSearchPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1HostsSummaryPost

> IpservicesHostsSummaryResponse v1HostsSummaryPost(query)

Get summary

Get the summary of hosts based on the field

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let query = new Odin.SummaryRequest(); // SummaryRequest | Summary
apiInstance.v1HostsSummaryPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                    | Description | Notes |
| --------- | --------------------------------------- | ----------- | ----- |
| **query** | [**SummaryRequest**](SummaryRequest.md) | Summary     |

### Return type

[**IpservicesHostsSummaryResponse**](IpservicesHostsSummaryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v2HostsCountPost

> V2HostsCountPost200Response v2HostsCountPost(query)

Fetch the record count

Returns the total no of records based on query

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let query = new Odin.CybleComOdinApiControllersV2IpservicesCountRequest(); // CybleComOdinApiControllersV2IpservicesCountRequest | Count Query
apiInstance.v2HostsCountPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                                                                                            | Description | Notes |
| --------- | --------------------------------------------------------------------------------------------------------------- | ----------- | ----- |
| **query** | [**CybleComOdinApiControllersV2IpservicesCountRequest**](CybleComOdinApiControllersV2IpservicesCountRequest.md) | Count Query |

### Return type

[**V2HostsCountPost200Response**](V2HostsCountPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v2HostsIpPost

> CybleComOdinApiControllersV2IpservicesAPIResponse v2HostsIpPost(ip)

Fetch the latest ip details

Returns the complete ip details

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let ip = "ip_example"; // String | get the ip
apiInstance.v2HostsIpPost(ip, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name   | Type       | Description | Notes |
| ------ | ---------- | ----------- | ----- |
| **ip** | **String** | get the ip  |

### Return type

[**CybleComOdinApiControllersV2IpservicesAPIResponse**](CybleComOdinApiControllersV2IpservicesAPIResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v2HostsSearchPost

> V2HostsSearchPost200Response v2HostsSearchPost(query)

Fetch the record based on query

Returns the record based on query and blank query will return all records. It uses es searchafter for the pagination.

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let query = new Odin.CybleComOdinApiControllersV2IpservicesSearchRequest(); // CybleComOdinApiControllersV2IpservicesSearchRequest | Search Query
apiInstance.v2HostsSearchPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                                                                                              | Description  | Notes |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ------------ | ----- |
| **query** | [**CybleComOdinApiControllersV2IpservicesSearchRequest**](CybleComOdinApiControllersV2IpservicesSearchRequest.md) | Search Query |

### Return type

[**V2HostsSearchPost200Response**](V2HostsSearchPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v2HostsSummaryPost

> V2HostsSummaryPost200Response v2HostsSummaryPost(query)

Create the summary of the field based on query

Returns the summary of the field based on query

### Example

```javascript
import Odin from "odin";
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.HostsApi();
let query = new Odin.CybleComOdinApiControllersV2IpservicesSummaryRequest(); // CybleComOdinApiControllersV2IpservicesSummaryRequest | Summary
apiInstance.v2HostsSummaryPost(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name      | Type                                                                                                                | Description | Notes |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ----------- | ----- |
| **query** | [**CybleComOdinApiControllersV2IpservicesSummaryRequest**](CybleComOdinApiControllersV2IpservicesSummaryRequest.md) | Summary     |

### Return type

[**V2HostsSummaryPost200Response**](V2HostsSummaryPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
