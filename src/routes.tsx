import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './Pages/Landing';
import Products from './Pages/Products';
import ProductsCategory from './Pages/ProductsCategory';
import ProductsViews from './Pages/ProductsViews';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/produtos/:slug/c/:id" component={ProductsCategory} />
                <Route path="/produtos" component={Products} />
                <Route path="/produto/:slug/p/:id" component={ProductsViews} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;