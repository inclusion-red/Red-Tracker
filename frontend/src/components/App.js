import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';
import './App.sass';


import Splashpage from './splashPage/SplashPage';
import Mainpage from './mainPage/NewApplicant'
import Admin from './mainPage/AdminPage';
import Applicants from './mainPage/ApplicantsIndex';


const App = () => (

  <HashRouter>
    <Switch>
      <Route exact path="/" component={Splashpage} />
      <Route exact path="/MainPage" component={Mainpage} />
      <Route exact path="/Admin" component={Admin} />
      <Route exact path="/Applicants" component={Applicants} />
    </Switch>
  </HashRouter>

);

export default App;

