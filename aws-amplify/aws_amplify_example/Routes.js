import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/login';
import TranscationHistory from './src/transcationHistory';

const Routes = () => (
  <Router showNavigationBar={false}>
    <Scene key="root">
      <Scene key="login" component={Login} initial={true} hideNavBar={true} />
      <Scene
        key="transcationHistory"
        component={TranscationHistory}
        hideNavBar={true}
      />
    </Scene>
  </Router>
);
export default Routes;
