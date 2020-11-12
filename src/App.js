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

import Wellcome from './components/newDonation/wellcome';
import Company from'./components/newDonation/company';
import NewItem from'./components/donationFlow/newItem';
import Shipping from'./components/donationFlow/shipping';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path='/signup' component={SignUp} />            
            <Route path='/signin' component={SignIn} />
            {/* <Route path='/email' component={Email} /> */}
            <Route path='/confirmation' component={Confirmation} />
            <Route path='/Wellcome' component={Wellcome} />
            <Route path='/company' component={Company} />
            <Route path='/shipping' component={Shipping} />
            <Route path='/newItem' component={NewItem} />

            <Route exact path='/donation' component={DonationsList} />
            <Route path='/donation/:id' component={DonationDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
