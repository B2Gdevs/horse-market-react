import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import MakeListing from './pages/MakeListingPage';
import SubscriptionPage from './pages/SubscriptionPage';
import BuyListing from './pages/BuyListingPage';
import EditProfile from './pages/EditProfilePage';
import ManageListing from './pages/ManagelistingsPage';
import EditListing from './pages/EditListingsPage';
import ListingDetail from './components/ListingDetail';
import ListingsSearchPage from './pages/ListingSearchPage';
import { Footer } from './components/Footer';
import { NavigationBar } from './components/NavigationBar';

function App() {
	return (
		<Fragment>
			<Router>
				<NavigationBar />
				<Switch>
					<Route exact path="/" component={HomePage} />

					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />

					<Route exact path="/make-listing" component={MakeListing} />
					<Route exact path="/subscription-page" component={SubscriptionPage} />
					<Route exact path="/buy-listing" component={BuyListing} />

					<Route exact path="/edit-profile" component={EditProfile} />
					<Route exact path="/manage-listings" component={ManageListing} />
					<Route exact path="/edit-listings" component={EditListing} />

					<Route exact path="/listings-details" component={ListingDetail} />
					<Route exact path="/listings-search" component={ListingsSearchPage} />
				</Switch>
				<Footer />
			</Router>
		</Fragment>
	);
}

export default App;
