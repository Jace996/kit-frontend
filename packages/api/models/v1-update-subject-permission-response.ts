/* tslint:disable */
/* eslint-disable */
/**
 * order/api/order/v1/order.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { V1Permission } from './v1-permission';

/**
 * 
 * @export
 * @interface V1UpdateSubjectPermissionResponse
 */
export interface V1UpdateSubjectPermissionResponse {
    /**
     * 
     * @type {Array<V1Permission>}
     * @memberof V1UpdateSubjectPermissionResponse
     */
    'acl'?: Array<V1Permission>;
}

