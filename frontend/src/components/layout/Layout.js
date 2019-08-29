import React, { Component } from "react";
import Navbar from "../navbar/Navbar";

class Layout extends Component {
  constructor() {
    super();
  }
  render() {
    const { user, children, logout } = this.props;
    console.log("User: ", user);

    return (
      <div>
        <Navbar user={user} logout={logout} />
        {children}
      </div>
    );
  }
}

export default Layout;
