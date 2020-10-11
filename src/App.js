import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import DonationsList from './pages/DonationsList';
import DonationDetails from './pages/DonationDetails';

// Components
import SignUp from './components/signUp/signUp';
import SignIn from './components/signIn/signIn';
import Confirmation from './components/signUp/confirmation';
// import Email from './components/email/email';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/confirmation' component={Confirmation} />
            {/* <Route path='/email' component={Email} /> */}

            <Route exact path='/donation' component={DonationsList} />
            <Route path='/donation/:id' component={DonationDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
