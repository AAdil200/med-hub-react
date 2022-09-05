/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './patientForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      overflow: 'hidden',
      margin: theme.spacing(2),
      width: 300,
    },
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: "auto"
  },
}));


const PatientForm = () => {
  const [name, setName] = useState({});
  const classes = useStyles();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setName(values => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn(name);
    alert(`The name you entered was:`);
  };
  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>

          <Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off"
              onSubmit={handleSubmit}>
              <TextField id="outlined-basic" label="First Name" name="fName" variant="outlined" value={name.fName || ""} size="small" onChange={handleChange} />
              <TextField id="outlined-basic" label="Last Name" name="lName" value={name.lName || ""}
                variant="outlined" size="small" onChange={handleChange} />
              <TextField id="outlined-basic" label="Email" name="email" value={name.email || ""} variant="outlined" size="small" onChange={handleChange} />
              <div>
                <Button type="submit" className="button" variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
};

export default PatientForm;;