/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedInstanceDtcs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ManagedInstanceDtc,
  ManagedInstanceDtcsListByManagedInstanceNextOptionalParams,
  ManagedInstanceDtcsListByManagedInstanceOptionalParams,
  ManagedInstanceDtcsListByManagedInstanceResponse,
  DtcName,
  ManagedInstanceDtcsGetOptionalParams,
  ManagedInstanceDtcsGetResponse,
  ManagedInstanceDtcsCreateOrUpdateOptionalParams,
  ManagedInstanceDtcsCreateOrUpdateResponse,
  ManagedInstanceDtcsListByManagedInstanceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedInstanceDtcs operations. */
export class ManagedInstanceDtcsImpl implements ManagedInstanceDtcs {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedInstanceDtcs class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of managed instance DTC settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  public listByManagedInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceDtcsListByManagedInstanceOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceDtc> {
    const iter = this.listByManagedInstancePagingAll(
      resourceGroupName,
      managedInstanceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByManagedInstancePagingPage(
          resourceGroupName,
          managedInstanceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByManagedInstancePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceDtcsListByManagedInstanceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ManagedInstanceDtc[]> {
    let result: ManagedInstanceDtcsListByManagedInstanceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByManagedInstance(
        resourceGroupName,
        managedInstanceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByManagedInstanceNext(
        resourceGroupName,
        managedInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByManagedInstancePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceDtcsListByManagedInstanceOptionalParams
  ): AsyncIterableIterator<ManagedInstanceDtc> {
    for await (const page of this.listByManagedInstancePagingPage(
      resourceGroupName,
      managedInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of managed instance DTC settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  private _listByManagedInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceDtcsListByManagedInstanceOptionalParams
  ): Promise<ManagedInstanceDtcsListByManagedInstanceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options },
      listByManagedInstanceOperationSpec
    );
  }

  /**
   * Gets managed instance DTC settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param dtcName The name of the managed instance DTC.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    dtcName: DtcName,
    options?: ManagedInstanceDtcsGetOptionalParams
  ): Promise<ManagedInstanceDtcsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, dtcName, options },
      getOperationSpec
    );
  }

  /**
   * Updates managed instance DTC settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param dtcName The name of the managed instance DTC.
   * @param parameters Managed instance DTC settings.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    dtcName: DtcName,
    parameters: ManagedInstanceDtc,
    options?: ManagedInstanceDtcsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedInstanceDtcsCreateOrUpdateResponse>,
      ManagedInstanceDtcsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedInstanceDtcsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        managedInstanceName,
        dtcName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ManagedInstanceDtcsCreateOrUpdateResponse,
      OperationState<ManagedInstanceDtcsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates managed instance DTC settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param dtcName The name of the managed instance DTC.
   * @param parameters Managed instance DTC settings.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    dtcName: DtcName,
    parameters: ManagedInstanceDtc,
    options?: ManagedInstanceDtcsCreateOrUpdateOptionalParams
  ): Promise<ManagedInstanceDtcsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      managedInstanceName,
      dtcName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByManagedInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByManagedInstance method.
   * @param options The options parameters.
   */
  private _listByManagedInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: ManagedInstanceDtcsListByManagedInstanceNextOptionalParams
  ): Promise<ManagedInstanceDtcsListByManagedInstanceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, nextLink, options },
      listByManagedInstanceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByManagedInstanceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/dtc",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceDtcListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/dtc/{dtcName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceDtc
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.dtcName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/dtc/{dtcName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceDtc
    },
    201: {
      bodyMapper: Mappers.ManagedInstanceDtc
    },
    202: {
      bodyMapper: Mappers.ManagedInstanceDtc
    },
    204: {
      bodyMapper: Mappers.ManagedInstanceDtc
    },
    default: {}
  },
  requestBody: Parameters.parameters82,
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.dtcName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByManagedInstanceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceDtcListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
