import { ActionCreator } from 'redux';
import {GET_PRODUCTION_ITEM_LIST} from './actionTypes';
import { IGetProductionItemListAction } from './actionTypes';

export const getProductionItemList: ActionCreator<IGetProductionItemListAction> = () => ({
    type: GET_PRODUCTION_ITEM_LIST
});