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
import { V1Effect } from './v1-effect';

/**
 * 
 * @export
 * @interface V1AddSubjectPermissionRequest
 */
export interface V1AddSubjectPermissionRequest {
    /**
     * 
     * @type {string}
     * @memberof V1AddSubjectPermissionRequest
     */
    'namespace': string;
    /**
     * 
     * @type {string}
     * @memberof V1AddSubjectPermissionRequest
     */
    'resource': string;
    /**
     * 
     * @type {string}
     * @memberof V1AddSubjectPermissionRequest
     */
    'action': string;
    /**
     * 
     * @type {string}
     * @memberof V1AddSubjectPermissionRequest
     */
    'subject': string;
    /**
     * 
     * @type {V1Effect}
     * @memberof V1AddSubjectPermissionRequest
     */
    'effect': V1Effect;
    /**
     * 
     * @type {string}
     * @memberof V1AddSubjectPermissionRequest
     */
    'tenantId'?: string;
}



