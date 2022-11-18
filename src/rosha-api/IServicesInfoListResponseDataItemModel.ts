import { IServicesInfoListResponseDataItemAttributesModel } from './api';

/**
 *
 * @export
 * @interface IServicesInfoListResponseDataItemModel
 */
export interface IServicesInfoListResponseDataItemModel {
    /**
     *
     * @type {number}
     * @memberof IServicesInfoListResponseDataItemModel
     */
    'id'?: number;
    /**
     *
     * @type {IServicesInfoListResponseDataItemAttributesModel}
     * @memberof IServicesInfoListResponseDataItemModel
     */
    'attributes'?: IServicesInfoListResponseDataItemAttributesModel;
}
