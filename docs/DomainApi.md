# Odin.DomainApi

All URIs are relative to *https://staging.odinn.tech*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1DomainCountPost**](DomainApi.md#v1DomainCountPost) | **POST** /v1/domain/count | Get domains count
[**v1DomainSearchPost**](DomainApi.md#v1DomainSearchPost) | **POST** /v1/domain/search | Search domains
[**v1DomainSubdomainCountPost**](DomainApi.md#v1DomainSubdomainCountPost) | **POST** /v1/domain/subdomain/count | Fetch the total no. of subdomain records
[**v1DomainSubdomainSearchPost**](DomainApi.md#v1DomainSubdomainSearchPost) | **POST** /v1/domain/subdomain/search | Fetch the subdomain record
[**v1DomainWhoisDomainNameGet**](DomainApi.md#v1DomainWhoisDomainNameGet) | **GET** /v1/domain/whois/{domain-name} | Fetch the domain whois record details
[**v1DomainWhoisDomainNameHistoricalGet**](DomainApi.md#v1DomainWhoisDomainNameHistoricalGet) | **GET** /v1/domain/whois/{domain-name}/historical | Fetch all the domain whois historical records
[**v1DomainWhoisDomainNameIsExpiredGet**](DomainApi.md#v1DomainWhoisDomainNameIsExpiredGet) | **GET** /v1/domain/whois/{domain-name}/is-expired | Get the expiry for a particular domain
[**v1DomainWhoisDomainNameIsRegisteredGet**](DomainApi.md#v1DomainWhoisDomainNameIsRegisteredGet) | **GET** /v1/domain/whois/{domain-name}/is-registered | Fetch all the domain whois historical records



## v1DomainCountPost

> V1DomainCountPost200Response v1DomainCountPost(query)

Get domains count

Get count of domain records based on query

### Example

```javascript
import Odin from 'odin';

let apiInstance = new Odin.DomainApi();
let query = new Odin.DnsDNSCountRequest(); // DnsDNSCountRequest | Query
apiInstance.v1DomainCountPost(query, (error, data, response) => {
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
 **query** | [**DnsDNSCountRequest**](DnsDNSCountRequest.md)| Query | 

### Return type

[**V1DomainCountPost200Response**](V1DomainCountPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DomainSearchPost

> V1DomainSearchPost200Response v1DomainSearchPost(query)

Search domains

Search domains based on the query

### Example

```javascript
import Odin from 'odin';

let apiInstance = new Odin.DomainApi();
let query = new Odin.DnsDomainRequest(); // DnsDomainRequest | Query
apiInstance.v1DomainSearchPost(query, (error, data, response) => {
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
 **query** | [**DnsDomainRequest**](DnsDomainRequest.md)| Query | 

### Return type

[**V1DomainSearchPost200Response**](V1DomainSearchPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DomainSubdomainCountPost

> V1DomainCountPost200Response v1DomainSubdomainCountPost(query)

Fetch the total no. of subdomain records

Returns the count of subdomain records based on domain

### Example

```javascript
import Odin from 'odin';
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.DomainApi();
let query = new Odin.DnsDNSCountRequest(); // DnsDNSCountRequest | Query
apiInstance.v1DomainSubdomainCountPost(query, (error, data, response) => {
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
 **query** | [**DnsDNSCountRequest**](DnsDNSCountRequest.md)| Query | 

### Return type

[**V1DomainCountPost200Response**](V1DomainCountPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DomainSubdomainSearchPost

> V1DomainSubdomainSearchPost200Response v1DomainSubdomainSearchPost(query)

Fetch the subdomain record

Returns the subdomain records based on query

### Example

```javascript
import Odin from 'odin';
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.DomainApi();
let query = new Odin.DnsDomainRequest(); // DnsDomainRequest | Query
apiInstance.v1DomainSubdomainSearchPost(query, (error, data, response) => {
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
 **query** | [**DnsDomainRequest**](DnsDomainRequest.md)| Query | 

### Return type

[**V1DomainSubdomainSearchPost200Response**](V1DomainSubdomainSearchPost200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DomainWhoisDomainNameGet

> V1DomainWhoisDomainNameGet200Response v1DomainWhoisDomainNameGet(domainName)

Fetch the domain whois record details

Provides extensive details about the domain whois record like name servers, domain status, registrar, etc.

### Example

```javascript
import Odin from 'odin';
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.DomainApi();
let domainName = "domainName_example"; // String | domain
apiInstance.v1DomainWhoisDomainNameGet(domainName, (error, data, response) => {
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
 **domainName** | **String**| domain | 

### Return type

[**V1DomainWhoisDomainNameGet200Response**](V1DomainWhoisDomainNameGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DomainWhoisDomainNameHistoricalGet

> V1DomainWhoisDomainNameHistoricalGet200Response v1DomainWhoisDomainNameHistoricalGet(domainName)

Fetch all the domain whois historical records

Provides historical details about the domain whois record like name servers, domain status, registrar, etc

### Example

```javascript
import Odin from 'odin';
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.DomainApi();
let domainName = "domainName_example"; // String | domain
apiInstance.v1DomainWhoisDomainNameHistoricalGet(domainName, (error, data, response) => {
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
 **domainName** | **String**| domain | 

### Return type

[**V1DomainWhoisDomainNameHistoricalGet200Response**](V1DomainWhoisDomainNameHistoricalGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DomainWhoisDomainNameIsExpiredGet

> V1DomainWhoisDomainNameIsExpiredGet200Response v1DomainWhoisDomainNameIsExpiredGet(domainName)

Get the expiry for a particular domain

Provides historical details about the domain whois record like name servers, domain status, registrar, etc

### Example

```javascript
import Odin from 'odin';
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.DomainApi();
let domainName = "domainName_example"; // String | domain
apiInstance.v1DomainWhoisDomainNameIsExpiredGet(domainName, (error, data, response) => {
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
 **domainName** | **String**| domain | 

### Return type

[**V1DomainWhoisDomainNameIsExpiredGet200Response**](V1DomainWhoisDomainNameIsExpiredGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DomainWhoisDomainNameIsRegisteredGet

> V1DomainWhoisDomainNameIsExpiredGet200Response v1DomainWhoisDomainNameIsRegisteredGet(domainName)

Fetch all the domain whois historical records

Provides historical details about the domain whois record like name servers, domain status, registrar, etc

### Example

```javascript
import Odin from 'odin';
let defaultClient = Odin.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new Odin.DomainApi();
let domainName = "domainName_example"; // String | domain
apiInstance.v1DomainWhoisDomainNameIsRegisteredGet(domainName, (error, data, response) => {
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
 **domainName** | **String**| domain | 

### Return type

[**V1DomainWhoisDomainNameIsExpiredGet200Response**](V1DomainWhoisDomainNameIsExpiredGet200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

