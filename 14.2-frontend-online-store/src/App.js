import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import ShoppingCart from './components/ShoppingCart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
