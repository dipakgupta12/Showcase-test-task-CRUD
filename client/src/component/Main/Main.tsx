import { Box, TextField, Button, Modal } from "@mui/material";
import React from "react";
import "./Main.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

interface ModalProps {
  isModalOpen: boolean;
  isOpen: boolean;
  onClose: () => void;
  data: {
    name: string;
    username: string;
    email: string;
    phone: string;
    id: string;
  }[];
  nameofschool: string;
  degree: string;
  fieldofstudy: string;
  startyear: any;
  endyear: number;
  grade: string;
  description: string;
}

class Main extends React.Component {
  constructor(props: ModalProps) {
    super(props);

    this.state = {
      isModalOpen: false,
      data: [],
      nameofschool: "",
      degree: "",
      fieldofstudy: "",
      startyear: "",
      endyear: "",
      grade: "",
      description: "",
    };
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    const {
      nameofschool,
      degree,
      fieldofstudy,
      startyear,
      endyear,
      grade,
      description,
    }: any = this.state;

    const userData = {
      nameofschool,
      degree,
      fieldofstudy,
      startyear,
      endyear,
      grade,
      description,
    };

    axios
      .post("http://localhost:8000/createrecord", userData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.error("Server responded with:", err.response.data);
        } else {
          console.error("Request failed:", err.message);
        }
      });
  };

  handleInputChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { isModalOpen }: any = this.state;
    const {
      nameofschool,
      degree,
      fieldofstudy,
      startyear,
      endyear,
      grade,
      description,
    }: any = this.state;

    return (
      <Box>
        <h2> Add Education Experience here</h2>
        <Button onClick={this.openModal} variant="contained">
          Add Education +
        </Button>
        {isModalOpen && (
          <div className="modal-overlay">
            <form>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <TextField
                  name="nameofschool"
                  label="Name of School"
                  value={nameofschool}
                  fullWidth
                  onChange={(e) => this.handleInputChange(e)}
                />
                <TextField
                  name="degree"
                  label="Degree"
                  fullWidth
                  value={degree}
                  onChange={(e) => this.handleInputChange(e)}
                />
                <TextField
                  name="fieldofstudy"
                  label="Field of Study"
                  fullWidth
                  value={fieldofstudy}
                  onChange={(e) => this.handleInputChange(e)}
                />
                <TextField
                  name="startyear"
                  label="Start Year"
                  fullWidth
                  value={startyear}
                  onChange={(e) => this.handleInputChange(e)}
                />
                <TextField
                  name="endyear"
                  label="End Year"
                  fullWidth
                  value={endyear}
                  onChange={(e) => this.handleInputChange(e)}
                />
                <TextField
                  name="grade"
                  label="Grade"
                  fullWidth
                  value={grade}
                  onChange={(e) => this.handleInputChange(e)}
                />
                <TextField
                  name="description"
                  label="Description"
                  multiline
                  rows={4}
                  fullWidth
                  value={description}
                  onChange={(e) => this.handleInputChange(e)}
                />

                <Button
                  onClick={(e) => this.handleSubmit(e)}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
                <Button
                  onClick={this.closeModal}
                  variant="contained"
                  color="warning"
                >
                  close
                </Button>
              </Box>
            </form>
          </div>
        )}
      </Box>
    );
  }
}
export default Main;
