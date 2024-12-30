import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Formulario from './FormularioP4';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/pqr" component={Formulario} />
      <Route exact path="/pqr/101" component={Formulario} />
      <Route exact path="/pqr/102" component={Formulario} />
      <Route exact path="/pqr/103" component={Formulario} />
      <Route exact path="/pqr/104" component={Formulario} />
      <Route exact path="/pqr/105" component={Formulario} />
      <Route exact path="/pqr/106" component={Formulario} />
      <Route exact path="/pqr/108" component={Formulario} />
      <Route exact path="/pqr/109" component={Formulario} />
      <Route exact path="/pqr/110" component={Formulario} />
      <Route exact path="/pqr/111" component={Formulario} />
      <Route exact path="/pqr/112" component={Formulario} />
      <Route exact path="/pqr/115" component={Formulario} />
      <Route exact path="/pqr/116" component={Formulario} />
      <Route exact path="/pqr/117" component={Formulario} />
      <Route exact path="/pqr/118" component={Formulario} />
      <Route exact path="/pqr/119" component={Formulario} />
      <Route exact path="/pqr/120" component={Formulario} />
      <Route exact path="/pqr/121" component={Formulario} />
      <Route exact path="/pqr/122" component={Formulario} />
      <Route exact path="/pqr/123" component={Formulario} />
      <Route exact path="/pqr/124" component={Formulario} />
      <Route exact path="/pqr/126" component={Formulario} />
      <Route exact path="/pqr/127" component={Formulario} />
      <Route exact path="/pqr/128" component={Formulario} />
      <Route exact path="/pqr/129" component={Formulario} />
      <Route exact path="/pqr/130" component={Formulario} />
      <Route exact path="/pqr/132" component={Formulario} />
      <Route exact path="/pqr/133" component={Formulario} />
      <Route exact path="/pqr/135" component={Formulario} />
      <Route exact path="/pqr/136" component={Formulario} />
      <Route exact path="/pqr/138" component={Formulario} />
      <Route exact path="/pqr/139" component={Formulario} />
      <Route exact path="/pqr/140" component={Formulario} />
      <Route exact path="/pqr/142" component={Formulario} />
      <Route exact path="/pqr/144" component={Formulario} />
      <Route exact path="/pqr/146" component={Formulario} />
      <Route exact path="/pqr/148" component={Formulario} />
      <Route exact path="/pqr/150" component={Formulario} />
      <Route exact path="/pqr/151" component={Formulario} />
      <Route exact path="/pqr/152" component={Formulario} />
      <Route exact path="/pqr/050" component={Formulario} />
      <Route exact path="/pqr/301" component={Formulario} />
      <Route exact path="/pqr/303" component={Formulario} />
      <Route exact path="/pqr/305" component={Formulario} />
    </Switch>
  );
};

export default Routes;