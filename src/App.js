import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import DonationsList from './pages/DonationsList';
import DonationDetails from './pages/DonationDetails';

// Components
// import Email from './components/email/email';

//Donor Flow
import SignUp from './components/donorFlow/signUp/signUp';
import SignIn from './components/donorFlow/signIn/signIn';
import Confirmation from './components/donorFlow/signUp/confirmation';
import Wellcome from './components/donorFlow/donorType/wellcome';
import Company from'./components/donorFlow/donorType/company';
import NewItem from'./components/donorFlow/newDonation/newItem';
import MainShipping from './components/donorFlow/newDonation/shipping/mainShipping'
import Comments from './components/donorFlow/comments';
import CloseDonation from './components/donorFlow/closeDonation';

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
            <Route path= '/comments' component={Comments} />
            <Route path= '/closedonation' component={CloseDonation} />
    
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
