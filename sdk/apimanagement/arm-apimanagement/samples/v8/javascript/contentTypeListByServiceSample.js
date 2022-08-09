/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ApiManagementClient } = require("@azure/arm-apimanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists the developer portal's content types. Content types describe content items' properties, validation rules, and constraints.
 *
 * @summary Lists the developer portal's content types. Content types describe content items' properties, validation rules, and constraints.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementListContentTypes.json
 */
async function apiManagementListContentTypes() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.contentType.listByService(resourceGroupName, serviceName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

apiManagementListContentTypes().catch(console.error);