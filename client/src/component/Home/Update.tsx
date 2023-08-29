import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Paper, Typography, TextField, Button, Grid } from "@mui/material";

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    nameofschool: "",
    degree: "",
    fieldofstudy: "",
    startyear: "",
    endyear: "",
    grade: "",
    description: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/getuserbyId/"+id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleUpdate = (e: any) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/updateRecord/"+id,values)
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Paper sx={{ p: 4, mt: 6, maxWidth: 600, mx: "auto" }}>
        <Typography variant="h5" gutterBottom>
          Update User
        </Typography>
        <form onSubmit={(e) => handleUpdate(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name of School"
                fullWidth
                value={values.nameofschool}
                onChange={(e) => setValues({ ...values, nameofschool: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Degree"
                fullWidth
                value={values.degree}
                onChange={(e) => setValues({ ...values, degree: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Field of Study"
                fullWidth
                value={values.fieldofstudy}
                onChange={(e) => setValues({ ...values, fieldofstudy: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Start Year"
                fullWidth
                value={values.startyear}
                onChange={(e) => setValues({ ...values, startyear: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="End Year"
                fullWidth
                value={values.endyear}
                onChange={(e) => setValues({ ...values, endyear: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Grade"
                fullWidth
                value={values.grade}
                onChange={(e) => setValues({ ...values, grade: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                value={values.description}
                onChange={(e) => setValues({ ...values, description: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="success">
                Update
              </Button>
              <Button component={Link} to={"/home"} variant="contained" color="primary" sx={{ marginLeft: 2 }}>
                Back
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
export default Update;
