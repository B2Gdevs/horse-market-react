import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import {Listings} from './pages/listings';
import LandingPage from "./pages/LandingPage";
import Login from "./accounts/login";
import Register from "./accounts/register";
import MakeListing from "./MakeListing/makelisting";
import SubscriptionPage from "./MakeListing/subscriptionpage";
import BuyListing from "./MakeListing/buylisting";
import EditProfile from "./profile/editprofile";
import ManageListing from "./profile/managelistings";
import EditListing from "./profile/EditListings";
import ListingsDetails from "./details/ListingsDetails";
import ListingsSearch from "./details/ListingSearch";
import {Footer} from "./components/footer";
import {NavigationBar} from "./components/navbar";

function App() {
    return (
        <Fragment>
            <Router>
                <NavigationBar/>
                <Switch>

                    <Route exact path="/" component={LandingPage}/>

                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>

                    <Route exact path="/make-listing" component={MakeListing}/>
                    <Route exact path="/subscription-page" component={SubscriptionPage}/>

                    <Route exact path="/buy-listing" component={BuyListing}/>

                    <Route exact path="/edit-profile" component={EditProfile}/>
                    <Route exact path="/manage-listings" component={ManageListing}/>
                    <Route exact path="/edit-listings" component={EditListing}/>

                    <Route exact path="/listings-details" component={ListingsDetails}/>
                    <Route exact path="/listings-search" component={ListingsSearch}/>

                    {/* <Route exact path="/about" component={About}/>
          <Route component={error_404}/> */}
                </Switch>
                <Footer/>
            </Router>
        </Fragment>
    );
}

export default App;
