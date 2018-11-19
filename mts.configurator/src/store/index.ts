import { combineReducers, Reducer } from 'redux';
import { genealogyReducer } from './genealogy/reducer';
import { IGenealogyState } from './genealogy/types';

export interface IApplicationState {
  genealogy: IGenealogyState;
}

export const reducers: Reducer<IApplicationState> = combineReducers<IApplicationState>({
  genealogy: genealogyReducer
});