import { Action} from 'redux';

export const GET_PRODUCTION_ITEM_LIST = '@@genealogy/GET_PRODUCTION_ITEM_LIST'

export interface IGetProductionItemListAction extends Action {
    type: string,
}

export type GenealogyActions = IGetProductionItemListAction;