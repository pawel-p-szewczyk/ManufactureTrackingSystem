import { Reducer } from 'redux';
import { GenealogyActions } from './actionTypes';
import { GET_PRODUCTION_ITEM_LIST } from './actionTypes';
import { IGenealogyState } from './types';

export const initialState: IGenealogyState = {
    productionItems: []
};

export const genealogyReducer: Reducer<IGenealogyState> = (state: IGenealogyState = initialState, action: GenealogyActions) => {
    switch(action.type) {
        case GET_PRODUCTION_ITEM_LIST:
            return state;;
        default: return state;
    }
};