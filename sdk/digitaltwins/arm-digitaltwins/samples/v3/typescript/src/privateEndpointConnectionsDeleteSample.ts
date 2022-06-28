/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureDigitalTwinsManagementClient } from "@azure/arm-digitaltwins";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete private endpoint connection with the specified name.
 *
 * @summary Delete private endpoint connection with the specified name.
 * x-ms-original-file: specification/digitaltwins/resource-manager/Microsoft.DigitalTwins/stable/2022-05-31/examples/PrivateEndpointConnectionDelete_example.json
 */
async function deletePrivateEndpointConnectionWithTheSpecifiedName() {
  const subscriptionId = "50016170-c839-41ba-a724-51e9df440b9e";
  const resourceGroupName = "resRg";
  const resourceName = "myDigitalTwinsService";
  const privateEndpointConnectionName = "myPrivateConnection";
  const credential = new DefaultAzureCredential();
  const client = new AzureDigitalTwinsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.privateEndpointConnections.beginDeleteAndWait(
    resourceGroupName,
    resourceName,
    privateEndpointConnectionName
  );
  console.log(result);
}

deletePrivateEndpointConnectionWithTheSpecifiedName().catch(console.error);