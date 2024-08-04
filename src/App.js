import React, { Component } from 'react';
import './app.scss';
import { Content, Theme, Grid, Column } from '@carbon/react';
import ApplicationHeader from './components/ApplicationHeader';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
      <Router>
        <Theme theme="g100">
          <ApplicationHeader />
        </Theme>
        <Content>
          <Grid className="main-page__r1">
            <Column lg={16} md={8} sm={4} className="repo-page__r1">
              <Switch>
                <Route exact path="/" component={Page} />
                <Route exact path="/:name" component={Page} />
              </Switch>
            </Column>
          </Grid>
        </Content>
      </Router>
    );
  }
}

export default App;
