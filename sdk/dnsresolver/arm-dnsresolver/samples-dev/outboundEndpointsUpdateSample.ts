/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  OutboundEndpointPatch,
  DnsResolverManagementClient
} from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates an outbound endpoint for a DNS resolver.
 *
 * @summary Updates an outbound endpoint for a DNS resolver.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2020-04-01-preview/examples/OutboundEndpoint_Patch.json
 */
async function updateOutboundEndpointForDnsResolver() {
  const subscriptionId = "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName = "sampleResourceGroup";
  const dnsResolverName = "sampleDnsResolver";
  const outboundEndpointName = "sampleOutboundEndpoint";
  const parameters: OutboundEndpointPatch = { tags: { key1: "value1" } };
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.outboundEndpoints.beginUpdateAndWait(
    resourceGroupName,
    dnsResolverName,
    outboundEndpointName,
    parameters
  );
  console.log(result);
}

updateOutboundEndpointForDnsResolver().catch(console.error);