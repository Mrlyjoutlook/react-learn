import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import 'normalize.css';
import Home from '../Home';
import CssModulesRoute from '../../routes/cssModules';
import LazyRoute from '../../routes/lazy';
import { cssModules, lazy } from '../../config/routes';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <CssModulesRoute path={cssModules.path} />
            <LazyRoute path={lazy.path} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
