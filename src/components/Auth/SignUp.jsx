import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import dayjs from 'dayjs';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const SignUp=()=>{
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let data={}
    for (let [key, value] of formData.entries()) { 
      if(key!='Structure'){
        data[key]=value
      }
    }
    console.log(data)
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Nom"
                  required
                  fullWidth
                  id="firstName"
                  label="Nom"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Prenom"
                  name="Prenom"
                  autoComplete="family-name"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateField']}>
                    <DateField 
                      id='dateBirth'
                      label="Date de naissance" 
                      format="YYYY-MM-DD"
                      name="Date_Naiss"
                      fullWidth
                      //value={dateBirth}
                      
                      />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="phone"
                  name="Telephone"
                  label="Phone Number"
                  fullWidth
                  autoComplete="Téléphone/ Fax"
                 
                />
              </Grid>
               <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="posteActuel"
                  label="Poste actuel"
                  name="Poste_actuel"
                  autoComplete="posteActuel"
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-Structure"
                  name="Structure"
                  required
                  fullWidth
                  id="structure"
                  label="Structure"
                  autoFocus
                  
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-Echelle"
                  name="Id_dep"
                  required
                  fullWidth
                  id="echelle"
                  label="Echelle"
                  autoFocus
                 
                />
              </Grid>
              

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Nom D'utilisateur"
                  name="username"
                  autoComplete="username"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="emailPers"
                  label="Adresse personnelle"
                  name="Adresse_perso"
                  autoComplete="email"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="emailProf"
                  label="Adresse professionnelle"
                  name="Adresse_prof"
                  autoComplete="email"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  component="label"
                >
                  Upload Photo
                  <input
                    type="file"
                    hidden
                    id="Photo"
                    name="Photo"
                    required
                  />
                </Button>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp