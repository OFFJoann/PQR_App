import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Formulario from './FormularioP4';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/pqr" component={Formulario} />
    </Switch>
  );
};

export default Routes;