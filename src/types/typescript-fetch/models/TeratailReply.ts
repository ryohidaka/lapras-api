/* tslint:disable */
/* eslint-disable */
/**
 * LAPRAS Public API
 * LAPRAS公開ページAPIの仕様書
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Teratailの回答
 * @export
 * @interface TeratailReply
 */
export interface TeratailReply {
    /**
     * 
     * @type {string}
     * @memberof TeratailReply
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof TeratailReply
     */
    url: string;
    /**
     * 
     * @type {boolean}
     * @memberof TeratailReply
     */
    isBestAnswer: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof TeratailReply
     */
    tags: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TeratailReply
     */
    createdAt: string;
}

/**
 * Check if a given object implements the TeratailReply interface.
 */
export function instanceOfTeratailReply(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "isBestAnswer" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function TeratailReplyFromJSON(json: any): TeratailReply {
    return TeratailReplyFromJSONTyped(json, false);
}

export function TeratailReplyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeratailReply {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'url': json['url'],
        'isBestAnswer': json['is_best_answer'],
        'tags': json['tags'],
        'createdAt': json['created_at'],
    };
}

export function TeratailReplyToJSON(value?: TeratailReply | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'url': value.url,
        'is_best_answer': value.isBestAnswer,
        'tags': value.tags,
        'created_at': value.createdAt,
    };
}

