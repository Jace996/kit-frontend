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
 * @interface V1WebLoginAuthReply
 */
export interface V1WebLoginAuthReply {
    /**
     * 
     * @type {string}
     * @memberof V1WebLoginAuthReply
     */
    'accessToken'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1WebLoginAuthReply
     */
    'tokenType'?: string;
    /**
     * 
     * @type {number}
     * @memberof V1WebLoginAuthReply
     */
    'expires'?: number;
    /**
     * 
     * @type {string}
     * @memberof V1WebLoginAuthReply
     */
    'refreshToken'?: string;
    /**
     * 
     * @type {number}
     * @memberof V1WebLoginAuthReply
     */
    'expiresIn'?: number;
    /**
     * 
     * @type {string}
     * @memberof V1WebLoginAuthReply
     */
    'redirect'?: string;
}

