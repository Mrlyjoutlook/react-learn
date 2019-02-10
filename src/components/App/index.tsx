import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Router } from '@reach/router';
import 'normalize.css';
import HomeReact from '../HomeReact';
import HomeReach from '../HomeReach';
import CssModulesRoute from '../../routes/cssModules';
import LazyRoute from '../../routes/lazy';
import UnstatedRoute from '../../routes/unstated';
import { cssModules, lazy, unstated } from '../../config/routes';
import './index.css';

type RouterType = 'react' | 'reach';

interface State {
  routerType: RouterType;
}

interface Props {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      routerType: 'react'
    };
  }

  _handleClick = (t: RouterType) => (e: any) => {
    this.setState({
      routerType: t
    });
  };

  render() {
    const { routerType } = this.state;
    return (
      <div className="App">
        <div className="App_container">
          {routerType === 'react' && (
            <HashRouter>
              <Switch>
                <Route exact path="/" component={HomeReact} />
                <CssModulesRoute path={cssModules.path} />
                <LazyRoute path={lazy.path} />
                <UnstatedRoute path={unstated.path} />
              </Switch>
            </HashRouter>
          )}
          {routerType === 'reach' && (
            <Router basepath="/reach">
              <HomeReach path="/" />
            </Router>
          )}
        </div>
        <div className="App_nav">
          <a href="/" onClick={this._handleClick('react')}>
            react-router下的案例
          </a>
          <a href="/reach" onClick={this._handleClick('reach')}>
            reach-router下的案例
          </a>
        </div>
      </div>
    );
  }
}

export default App;
