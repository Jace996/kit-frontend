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



/**
 * 
 * @export
 * @interface V1OAuthClient
 */
export interface V1OAuthClient {
    /**
     * 
     * @type {string}
     * @memberof V1OAuthClient
     */
    'clientId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1OAuthClient
     */
    'clientName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1OAuthClient
     */
    'clientUri'?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1OAuthClient
     */
    'contacts'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1OAuthClient
     */
    'logoUri'?: string | null;
    /**
     * 
     * @type {object}
     * @memberof V1OAuthClient
     */
    'metadata'?: object | null;
    /**
     * 
     * @type {string}
     * @memberof V1OAuthClient
     */
    'owner'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1OAuthClient
     */
    'policyUri'?: string | null;
}

