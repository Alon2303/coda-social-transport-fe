import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import PageName from './pages/PageName';
// Components
import ComponentName from './components/ComponentName';
// SingUp
import SignUp from './components/signUp/signUp';
//SignIn 
import SignIn from './components/signIn/signIn';
//Confirmation page
import Confirmation from './components/signUp/confirmation';

import Wellcome from './components/signIn/wellcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={PageName} />
            <Route path='/example' component={ComponentName} />
            <Route path='/signup' component={SignUp} />            
            <Route path='/confirmation' component={Confirmation} />
            <Route path='/signin' component={SignIn} />
            <Route path='/Wellcome' component={Wellcome} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;