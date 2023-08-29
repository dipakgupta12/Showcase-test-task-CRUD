import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import "./SignIn.css";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    axios
      .post("http://localhost:8000/login", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
         
          window.location.href = "/home";
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            p: 3,
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: 3,
          }}
          >
          <h2>Login </h2>
          <TextField
            label="Username"
            variant="outlined"
            name="username"
            fullWidth
            required
            margin="normal"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            fullWidth
          >
            Login
          </Button>
        </Box>
        <small>
          Need an account? <Link to="/">Register here</Link>
        </small>
      </form>
    </Box>
  );
};

export default SignIn;
