# OdinApis.DnsApi

All URIs are relative to *https://api.odin.io/v1/*

| Method                                                             | HTTP request                     | Description       |
| ------------------------------------------------------------------ | -------------------------------- | ----------------- |
| [**dnsSearchPost**](DnsApi.md#dnsSearchPost)                       | **POST** /dns/search             | Search subdomains |
| [**domainCountPost**](DnsApi.md#domainCountPost)                   | **POST** /domain/count           | Get records count |
| [**domainSearchPost**](DnsApi.md#domainSearchPost)                 | **POST** /domain/search          | Search subdomains |
| [**domainSubdomainCountPost**](DnsApi.md#domainSubdomainCountPost) | **POST** /domain/subdomain/count | Get records count |

<a name="dnsSearchPost"></a>

# **dnsSearchPost**

> InlineResponse2003 dnsSearchPost(body)

Search subdomains

Search subdomains based on the query

### Example

```javascript
import { OdinApis } from "odin_apis";

let apiInstance = new OdinApis.DnsApi();
let body = new OdinApis.DnsDNSRequest(); // DnsDNSRequest | Query

apiInstance.dnsSearchPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                  | Description | Notes |
| -------- | ------------------------------------- | ----------- | ----- |
| **body** | [**DnsDNSRequest**](DnsDNSRequest.md) | Query       |

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: _/_
- **Accept**: application/json

<a name="domainCountPost"></a>

# **domainCountPost**

> InlineResponse2004 domainCountPost(body)

Get records count

Get count of records based on query

### Example

```javascript
import { OdinApis } from "odin_apis";

let apiInstance = new OdinApis.DnsApi();
let body = new OdinApis.DnsDNSCountRequest(); // DnsDNSCountRequest | Query

apiInstance.domainCountPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                            | Description | Notes |
| -------- | ----------------------------------------------- | ----------- | ----- |
| **body** | [**DnsDNSCountRequest**](DnsDNSCountRequest.md) | Query       |

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: _/_
- **Accept**: application/json

<a name="domainSearchPost"></a>

# **domainSearchPost**

> InlineResponse2003 domainSearchPost(body)

Search subdomains

Search subdomains based on the query

### Example

```javascript
import { OdinApis } from "odin_apis";

let apiInstance = new OdinApis.DnsApi();
let body = new OdinApis.DnsDNSRequest(); // DnsDNSRequest | Query

apiInstance.domainSearchPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                  | Description | Notes |
| -------- | ------------------------------------- | ----------- | ----- |
| **body** | [**DnsDNSRequest**](DnsDNSRequest.md) | Query       |

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: _/_
- **Accept**: application/json

<a name="domainSubdomainCountPost"></a>

# **domainSubdomainCountPost**

> InlineResponse2004 domainSubdomainCountPost(body)

Get records count

Get count of subdomain records based on query

### Example

```javascript
import { OdinApis } from "odin_apis";

let apiInstance = new OdinApis.DnsApi();
let body = new OdinApis.DnsDNSCountRequest(); // DnsDNSCountRequest | Query

apiInstance.domainSubdomainCountPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name     | Type                                            | Description | Notes |
| -------- | ----------------------------------------------- | ----------- | ----- |
| **body** | [**DnsDNSCountRequest**](DnsDNSCountRequest.md) | Query       |

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: _/_
- **Accept**: application/json
