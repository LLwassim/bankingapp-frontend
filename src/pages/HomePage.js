import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Navbar from "../components/Navbar";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f2f2f2",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: theme.spacing(3),
  },
  main: {
    display: "flex",
    justifyContent: "space-around",
    margin: theme.spacing(2),
    flexGrow: 1,
  },
  accountSummary: {
    backgroundColor: "#fff",
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    width: "45%",
  },
  transactionHistory: {
    backgroundColor: "#fff",
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    width: "45%",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
  footer: {
    textAlign: "center",
    padding: theme.spacing(1),
    backgroundColor: "#007bff",
    color: "#fff",
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h4" className={classes.header}>
          Welcome to City National Bank
        </Typography>
        <main className={classes.main}>
          <section className={classes.accountSummary}>
            <Typography variant="h6">Account Summary</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Account Number" secondary="1234567890" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Balance" secondary="$10,000.00" />
              </ListItem>
            </List>
          </section>
          <section className={classes.transactionHistory}>
            <Typography variant="h6">Transaction History</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Withdrawal" secondary="- $500.00" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Deposit" secondary="+ $1,000.00" />
              </ListItem>
            </List>
          </section>
        </main>
      </Container>
      <footer className={classes.footer}>
        <Typography variant="body2">&copy; 2023 Wassim Lkorchy</Typography>
      </footer>
    </div>
  );
}

export default HomePage;
