# Odin SDK for Javascript

ODIN's primary focus is to equip infosec teams with a precise depiction of the internet, enabling them to strengthen their security defences and proactively detect threats within their attack surface.

The Odin SDK for Javascript allows you to easily interact with the [Odin API](https://getodin.com) and access various cybersecurity services, certificate information, and more.

## Installation

To use the Odin SDK in your Javascript project, you need to install it using npm:

```bash
npm install odin-sdk-js
```

## Examples

Here is the [Example](https://github.com/cybledev/odin-sdk-js/blob/main/examples/examples.js), you can find various usage examples demonstrating how to interact with the Odin API using the `odin-sdk-js` package.

Each example is a standalone javascript program that showcases specific functionalities of the SDK.

```javascript
const { APIClient } = require("odin-sdk-js");

const apiKey = "<APIKey>";
const baseUrl = "https://api.getodin.com/v1";

const client = new APIClient(baseUrl, apiKey);

(async () => {
  try {
    // Get the count of hosts
    const hostCount = await client.getHostsCount("string");
    console.log("Hosts Count:", hostCount);
    } catch (error) {
    console.error("Error:", error);
  }
})();
```

Make sure to replace `<APIKey>` with your actual Odin API key. 


Thank you for using the Odin SDK for javascript. If you encounter any issues, find a bug, or want to contribute, feel free to open an issue or submit a pull request. Your feedback and contributions are highly appreciated!

For more information about our other projects and services, visit our website at https://www.getodin.com.