import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </div>);
}
export default App;
