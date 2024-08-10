# Odin.FieldsApi

All URIs are relative to *https://api.odin.io*

| Method                                                                              | HTTP request                                | Description                     |
| ----------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------- |
| [**v1FieldsCertificatesCategoryGet**](FieldsApi.md#v1FieldsCertificatesCategoryGet) | **GET** /v1/fields/certificates/{category}/ | Get the fields for certificates |
| [**v1FieldsExposedBucketsGet**](FieldsApi.md#v1FieldsExposedBucketsGet)             | **GET** /v1/fields/exposed/buckets/         | Get the fields for exposed      |
| [**v1FieldsExposedFilesGet**](FieldsApi.md#v1FieldsExposedFilesGet)                 | **GET** /v1/fields/exposed/files/           | Get the fields data             |
| [**v1FieldsHostsCategoryGet**](FieldsApi.md#v1FieldsHostsCategoryGet)               | **GET** /v1/fields/hosts/{category}/        | Get the fields for hosts        |

## v1FieldsCertificatesCategoryGet

> V1FieldsCertificatesCategoryGet200Response v1FieldsCertificatesCategoryGet(category)

Get the fields for certificates

Get the list of fields to query upon certificates

### Example

```javascript
import Odin from "odin";

let apiInstance = new Odin.FieldsApi();
let category = "category_example"; // String | get the category
apiInstance.v1FieldsCertificatesCategoryGet(
  category,
  (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: " + data);
    }
  }
);
```

### Parameters

| Name         | Type       | Description      | Notes |
| ------------ | ---------- | ---------------- | ----- |
| **category** | **String** | get the category |

### Return type

[**V1FieldsCertificatesCategoryGet200Response**](V1FieldsCertificatesCategoryGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1FieldsExposedBucketsGet

> V1FieldsExposedBucketsGet200Response v1FieldsExposedBucketsGet()

Get the fields for exposed

Get the list of fields that can be used to query on exposed buckets and files

### Example

```javascript
import Odin from "odin";

let apiInstance = new Odin.FieldsApi();
apiInstance.v1FieldsExposedBucketsGet((error, data, response) => {
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

[**V1FieldsExposedBucketsGet200Response**](V1FieldsExposedBucketsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1FieldsExposedFilesGet

> V1FieldsExposedBucketsGet200Response v1FieldsExposedFilesGet()

Get the fields data

Returns the fields data

### Example

```javascript
import Odin from "odin";

let apiInstance = new Odin.FieldsApi();
apiInstance.v1FieldsExposedFilesGet((error, data, response) => {
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

[**V1FieldsExposedBucketsGet200Response**](V1FieldsExposedBucketsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## v1FieldsHostsCategoryGet

> V1FieldsCertificatesCategoryGet200Response v1FieldsHostsCategoryGet(category)

Get the fields for hosts

Get the list of fields to query on host

### Example

```javascript
import Odin from "odin";

let apiInstance = new Odin.FieldsApi();
let category = "category_example"; // String | get the category
apiInstance.v1FieldsHostsCategoryGet(category, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
});
```

### Parameters

| Name         | Type       | Description      | Notes |
| ------------ | ---------- | ---------------- | ----- |
| **category** | **String** | get the category |

### Return type

[**V1FieldsCertificatesCategoryGet200Response**](V1FieldsCertificatesCategoryGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
