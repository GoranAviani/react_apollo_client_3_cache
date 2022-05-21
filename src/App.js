import React from 'react';

import Navigation from './ components/Navigation/Navigation'
import DefaultCities from "./ components/DefaultCities/DefaultCities";

import './App.css';


function App() {
    return (
        <React.Fragment>
            <Navigation/>
            <DefaultCities/>
        </React.Fragment>

    );
}

export default App;
