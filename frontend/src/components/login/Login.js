import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, TextField, Button, Typography } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)"
  },
  card: {
    width: "90%",
    backgroundColor: "white",
    margin: "10% auto",
    "@media(min-width: 768px)": {
      width: "40%"
    },
    padding: "10px",
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
    margin: "5px auto"
  }
}));

const Login = props => {
  let { handleUser } = props;
  let classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const handleSubmit = async (email, password) => {
    console.log("Email & Password: ", email, password);
    //I want to send the email and password to passport.js to authenticate admin/user
    let response = await axios.post("/api/admin/login", {
      admin: { email: email, password: password }
    });
    let data = await response;
    handleUser(email);
    console.log("Data: ", data);
    if (data) {
      setUser(true);
    }
  };

  if (user) {
    return <Redirect to="/Admin" />;
  }
  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <Typography
            className={classes.title}
            variant="h4"
            color="textSecondary"
            gutterBottom
          >
            Log In to Admin
          </Typography>
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
            type="password"
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
