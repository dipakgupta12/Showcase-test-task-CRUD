import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

function Read() {
  const [values, setValues] = useState({
    nameofschool: "",
    degree: "",
    fieldofstudy: "",
    startyear: "",
    endyear: "",
    grade: "",
    description: "",
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/getuserbyId/" + id)
      .then((res) => {
        setValues(res.data);
      })
  }, []);

  return (
    <Container>
      <Paper sx={{ p: 4, mt: 6, maxWidth: 600, mx: "auto" }}>
        <Typography variant="h5" gutterBottom>
          User Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name of School"
                fullWidth
                value={values.nameofschool}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Degree"
                fullWidth
                value={values.degree}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Field of Study"
                fullWidth
                value={values.fieldofstudy}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Start Year"
                fullWidth
                value={values.startyear}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="End Year"
                fullWidth
                value={values.endyear}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Grade"
                fullWidth
                value={values.grade}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                value={values.description}
                InputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <Link to={`/update/${id}`} className="btn btn-success me-2">
                Update
              </Link>
              <Link to={"/home"} className="btn btn-primary">
                Back
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
export default Read;
