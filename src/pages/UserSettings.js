import React, { useState } from "react";
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

  // State variables for user information
  const [userData, setUserData] = useState({
    username: "Current Username",
    firstname: "First Name",
    lastname: "Last Name",
    address: "Current Address",
    password: "Current Password",
  });

  // Function to handle changes for a specific field
  const handleFieldChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };

  // Function to save changes (you can implement the actual logic here)
  const handleSaveChanges = () => {
    // Implement the logic to save changes to the backend or wherever it's needed
    console.log("Changes saved:", userData);
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(userData).map((field) => (
          <Grid item xs={12} key={field}>
            <div className="input-names"> {userData[field]} : </div>
            <TextField
              className={classes.textField}
              label={
                "Change " + field.charAt(0).toUpperCase() + field.slice(1) + " "
              }
              variant="outlined"
              onChange={(e) => handleFieldChange(field, e.target.value)}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserSettings;
