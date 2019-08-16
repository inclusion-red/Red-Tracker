import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.css";
import "./App.sass";

import Splashpage from "./splashPage/SplashPage";
import Mainpage from "./applicant/NewApplicant";
import Admin from "./admin/AdminPage";
// import Applicants from "./applicant/ApplicantsIndex";
import Applicants from "./admin/ViewAllApplications";
import AdminAllForms from "./admin/ViewAllForms";
import ViewSingleFormAdmin from "./admin/ViewSingleForm";
import ViewSingleFormApplicant from "./applicant/ViewSingleForm";
import NewForm from "./form/CreateForm";
import Login from "./login/Login";
import Layout from "./layout/Layout";
import SignUp from "./signup/SignUp";

const App = () => (
  <HashRouter>
    <Layout>
      <Route exact path="/" component={Splashpage} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
    </Layout>
    <Switch>
      <Route exact path="/MainPage" component={Mainpage} />
      <Route exact path="/Admin" component={Admin} />
      <Route exact path="/Admin/form" component={AdminAllForms} />
      <Route exact path="/Admin/form/:formid" component={ViewSingleFormAdmin} />
      <Route exact path="/Applicants" component={Applicants} />
      <Route exact path="/Applicants/form/:formid" component={ViewSingleFormApplicant} />
      <Route exact path="/newForm" component={NewForm} />
    </Switch>
  </HashRouter>
);

export default App;
