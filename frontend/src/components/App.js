import React, { Component } from "react";
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
import ViewSingleApplicant from "./admin/ViewSingleApplicant";
import ViewSingleFormApplicant from "./applicant/ViewSingleForm";
import ApplicantForms from "./applicant/ApplicantForms";
import NewForm from "./form/CreateForm";
import Login from "./login/Login";
import Layout from "./layout/Layout";
import SignUp from "./signup/SignUp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  setUser(user) {
    this.setState({ user: user });
  }
  unsetUser() {
    this.setState({ user: "" });
  }
  render() {
    return (
      <div>
        <HashRouter>
          <Layout user={this.state.user} logout={this.unsetUser.bind(this)}>
            <Route exact path="/" component={Splashpage} />
            <Route
              exact
              path="/Login"
              render={() => (
                <Login
                  logger={this.state.user}
                  handleUser={this.setUser.bind(this)}
                />
              )}
            />
            <Route exact path="/SignUp" component={SignUp} />
          </Layout>
          <Switch>
            <Route exact path="/MainPage" component={Mainpage} />
            <Route exact path="/Admin" component={Admin} />
            <Route exact path="/Admin/form" component={AdminAllForms} />
            <Route
              exact
              path="/Admin/form/:formid"
              component={ViewSingleFormAdmin}
            />
            <Route
              exact
              path="/Admin/applicant/:applicantid/:formid"
              component={ViewSingleApplicant}
            />
            <Route exact path="/Applicants" component={Applicants} />
            <Route
              exact
              path="/Applicants/form/:formid"
              component={ViewSingleFormApplicant}
            />
            <Route exact path="/applicantforms" component={ApplicantForms} />
            <Route exact path="/newForm" component={NewForm} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
