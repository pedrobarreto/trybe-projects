import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {
  Login,
  Register,
  CustomerProduct,
  CustomerCheckout,
  CustomerOrder,
  CustomerOrderDetails,
  SellerOrder,
  SellerOrderDetails,
  AdminManage,
} from '../pages';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ Login } />
        {/* <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ CustomerProduct } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
        <Route path="/customer/orders/:id" component={ CustomerOrderDetails } />
        <Route path="/customer/orders" component={ CustomerOrder } />
        <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
        <Route path="/seller/orders" component={ SellerOrder } />
        <Route path="/admin/manage" component={ AdminManage } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default RoutesApp;
