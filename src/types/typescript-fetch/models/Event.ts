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
 * イベント参加
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    url: string;
    /**
     * 
     * @type {number}
     * @memberof Event
     */
    status: number;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    date: string;
    /**
     * 
     * @type {boolean}
     * @memberof Event
     */
    isPresenter: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Event
     */
    isOrganizer: boolean;
}

/**
 * Check if a given object implements the Event interface.
 */
export function instanceOfEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "isPresenter" in value;
    isInstance = isInstance && "isOrganizer" in value;

    return isInstance;
}

export function EventFromJSON(json: any): Event {
    return EventFromJSONTyped(json, false);
}

export function EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'url': json['url'],
        'status': json['status'],
        'date': json['date'],
        'isPresenter': json['is_presenter'],
        'isOrganizer': json['is_organizer'],
    };
}

export function EventToJSON(value?: Event | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'url': value.url,
        'status': value.status,
        'date': value.date,
        'is_presenter': value.isPresenter,
        'is_organizer': value.isOrganizer,
    };
}
