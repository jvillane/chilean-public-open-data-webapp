import React from 'react';
import {Layout} from "./layout/Layout";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import ReactGA from 'react-ga';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faAngleRight,
  faCheck,
  faDollarSign,
  faExclamation,
  fas,
  faSuitcase,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import {HomeView} from "./views/HomeView";
import {ProjectsView} from "./views/ProjectsView";
import {ResourcesView} from "./views/ResourcesView";
import {TeamView} from "./views/TeamView";

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

library.add(
  fas,
  faCheck,
  faDollarSign,
  faExclamation,
  faSuitcase,
  faTimes,
  faAngleRight
);

function App() {
  useHistory().listen(location => {
    ReactGA.set({page: location.pathname}); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  return (
    <ThemeProvider theme={MuiTheme}>
      <Switch>
        <Route exact path="/inicio">
          <Layout longHeader children={<HomeView/>}/>
        </Route>
        <Route exact path="/proyectos">
          <Layout children={<ProjectsView/>}/>
        </Route>
        <Route exact path="/recursos">
          <Layout children={<ResourcesView/>}/>
        </Route>
        <Route exact path="/nosotros">
          <Layout children={<TeamView/>}/>
        </Route>
        <Redirect from="*" to="/inicio"/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
