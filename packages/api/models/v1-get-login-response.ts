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
import { V1OAuthProvider } from './v1-oauth-provider';

/**
 * 
 * @export
 * @interface V1GetLoginResponse
 */
export interface V1GetLoginResponse {
    /**
     * 
     * @type {string}
     * @memberof V1GetLoginResponse
     */
    'redirect'?: string;
    /**
     * 
     * @type {Array<V1OAuthProvider>}
     * @memberof V1GetLoginResponse
     */
    'oauth'?: Array<V1OAuthProvider>;
    /**
     * 
     * @type {string}
     * @memberof V1GetLoginResponse
     */
    'hint'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1GetLoginResponse
     */
    'challenge'?: string;
}

