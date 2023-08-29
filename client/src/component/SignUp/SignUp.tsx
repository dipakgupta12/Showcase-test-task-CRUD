import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

interface Props {
  username: string;
  email: string;
  password: string;
}

class SignUp extends React.Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e: any) => {
    const { username, email, password }: any = this.state;
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };
    axios.post("http://localhost:8000/register", userData).then((response) => {
      console.log(response.status, response.data);
    });
  };
  handleInputChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password }: any = this.state;
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
        <h2>Sign Up Here </h2>
        <form>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            <TextField
              label="Username"
              name="username"
              variant="outlined"
              margin="normal"
              type="text"
              value={username}
              required
              onChange={(e) => this.handleInputChange(e)}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              margin="normal"
              type="email"
              required
              value={email}
              onChange={(e) => this.handleInputChange(e)}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              margin="normal"
              required
              value={password}
              onChange={(e) => this.handleInputChange(e)}
            />
            <Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => this.handleSubmit(e)}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
          <div>
            <p>
              Already have an account? <Link to="/signin">Log in</Link>
            </p>
          </div>
        </form>
      </Box>
    );
  }
}

export default SignUp;
