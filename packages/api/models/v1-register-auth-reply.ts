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
 * @interface V1RegisterAuthReply
 */
export interface V1RegisterAuthReply {
    /**
     * 
     * @type {string}
     * @memberof V1RegisterAuthReply
     */
    'accessToken'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1RegisterAuthReply
     */
    'tokenType'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1RegisterAuthReply
     */
    'refreshToken'?: string;
    /**
     * 
     * @type {number}
     * @memberof V1RegisterAuthReply
     */
    'expiresIn'?: number;
}

