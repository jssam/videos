// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home'; // Example component for a home page
import About from './About'; // Example component for an about page

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* Define your other routes here */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
