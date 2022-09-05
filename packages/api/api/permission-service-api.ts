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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GooglerpcStatus } from '../models';
// @ts-ignore
import { V1AddSubjectPermissionRequest } from '../models';
// @ts-ignore
import { V1CheckPermissionReply } from '../models';
// @ts-ignore
import { V1CheckPermissionRequest } from '../models';
// @ts-ignore
import { V1GetCurrentPermissionReply } from '../models';
// @ts-ignore
import { V1ListSubjectPermissionRequest } from '../models';
// @ts-ignore
import { V1ListSubjectPermissionResponse } from '../models';
// @ts-ignore
import { V1RemoveSubjectPermissionRequest } from '../models';
// @ts-ignore
import { V1UpdateSubjectPermissionRequest } from '../models';
// @ts-ignore
import { V1UpdateSubjectPermissionResponse } from '../models';
/**
 * PermissionServiceApi - axios parameter creator
 * @export
 */
export const PermissionServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary management add
         * @param {V1AddSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceAddSubjectPermission: async (body: V1AddSubjectPermissionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('permissionServiceAddSubjectPermission', 'body', body)
            const localVarPath = `/v1/permission/subject`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {V1CheckPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceCheckCurrent: async (body: V1CheckPermissionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('permissionServiceCheckCurrent', 'body', body)
            const localVarPath = `/v1/permission/check`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get current permission
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceGetCurrent: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/permission/current`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary management list
         * @param {Array<string>} [subjects] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceListSubjectPermission: async (subjects?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/permission/subject`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (subjects) {
                localVarQueryParameter['subjects'] = subjects;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary management list
         * @param {V1ListSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceListSubjectPermission2: async (body: V1ListSubjectPermissionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('permissionServiceListSubjectPermission2', 'body', body)
            const localVarPath = `/v1/permission/subject/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary management remove
         * @param {V1RemoveSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceRemoveSubjectPermission: async (body: V1RemoveSubjectPermissionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('permissionServiceRemoveSubjectPermission', 'body', body)
            const localVarPath = `/v1/permission/subject/rm`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary management update
         * @param {V1UpdateSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceUpdateSubjectPermission: async (body: V1UpdateSubjectPermissionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('permissionServiceUpdateSubjectPermission', 'body', body)
            const localVarPath = `/v1/permission/subject`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PermissionServiceApi - functional programming interface
 * @export
 */
export const PermissionServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PermissionServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary management add
         * @param {V1AddSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permissionServiceAddSubjectPermission(body: V1AddSubjectPermissionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.permissionServiceAddSubjectPermission(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {V1CheckPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permissionServiceCheckCurrent(body: V1CheckPermissionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1CheckPermissionReply>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.permissionServiceCheckCurrent(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get current permission
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permissionServiceGetCurrent(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1GetCurrentPermissionReply>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.permissionServiceGetCurrent(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary management list
         * @param {Array<string>} [subjects] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permissionServiceListSubjectPermission(subjects?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1ListSubjectPermissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.permissionServiceListSubjectPermission(subjects, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary management list
         * @param {V1ListSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permissionServiceListSubjectPermission2(body: V1ListSubjectPermissionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1ListSubjectPermissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.permissionServiceListSubjectPermission2(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary management remove
         * @param {V1RemoveSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permissionServiceRemoveSubjectPermission(body: V1RemoveSubjectPermissionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.permissionServiceRemoveSubjectPermission(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary management update
         * @param {V1UpdateSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async permissionServiceUpdateSubjectPermission(body: V1UpdateSubjectPermissionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1UpdateSubjectPermissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.permissionServiceUpdateSubjectPermission(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PermissionServiceApi - factory interface
 * @export
 */
export const PermissionServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PermissionServiceApiFp(configuration)
    return {
        /**
         * 
         * @summary management add
         * @param {V1AddSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceAddSubjectPermission(body: V1AddSubjectPermissionRequest, options?: any): AxiosPromise<object> {
            return localVarFp.permissionServiceAddSubjectPermission(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {V1CheckPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceCheckCurrent(body: V1CheckPermissionRequest, options?: any): AxiosPromise<V1CheckPermissionReply> {
            return localVarFp.permissionServiceCheckCurrent(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get current permission
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceGetCurrent(options?: any): AxiosPromise<V1GetCurrentPermissionReply> {
            return localVarFp.permissionServiceGetCurrent(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary management list
         * @param {Array<string>} [subjects] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceListSubjectPermission(subjects?: Array<string>, options?: any): AxiosPromise<V1ListSubjectPermissionResponse> {
            return localVarFp.permissionServiceListSubjectPermission(subjects, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary management list
         * @param {V1ListSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceListSubjectPermission2(body: V1ListSubjectPermissionRequest, options?: any): AxiosPromise<V1ListSubjectPermissionResponse> {
            return localVarFp.permissionServiceListSubjectPermission2(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary management remove
         * @param {V1RemoveSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceRemoveSubjectPermission(body: V1RemoveSubjectPermissionRequest, options?: any): AxiosPromise<object> {
            return localVarFp.permissionServiceRemoveSubjectPermission(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary management update
         * @param {V1UpdateSubjectPermissionRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        permissionServiceUpdateSubjectPermission(body: V1UpdateSubjectPermissionRequest, options?: any): AxiosPromise<V1UpdateSubjectPermissionResponse> {
            return localVarFp.permissionServiceUpdateSubjectPermission(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for permissionServiceAddSubjectPermission operation in PermissionServiceApi.
 * @export
 * @interface PermissionServiceApiPermissionServiceAddSubjectPermissionRequest
 */
export interface PermissionServiceApiPermissionServiceAddSubjectPermissionRequest {
    /**
     * 
     * @type {V1AddSubjectPermissionRequest}
     * @memberof PermissionServiceApiPermissionServiceAddSubjectPermission
     */
    readonly body: V1AddSubjectPermissionRequest
}

/**
 * Request parameters for permissionServiceCheckCurrent operation in PermissionServiceApi.
 * @export
 * @interface PermissionServiceApiPermissionServiceCheckCurrentRequest
 */
export interface PermissionServiceApiPermissionServiceCheckCurrentRequest {
    /**
     * 
     * @type {V1CheckPermissionRequest}
     * @memberof PermissionServiceApiPermissionServiceCheckCurrent
     */
    readonly body: V1CheckPermissionRequest
}

/**
 * Request parameters for permissionServiceListSubjectPermission operation in PermissionServiceApi.
 * @export
 * @interface PermissionServiceApiPermissionServiceListSubjectPermissionRequest
 */
export interface PermissionServiceApiPermissionServiceListSubjectPermissionRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof PermissionServiceApiPermissionServiceListSubjectPermission
     */
    readonly subjects?: Array<string>
}

/**
 * Request parameters for permissionServiceListSubjectPermission2 operation in PermissionServiceApi.
 * @export
 * @interface PermissionServiceApiPermissionServiceListSubjectPermission2Request
 */
export interface PermissionServiceApiPermissionServiceListSubjectPermission2Request {
    /**
     * 
     * @type {V1ListSubjectPermissionRequest}
     * @memberof PermissionServiceApiPermissionServiceListSubjectPermission2
     */
    readonly body: V1ListSubjectPermissionRequest
}

/**
 * Request parameters for permissionServiceRemoveSubjectPermission operation in PermissionServiceApi.
 * @export
 * @interface PermissionServiceApiPermissionServiceRemoveSubjectPermissionRequest
 */
export interface PermissionServiceApiPermissionServiceRemoveSubjectPermissionRequest {
    /**
     * 
     * @type {V1RemoveSubjectPermissionRequest}
     * @memberof PermissionServiceApiPermissionServiceRemoveSubjectPermission
     */
    readonly body: V1RemoveSubjectPermissionRequest
}

/**
 * Request parameters for permissionServiceUpdateSubjectPermission operation in PermissionServiceApi.
 * @export
 * @interface PermissionServiceApiPermissionServiceUpdateSubjectPermissionRequest
 */
export interface PermissionServiceApiPermissionServiceUpdateSubjectPermissionRequest {
    /**
     * 
     * @type {V1UpdateSubjectPermissionRequest}
     * @memberof PermissionServiceApiPermissionServiceUpdateSubjectPermission
     */
    readonly body: V1UpdateSubjectPermissionRequest
}

/**
 * PermissionServiceApi - object-oriented interface
 * @export
 * @class PermissionServiceApi
 * @extends {BaseAPI}
 */
export class PermissionServiceApi extends BaseAPI {
    /**
     * 
     * @summary management add
     * @param {PermissionServiceApiPermissionServiceAddSubjectPermissionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionServiceApi
     */
    public permissionServiceAddSubjectPermission(requestParameters: PermissionServiceApiPermissionServiceAddSubjectPermissionRequest, options?: AxiosRequestConfig) {
        return PermissionServiceApiFp(this.configuration).permissionServiceAddSubjectPermission(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PermissionServiceApiPermissionServiceCheckCurrentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionServiceApi
     */
    public permissionServiceCheckCurrent(requestParameters: PermissionServiceApiPermissionServiceCheckCurrentRequest, options?: AxiosRequestConfig) {
        return PermissionServiceApiFp(this.configuration).permissionServiceCheckCurrent(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get current permission
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionServiceApi
     */
    public permissionServiceGetCurrent(options?: AxiosRequestConfig) {
        return PermissionServiceApiFp(this.configuration).permissionServiceGetCurrent(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary management list
     * @param {PermissionServiceApiPermissionServiceListSubjectPermissionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionServiceApi
     */
    public permissionServiceListSubjectPermission(requestParameters: PermissionServiceApiPermissionServiceListSubjectPermissionRequest = {}, options?: AxiosRequestConfig) {
        return PermissionServiceApiFp(this.configuration).permissionServiceListSubjectPermission(requestParameters.subjects, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary management list
     * @param {PermissionServiceApiPermissionServiceListSubjectPermission2Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionServiceApi
     */
    public permissionServiceListSubjectPermission2(requestParameters: PermissionServiceApiPermissionServiceListSubjectPermission2Request, options?: AxiosRequestConfig) {
        return PermissionServiceApiFp(this.configuration).permissionServiceListSubjectPermission2(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary management remove
     * @param {PermissionServiceApiPermissionServiceRemoveSubjectPermissionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionServiceApi
     */
    public permissionServiceRemoveSubjectPermission(requestParameters: PermissionServiceApiPermissionServiceRemoveSubjectPermissionRequest, options?: AxiosRequestConfig) {
        return PermissionServiceApiFp(this.configuration).permissionServiceRemoveSubjectPermission(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary management update
     * @param {PermissionServiceApiPermissionServiceUpdateSubjectPermissionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionServiceApi
     */
    public permissionServiceUpdateSubjectPermission(requestParameters: PermissionServiceApiPermissionServiceUpdateSubjectPermissionRequest, options?: AxiosRequestConfig) {
        return PermissionServiceApiFp(this.configuration).permissionServiceUpdateSubjectPermission(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}
