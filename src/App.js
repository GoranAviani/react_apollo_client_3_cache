import React from 'react';
import './App.css';
import Navigation from './ components/Navigation/Navigation'
import DefaultCities from "./ components/DefaultCities/DefaultCities";

function App() {
  return (
      <React.Fragment>
        <Navigation/>
        <DefaultCities/>
      </React.Fragment>

  );
}

export default App;
