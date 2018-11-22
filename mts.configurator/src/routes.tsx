import * as React from 'react';
import { Route } from 'react-router';
import GenealogyView from './components/genealogy/GenealogyView';
import { HomeView } from './components/home/HomeView';

export default (
    <div>
      <Route exact={true} path="/" component={HomeView} />
      <Route path="/genealogy" component={GenealogyView} />
    </div>
);