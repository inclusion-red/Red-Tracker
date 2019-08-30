import React from "react";
import { Link, Redirect } from "react-router-dom";

function AdminPage(props) {
  let { user } = props;

  if (!user) {
    // might remove Redirect since we are handling user in app.js
    return <Redirect to="/" />;
  } else {
    return (
      <section className="hero is-primary has-text-centered is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">WELCOME #ADMIN</h1>
            <div className="buttons are-large is-centered">
              <Link to="Admin/applicants" className="button is-success">
                Applicants
              </Link>
              <Link to="/newForm" className="button is-info">
                New Form
              </Link>
              <Link to="/Admin/form" className="button is-link">
                View Forms
              </Link>
              <Link to="/SignUp" className="button is-danger">
                New Admin
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AdminPage;
