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
    height: "300px",
    backgroundColor: "white",
    margin: "10% auto",
    "@media(max-width: 1020px)": {
      height: "380px"
    },
    "@media(max-width: 834px)": {
      width: "50%"
    },
    "@media(max-width: 451px)": {
      width: "55%",
      height: "390px"
    },
    "@media(max-width: 645px)": {
      margin: "15% auto"
      //height: "400px"
    },
    padding: "10px",
    justifyContent: "center"
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, setUser] = useState(false);

  const handleSubmit = async (email, password) => {
    console.log("Sign Up Info: ", email, password, firstName, lastName);
    //I want to send the email and password to passport.js to authenticate admin/user
    let response = await axios.post("/signup", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    });
    let data = await response.json();
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
            label="First Name"
            placeholder="First Name"
            style={{ margin: "10", justifyContent: "space-around" }}
            margin="normal"
            variant="outlined"
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            placeholder="Last Name"
            style={{ margin: "10" }}
            margin="normal"
            variant="outlined"
            value={lastName}
            onChange={e => {
              setLastName(e.target.value);
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
        </Card>
      </form>
    </div>
  );
};

export default SignUp;
