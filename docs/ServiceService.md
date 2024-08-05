# Odin.ServiceService

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**ServiceIPServiceMeta**](ServiceIPServiceMeta.md) |  | [optional] 
**asn** | [**ServiceIPASN**](ServiceIPASN.md) |  | [optional] 
**asnUpdatedAt** | **String** |  | [optional] 
**banners** | **[String]** |  | [optional] 
**cve** | [**[ServiceFullCveData]**](ServiceFullCveData.md) |  | [optional] 
**domains** | [**[ServiceIPDomain]**](ServiceIPDomain.md) |  | [optional] 
**extraInfo** | **String** |  | [optional] 
**hostnames** | [**[ServiceIPHostname]**](ServiceIPHostname.md) |  | [optional] 
**ip** | **String** |  | [optional] 
**isIpv4** | **Boolean** |  | [optional] 
**isIpv6** | **Boolean** |  | [optional] 
**isVuln** | **Boolean** |  | [optional] 
**lastUpdatedAt** | **String** |  | [optional] 
**location** | [**ServiceIPLocation**](ServiceIPLocation.md) |  | [optional] 
**locationUpdatedAt** | **String** |  | [optional] 
**modules** | **{String: Object}** | services.tls -&gt; services.modules.tls key names - if you mess up the key names | [optional] 
**name** | **String** |  | [optional] 
**port** | **Number** |  | [optional] 
**product** | **String** |  | [optional] 
**protocol** | **String** |  | [optional] 
**scanId** | **Number** |  | [optional] 
**softwares** | [**[ServiceIPServiceSoftware]**](ServiceIPServiceSoftware.md) |  | [optional] 
**tags** | [**[ServiceIPTag]**](ServiceIPTag.md) |  | [optional] 
**tunnel** | **String** |  | [optional] 
**version** | **String** |  | [optional] 
**whois** | [**ServiceIPWhois**](ServiceIPWhois.md) |  | [optional] 
**whoisUpdatedAt** | **String** |  | [optional] 


