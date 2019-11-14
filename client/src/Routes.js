import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './components/RouteWithLayout';
import { Main as MainLayout } from './layouts';

import {
  ComputerList as ComputerListView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/computers"
       />
      <RouteWithLayout
        component={ComputerListView}
        exact
        layout={MainLayout}
        path="/computers"
      />
    </Switch>
  )
}

export default Routes;