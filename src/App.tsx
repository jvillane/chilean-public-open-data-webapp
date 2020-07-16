import React from 'react';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import ReactGA from 'react-ga';
import './css/style.scss';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

import {Landing} from "./views/Landing";

import {ThemeProvider} from '@material-ui/styles';

import MuiTheme from './theme';
import {fab, faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  fas,
  faFacebook,
  faTwitter,
  faInstagram
);

function App() {
  useHistory().listen(location => {
    ReactGA.set({page: location.pathname}); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  return (
    <ThemeProvider theme={MuiTheme}>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Redirect from="*" to="/"/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
