import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  TextField,
  Button,
  Typography,
  Snackbar
} from "@material-ui/core";
//import history from "../../history";
import { Redirect } from "react-router-dom";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)"
  },
  card: {
    width: "90%",
    padding: "10px",
    "@media(min-width: 768px)": {
      width: "40%"
    },
    textAlign: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexGrow: "1"
  },
  button: {
    color: "#fff",
    backgroundColor: theme.palette.secondary.light,
    alignItems: "center",
    marginTop: "5px"
  }
}));

const SignUp = () => {
  let classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [user, setUser] = useState(false);

  const handleSubmit = async (email, password) => {
    console.log("Sign Up Info: ", email, password, name);
    //I want to send the email and password to passport.js to authenticate admin/user
    try {
      let response = await axios.post("/api/admin/signup", {
        admin: { email: email, password: password, name: name }
      });
      let data = response;
      console.log("Data: ", data);
      setUser(true);
      if (data) {
        setUser(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    return <Redirect to="/Login" />;
  }

  return (
    <div>
      <Typography />
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <Typography
            className={classes.title}
            variant="h4"
            color="textSecondary"
            gutterBottom
          >
            Sign Up a New Admin
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Name"
            fullWidth
            placeholder="Name"
            style={{ margin: "10" }}
            margin="normal"
            variant="outlined"
            value={name}
            onChange={e => {
              setname(e.target.value);
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            placeholder="Email"
            style={{ margin: "10" }}
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            placeholder="Password"
            style={{ margin: "10" }}
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <Button
            onClick={() => handleSubmit(email, password)}
            className={classes.button}
          >
            Submit
          </Button>
          {!user ? (
            <Snackbar>
              <Typography>
                Incorrect Password or Email. Please Try again
              </Typography>
            </Snackbar>
          ) : null}
        </Card>
      </form>
    </div>
  );
};

export default SignUp;
