import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
// import PageName from './pages/PageName';

// Components
import ComponentName from './components/ComponentName';
import SignUp from './components/signUp/signUp';
import SignIn from './components/signIn/signIn';
import Confirmation from './components/signUp/confirmation';
import Email from './components/email/email';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path='/example' component={ComponentName} />
            <Route path='/signup' component={SignUp} />            
            <Route path='/signin' component={SignIn} />
            <Route path='/confirmation' component={Confirmation} />
            <Route path='/email' component={Email} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
