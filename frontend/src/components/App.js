import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';
import './App.sass';


import SplashPage from './splashPage/SplashPage';
import MainPage from './mainPage/mainPage'



const App = () => (

  <HashRouter>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route exact path="/mainPage" component={MainPage} />
    </Switch>
  </HashRouter>

);

export default App;

