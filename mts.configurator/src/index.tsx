import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Store } from 'redux';
import GenealogyWindow from './components/GenealogyWindow';
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
        <GenealogyWindow />
      </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();