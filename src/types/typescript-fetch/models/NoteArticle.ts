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
 * note記事
 * @export
 * @interface NoteArticle
 */
export interface NoteArticle {
    /**
     * 
     * @type {string}
     * @memberof NoteArticle
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof NoteArticle
     */
    url: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NoteArticle
     */
    tags: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof NoteArticle
     */
    likeCount: number;
    /**
     * 
     * @type {string}
     * @memberof NoteArticle
     */
    publishedAt: string;
}

/**
 * Check if a given object implements the NoteArticle interface.
 */
export function instanceOfNoteArticle(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "likeCount" in value;
    isInstance = isInstance && "publishedAt" in value;

    return isInstance;
}

export function NoteArticleFromJSON(json: any): NoteArticle {
    return NoteArticleFromJSONTyped(json, false);
}

export function NoteArticleFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteArticle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'url': json['url'],
        'tags': json['tags'],
        'likeCount': json['like_count'],
        'publishedAt': json['published_at'],
    };
}

export function NoteArticleToJSON(value?: NoteArticle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'url': value.url,
        'tags': value.tags,
        'like_count': value.likeCount,
        'published_at': value.publishedAt,
    };
}
