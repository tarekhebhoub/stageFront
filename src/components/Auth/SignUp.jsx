import React,{useState,useEffect} from 'react';
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
import Autocomplete from '@mui/material/Autocomplete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import axios from 'axios'
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const SignUp=()=>{
  const navigate = useNavigate();
  const [structure,setStrucutre]=useState([])
  const [departement,setDepartement]=useState([])

  const [departementId,setDepartementId]=useState([])
  const [structureId,setStructureId]=useState([])

  // const url=process.env.REACT_APP_URL
  const url='http://127.0.0.1:8000/'
  console.log(url)
  const getStructure=()=>{
    const config = {
      headers: {
        //'Authorization': `Token ${token}`,
      }
    }
    axios.get(url+'structure/')
      .then((res) => {
      const data = res.data
      console.log(data)
      setStrucutre(data)
    })
    .catch((e) => {
      console.log(url)
    });
  }
  useEffect(()=>{
    getStructure();
  },[])

  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let data={}
    let form_data = new FormData();
    for (let [key, value] of formData.entries()) { 
      if(key=='Structure'){
        form_data.append('Id_struc',structureId);
      }else if(key=='Departement'){
        form_data.append('Id_dep',departementId);
      }
      else{
        form_data.append(key,value);
      }

      
      }
    
    console.log(form_data)
    const config = {
      headers: {
        //'Authorization': `Token ${token}`,
       "Content-Type": "multipart/form-data"
      }
    }
    axios.post(url+'sign-up/',form_data)
      .then((res) => {
        console.log(res)
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('is_superuser',res.data.is_superuser)
        localStorage.setItem('is_departement',res.data.is_departement)
        localStorage.setItem('is_stricture',res.data.is_stricture)
        localStorage.setItem('is_commission',res.data.is_commission)
        window.location.reload();
    })
    .catch((e) => {
      console.log(url)
    });
  };


  const getDepartement=(str)=> {
    setStructureId(str)

    const config = {
      headers: {
        //'Authorization': `Token ${token}`,
        "Content-Type": "multipart/form-data",
      }
    }
    axios.get(url+'structure/'+str+'/')
      .then((res) => {
      const data = res.data
      console.log(data)
      setDepartement(data)
    })
    .catch((e) => {
      console.log(url)
    });
  }


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
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
                  name="first_name"
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
                  name="last_name"
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
              <Grid item xs={12} >
                <TextField
                  required
                  id="phone"
                  name="Telephone"
                  label="Telephone"
                  fullWidth
                  autoComplete="Téléphone/ Fax"
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  
                  id="posteActuel"
                  label="Poste actuel"
                  name="Poste_actuel"
                  autoComplete="posteActuel"
                 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  
                  id="Echelle"
                  label="Echelle"
                  name="Echelle"
                  autoComplete="Echelle"
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateField']}>
                    <DateField 
                      id='dateBirth'
                      label="Date de Recrutement" 
                      format="YYYY-MM-DD"
                      name="Date_Recrut"
                      fullWidth
                      //value={dateBirth}
                      
                      />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="Structure"
                name="Structure"
               
                options={structure}
                getOptionLabel={(option) => option.Nom_struc} // Specify how to display the label in the Autocomplete dropdown
                onChange={(e, selectedOption) => { getDepartement(selectedOption?.id) }}
                // sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Structure" />}
              />
              </Grid>

              <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="Id_dep"
                
                name="Departement"
                options={departement}
                getOptionLabel={(option) => option.Nom_dep} // Specify how to display the label in the Autocomplete dropdown
                 onChange={(e, selectedOption) => { setDepartementId(selectedOption?.id) }}
                // sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Departement" />}
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
                  name="email"
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
                  Ajouter votre Photo
                  <input
                    type="file"
                    hidden
                    onChange={handleImageChange}
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