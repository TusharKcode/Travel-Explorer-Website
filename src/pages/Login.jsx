import React, { useState } from "react";
import '../styles/login.css';
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {TextField, Button, Snackbar, Alert, Typography, Box} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const navigate = useNavigate();

  const showAlert = (msg, type = 'success') => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        showAlert("Account created successfully!", "success");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        showAlert("Login successful!", "success");
        navigate("/my-bookings");
      }
    } catch (err) {
      showAlert(err.message, "error");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      showAlert("Logged out successfully!", "info");
    } catch (err) {
      showAlert(err.message, "error");
    }
  };

  return (
    <Box className="login-container" data-aos='fade-up'>
      <Typography variant="h5" gutterBottom color="primary">
        {isRegister ? "Create Account" : "Login"}
      </Typography>

      <form onSubmit={handleSubmit} className="login-form">
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          {isRegister ? "Register" : "Login"}
        </Button>
      </form>
      <Box mt={2}>
        <Button 
          variant="text" 
          color="secondary" 
          onClick={() => setIsRegister(!isRegister)} 
          fullWidth
        >
          {isRegister ? "Already have an account? Login" : "New user? Register"}
        </Button>
        <Button 
          variant="outlined" 
          color="error" 
          onClick={handleLogout} 
          fullWidth
          sx={{mt: 1}}
        >
          Logout
        </Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{vertical:"top", horizontal:"center"}}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{width:"100%"}}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
