import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';
import './App.sass';


import Splashpage from './splashPage/SplashPage';
import Mainpage from './applicant/NewApplicant'
import Admin from './admin/AdminPage';
import Applicants from './applicant/ApplicantsIndex';
import NewForm from './form/CreateForm';



const App = () => (

  <HashRouter>
    <Switch>
      <Route exact path="/" component={Splashpage} />
      <Route exact path="/MainPage" component={Mainpage} />
      <Route exact path="/Admin" component={Admin} />
      <Route exact path="/Applicants" component={Applicants} />
      <Route exact path="/newForm" component={NewForm} />
    </Switch>
  </HashRouter>

);

export default App;
