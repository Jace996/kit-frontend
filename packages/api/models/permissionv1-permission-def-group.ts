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


import { Permissionv1PermissionDef } from './permissionv1-permission-def';
import { V1PermissionSide } from './v1-permission-side';

/**
 * 
 * @export
 * @interface Permissionv1PermissionDefGroup
 */
export interface Permissionv1PermissionDefGroup {
    /**
     * 
     * @type {string}
     * @memberof Permissionv1PermissionDefGroup
     */
    'displayName'?: string;
    /**
     * 
     * @type {V1PermissionSide}
     * @memberof Permissionv1PermissionDefGroup
     */
    'side'?: V1PermissionSide;
    /**
     * 
     * @type {number}
     * @memberof Permissionv1PermissionDefGroup
     */
    'priority'?: number;
    /**
     * 
     * @type {Array<Permissionv1PermissionDef>}
     * @memberof Permissionv1PermissionDefGroup
     */
    'def'?: Array<Permissionv1PermissionDef>;
    /**
     * 
     * @type {object}
     * @memberof Permissionv1PermissionDefGroup
     */
    'extra'?: object;
    /**
     * 
     * @type {string}
     * @memberof Permissionv1PermissionDefGroup
     */
    'name'?: string;
}

