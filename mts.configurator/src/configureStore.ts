import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IApplicationState, reducers } from './store';

export default function configureStore(initialState: IApplicationState) : Store<IApplicationState> {
    const composeEnhancers = composeWithDevTools({});
    return createStore(
        reducers,
        initialState,
        composeEnhancers()
    );
}