/**
 * Budget_Tracking_BackEnd.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Category } from './category';
import { Label } from './label';


export interface Budget { 
    id?: number;
    amount?: number;
    description?: string | null;
    label?: Label;
    category?: Category;
    date?: string | null;
    createdDate?: string;
    updatedDate?: string;
    userId?: number;
    createdById?: number;
    updatedById?: number;
}

