import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingContainer from "./landing/landing_container";

const App = (props) => {
  return (
    <div className="webapp-container">
      <Switch>
        <Route path = "/" component={LandingContainer} />
      </Switch>
    </div>
  );
};

export default App;
