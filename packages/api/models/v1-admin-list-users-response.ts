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
import { V1User } from './v1-user';

/**
 * 
 * @export
 * @interface V1AdminListUsersResponse
 */
export interface V1AdminListUsersResponse {
    /**
     * 
     * @type {number}
     * @memberof V1AdminListUsersResponse
     */
    'totalSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof V1AdminListUsersResponse
     */
    'filterSize'?: number;
    /**
     * 
     * @type {Array<V1User>}
     * @memberof V1AdminListUsersResponse
     */
    'items'?: Array<V1User>;
}

