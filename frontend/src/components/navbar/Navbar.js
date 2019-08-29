import React from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import cssStyles from "./Navbar.module.css";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.secondary.dark,
    position: "static",
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#fff"
  },
  button: {
    color: "#fff",
    backgroundColor: theme.palette.secondary.light
  }
}));

//localStorage.setItem("data", undefined);
// if (logoutUser && logoutUser.data) {
//   return <Redirect to={{ pathname: "/" }} />;
// }

// if (logout && logout.data) {
//   console.log("blahblah");
//   return <Redirect to={from} />;
// }

// let output = localStorage.getItem("data");
// if (output === "undefined") {
//return <Redirect to="/" />;
//}

const Navbar = ({ logout, user }) => {
  let classes = useStyles();

  const handleClick = async () => {
    await axios.get("/api/admin/logout");
    logout();
    console.log("User in Navbar: ", user);
    return <Redirect to="/" />;
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography color="textPrimary" variant="h6" className={classes.title}>
          <Link to="/" className={cssStyles.link}>
            <span className={cssStyles.redText}>RED</span> TRACKER
          </Link>
        </Typography>
        {user ? (
          <Button onClick={handleClick} className={classes.button}>
            Logout
          </Button>
        ) : (
          <Link to="/Login">
            <Button className={classes.button}>Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
