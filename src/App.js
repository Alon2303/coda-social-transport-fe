import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import PageName from './pages/PageName';

// Components
import ComponentName from './components/ComponentName';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={PageName} />
            <Route path='/example' component={ComponentName} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;