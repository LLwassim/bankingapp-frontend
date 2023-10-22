import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@mui/styles";
import { Container, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import theme from "./SignUpTheme";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 400,
    margin: "0 auto",
    padding: theme.spacing(2),
    border: "1px solid #ccc",
    borderRadius: 5,
    background: "#f9f9f9",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: "#0078d4",
    color: "white",
    borderRadius: 5,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#0078d4",
  },
}));

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5001" // Use localhost for development
    : "https://xroadsports.com"; // Use the production URL for deployment {AWS SERVER}

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

function SignUpPage() {
  const classes = useStyles();
  const theme = useTheme();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    date_of_birth: "",
    contact_number: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendFormData = async () => {
    try {
      const response = await axiosInstance.post("/api/users/signup", formData);
      // Handle the response, e.g., show a success message to the user
      console.log("Sign-up successful:", response.data);
    } catch (error) {
      // Handle any errors, e.g., show an error message to the user
      console.error("Error signing up:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFormData();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.container}>
        <Typography
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className={classes.input}
          />
          <TextField
            label="Last Name"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className={classes.input}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={classes.input}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className={classes.input}
          />
          <TextField
            //label="Date of Birth"
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            required
            className={classes.input}
          />
          <TextField
            label="Contact Number"
            type="tel"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            required
            className={classes.input}
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className={classes.input}
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" className={classes.button}>
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" align="center" color="textSecondary">
          Already have an account?{" "}
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default SignUpPage;
