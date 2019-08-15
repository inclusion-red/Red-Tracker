import React from 'react';
// import { Switch } from 'react-router-dom';

function mainPage() {

  return (
    <section className="hero is-primary has-text-centered is-fullheight" >
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
                       WELCOME TO APPLICATION TRACKER
          </h1>
          <h2 className="subtitle">
                        Please Enter Email to begin
          </h2>

          <div className="control has-icons-left has-icons-right">
            <input className="input is-large" type="email" placeholder="Email"/>
            <span className="icon is-medium is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-medium is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default mainPage;
