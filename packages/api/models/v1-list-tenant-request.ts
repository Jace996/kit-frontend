/* tslint:disable */
/* eslint-disable */
/**
 * Realtime Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { V1TenantFilter } from './v1-tenant-filter';

/**
 * 
 * @export
 * @interface V1ListTenantRequest
 */
export interface V1ListTenantRequest {
    /**
     * 
     * @type {number}
     * @memberof V1ListTenantRequest
     */
    'pageOffset'?: number;
    /**
     * 
     * @type {number}
     * @memberof V1ListTenantRequest
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof V1ListTenantRequest
     */
    'search'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ListTenantRequest
     */
    'sort'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1ListTenantRequest
     */
    'fields'?: string;
    /**
     * 
     * @type {V1TenantFilter}
     * @memberof V1ListTenantRequest
     */
    'filter'?: V1TenantFilter;
}

