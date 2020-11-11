import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './Pages/Landing';
import Products from './Pages/Products';
import ProductsCategory from './Pages/ProductsCategory';
import HeaderMenu from "./Components/HeaderMenu";
import Footer from "./Components/Footer";

function Routes() {
    return (
        <BrowserRouter>
            <HeaderMenu/>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/produtos/:slug/c/:id/:limit?/:offset?/:page?" component={ProductsCategory} />
                <Route path="/produtos" component={Products} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes;