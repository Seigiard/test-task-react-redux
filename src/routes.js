import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.jsx';
import Auth from './components/Auth.jsx';
import MainPage from './components/MainPage.jsx';
import About from './components/About.jsx';

const Routes = (
    <main>
        <Switch>
            <PrivateRoute path="/" exact component={MainPage}/>
            <PrivateRoute path="/about" component={About}/>
            <Route path="/auth" component={Auth}></Route>
        </Switch>
    </main>
);

export default Routes