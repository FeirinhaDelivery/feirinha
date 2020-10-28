import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './Pages/Landing';
import Products from './Pages/Products';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/produtos" exact component={Products} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;