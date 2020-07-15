import React from 'react';
import {useHistory} from "react-router-dom";
import ReactGA from 'react-ga';
import './css/style.scss';

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

import {Landing} from "./views/Landing";

import {ThemeProvider} from '@material-ui/styles';

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
      <Landing/>
    </ThemeProvider>
  );
}

export default App;
