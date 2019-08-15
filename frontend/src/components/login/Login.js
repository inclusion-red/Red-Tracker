import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, TextField, Button, Typography } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex"
  },
  card: {
    width: "40%",
    height: "225px",
    backgroundColor: "white",
    margin: "10% auto",
    "@media(max-width: 834px)": {
      margin: "20% auto"
    },
    "@media(max-width: 645px)": {
      margin: "30% auto"
    },
    "@media(max-width: 645px)": {
      margin: "40% auto"
    },
    padding: "10px"
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

const Login = () => {
  let classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const handleSubmit = async (email, password) => {
    console.log("Email & Password: ", email, password);
    //I want to send the email and password to passport.js to authenticate admin/user
    let response = await axios.post("/api/login", {
      email: email,
      password: password
    });
    let data = response.json();
    if (data) {
      setUser(true);
      //send "true user" to Navbar
    }
  };

  return (
    <div>
      <Typography />
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
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
        </Card>
      </form>
    </div>
  );
};

export default Login;
