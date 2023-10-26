import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  textField: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function UserSettings() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            label="First Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            label="Last Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            label="Email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.textField}
            label="Password"
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserSettings;
