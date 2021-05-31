import React, {Component} from 'react';
import {NavigationBar} from '../components/navbar';
import {Footer} from '../components/footer';
import {Listing} from '../components/listing';

const Home = () => {
    return (
        <div>
            <NavigationBar/>
            <Listing/>
            <Footer/>
        </div>
    )
}

export default Home;
