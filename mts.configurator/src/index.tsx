import {createBrowserHistory} from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Store } from 'redux';
import App from './components/App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import { IApplicationState } from './store';
import { ProductionItemType } from './store/genealogy/types';

const initialState: IApplicationState = {
  genealogy: {
    productionItems: [{
      code: 'W',
      id: 1,
      name: 'water',
      type: ProductionItemType.RawMaterial,
      unit: 'liter',
      unitAbbrv: 'l'
    }]
  }
};

const store: Store<IApplicationState> = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();