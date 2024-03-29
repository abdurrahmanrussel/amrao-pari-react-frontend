import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
  Box,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const Signup = () => {
  const paperStyle = { padding: "20px 20px", width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { margintop: 5 };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please Fill This Form to Create an Account
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter Your name"
          ></TextField>
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter Your Email"
          ></TextField>
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter Your phone nmbr"
          ></TextField>
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter Your Pass"
          ></TextField>
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Enter Your Pass again"
          ></TextField>
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept terms & Condions"
          />
          
          <Button type="submit"  variant="contained" color="primary">
            Sign Up
          </Button>
          
          

        </form>
      </Paper>
    </Grid>
  );
};
