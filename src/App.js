import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import DonationsList from './pages/DonationsList';
import DonationDetails from './pages/DonationDetails';

// Components
// import Email from './components/email/email';

//Donor Flow
import SignUp from './components/donorFlow/registration/signUp/signUp2';
import SignIn from './components/donorFlow/registration/signIn/signIn';
import Confirmation from './components/donorFlow/registration/signUp/confirmation';
import Wellcome from './components/donorFlow/order/startDonation/wellcome';
import Company from './components/donorFlow/order/startDonation/donorType/company';
import NewItem from './components/donorFlow/order/startDonation/newItem';
import MainShipping from './components/donorFlow/order/shipping/mainShipping'
import Comments from './components/donorFlow/order/endDonation/comments';
import CloseDonation from './components/donorFlow/order/endDonation/closeDonation';
import MainFlow from './components/donorFlow/order/mainDonorFlow/mainFlow';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={SignUp} />
            // donor flow
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            {/* <Route path='/email' component={Email} /> */}
            <Route path='/confirmation' component={Confirmation} />
            <Route path='/Wellcome' component={Wellcome} />
            <Route path='/company' component={Company} />
            <Route path='/mainshipping' component={MainShipping} />
            <Route path='/newItem' component={NewItem} />
            <Route path='/comments' component={Comments} />
            <Route path='/closedonation' component={CloseDonation} />
            <Route path='/mainflow' component={MainFlow} />

            // admin flow
            <Route exact path='/donation' component={DonationsList} />
            <Route path='/donation/:id' component={DonationDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
