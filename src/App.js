import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import PageName from './pages/PageName';

// Components
import ComponentName from './components/ComponentName';

// SingUp
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={PageName} />
            <Route path='/example' component={ComponentName} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;