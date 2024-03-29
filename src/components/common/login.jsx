import React from 'react';
import { Avatar, Grid, Paper, TextField, Typography, Link, FormControlLabel, Button, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const Login= ({handleChange}) => {
    const paperStyle = {padding: 20, height : '75vh', width: 300 , margin:"0 auto"}
    const avatarStyle= {backgroundColor: 'green'}
    const btnStyle= {margin: '8px, 0'}
    return (
    
       <Grid>
        <Paper style= {paperStyle} >
        
          <Grid align= 'center'> 
          <Avatar style={avatarStyle}> <LockOutlinedIcon/> </Avatar>
          <h2>sign in  </h2>  
          </Grid>
          <TextField label= 'Username' placeholder='Enter user name' fullWidth required>  </TextField>
          <TextField label= 'Password' placeholder='Enter Password' type= 'password' fullWidth required>  </TextField>
          <FormControlLabel
        control={
          <Checkbox
            
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />

      <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>Sign in </Button>
      <Typography>
      <Link href="#" >
             Forgot Password?
            </Link>
      </Typography>

      <Typography>
      Dont have account?
      <Link href="#" onClick={()=> handleChange("event", 1)}>
             Sign Up
            </Link>
      </Typography>

        </Paper>
       </Grid>
    )
}

