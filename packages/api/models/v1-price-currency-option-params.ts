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
import { V1PriceCurrencyOptionTierParams } from './v1-price-currency-option-tier-params';

/**
 * 
 * @export
 * @interface V1PriceCurrencyOptionParams
 */
export interface V1PriceCurrencyOptionParams {
    /**
     * 
     * @type {string}
     * @memberof V1PriceCurrencyOptionParams
     */
    'currencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1PriceCurrencyOptionParams
     */
    'defaultAmountDecimal'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1PriceCurrencyOptionParams
     */
    'discountedAmountDecimal'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1PriceCurrencyOptionParams
     */
    'discountText'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1PriceCurrencyOptionParams
     */
    'denyMoreDiscounts'?: boolean;
    /**
     * 
     * @type {Array<V1PriceCurrencyOptionTierParams>}
     * @memberof V1PriceCurrencyOptionParams
     */
    'tiers'?: Array<V1PriceCurrencyOptionTierParams>;
}

