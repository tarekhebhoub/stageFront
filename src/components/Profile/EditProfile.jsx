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

const EditProfile=()=>{
  	const url='http://127.0.0.1:8000/'
  	const navigate = useNavigate();
  	const [selectedImage, setSelectedImage] = useState(null);
	const [structure,setStrucutre]=useState([])
  	const [departement,setDepartement]=useState([])
  	const [departementId,setDepartementId]=useState([])
    const [profileDate,setProfileData]=useState()
 	const [structureId,setStructureId]=useState([])
 	const token=localStorage.getItem('token')
	const defaultTheme = createTheme();
  const [defaultStructure,setDefaultStructure]=useState({})
  const [defaultDepartement,setDefaultDepartement]=useState({})
	const handleImageChange = (event) => {
    	const file = event.target.files[0];
    	setSelectedImage(file);
  	};
  	

    const getProfileData=()=>{
      const config = {
        headers: {
          'Authorization': `Token ${token}`,
        }
      }
      axios.get(url+'profileData/',config)
        .then((res)=>{
          const data=res.data
          setfirstName(data.first_name)
          setlastName(data.last_name)
          setdateBirth(data.Date_Naiss)
          setphone(data.Telephone)
          setposteActuel(data.Poste_actuel)
          setEchelle(data.Echelle)
          setDate_Recrut(data.Date_Recrut)
          setStructure(data.Id_struc)
          setdepartement(data.Id_dep)
          setusername(data.username)
          setemailPers(data.Adresse_perso)
          setemailProf(data.email)
          setProfileData(data)
          console.log(res.data)
        })
        .catch((e)=>{
          console.log(e)
        })
    }
  // const url=process.env.REACT_APP_URL
  	const getStructure=()=>{
	    const config = {
	      headers: {
	        //'Authorization': `Token ${token}`,
	      }
	    }
	    axios.get(url+'structure/')
	      .then((res) => {
	      const data = res.data
	      setStrucutre(data)
        console.log(1)
	    })
	    .catch((e) => {
	      console.log(e)
	    });
 	}
  const DefaultStrTrait=()=>{
    const defaultstr=structure.find(x => x.id === profileDate?.Id_struc)
    setDefaultStructure(defaultstr)
    if(departement.length==0){
      getDepartement(defaultstr.id)
      
    }
    else{
      const defaultDep=departement.find(x=>x.id===profileDate?.Id_dep)
      setDefaultDepartement(defaultDep)
      setDepartementId(defaultDep.id)
      console.log(departement)
    }
   
    console.log(3)
  }


	useEffect(()=>{
    if(structure.length==0){
      getStructure();
    }
    if(structure.length!=0){
     if(!profileDate){
      getProfileData();
     }
     if(profileDate){
      DefaultStrTrait(); 
     }
    }
	},[structure,profileDate,departement])


  	const getDepartement=(str)=> {
	    setStructureId(str)
	    const config = {
	      headers: {
	        'Authorization': `Token ${token}`,
	        "Content-Type": "multipart/form-data",
	      }
	    }
	    axios.get(url+'structure/'+str+'/')
	      .then((res) => {
	      const data = res.data
	      setDepartement(data)
	    })
	    .catch((e) => {
	      console.log(url)
	    });
  	}


  	const handleSubmit = (event) => {
	    event.preventDefault();
	    const formData = new FormData(event.target);
	    let data={}
	    let form_data = new FormData();
	    for (let [key, value] of formData.entries()) { 
	      console.log(key)
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
	        'Authorization': `Token ${token}`,
	       "Content-Type": "multipart/form-data"
	      }
	    }
	    axios.put(url+'editProfile/',form_data,config)
	      .then((res) => {
	        console.log(res.data)
	        navigate(-1)
	    })
	    .catch((e) => {
	      console.log(url)
	    });
  	};
    const handleChange=(e)=>{
      console.log(e.target.value)
    }


    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [dateBirth,setdateBirth]=useState('')
    const [phone,setphone]=useState('')
    const [posteActuel,setposteActuel]=useState('')
    const [Echelle,setEchelle]=useState('')
    const [Date_Recrut,setDate_Recrut]=useState('')
    const [Structure,setStructure]=useState('')
    const [Departement,setdepartement]=useState('')
    const [username,setusername]=useState('')
    const [emailPers,setemailPers]=useState('')
    const [emailProf,setemailProf]=useState('')

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
            Edit Profile
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
                  defaultValue=' '
                  onChange={handleChange}
                  value={firstName}
                  onChange={(e)=>setfirstName(e.target.value)}
                  
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
                  defaultValue=' '
                  value={lastName}
                  onChange={(e)=>setlastName(e.target.value)}
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
                      // value='2002-01-03'
                      //value={dateBirth}
                      // defaultValue=' '
                      value={dayjs(dateBirth)}
                      onChange={(e)=>setdateBirth(e)}
                      
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
                  defaultValue=' '
                  value={phone}
                  onChange={(e)=>setphone(e.target.value)}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  
                  id="posteActuel"
                  label="Poste actuel"
                  name="Poste_actuel"
                  autoComplete="posteActuel"
                  defaultValue=' '
                  value={posteActuel}
                  onChange={(e)=>setposteActuel(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  
                  id="Echelle"
                  label="Echelle"
                  name="Echelle"
                  autoComplete="Echelle"
                  defaultValue=' '
                  value={Echelle}
                  onChange={(e)=>setEchelle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateField']}>
                    <DateField 
                      id='Date_Recrut'
                      label="Date de Recrutement" 
                      format="YYYY-MM-DD"
                      name="Date_Recrut"
                      fullWidth
                      //value={dateBirth}
                      // defaultValue=' '
                      value={dayjs(Date_Recrut)}
                      onChange={(e)=>setDate_Recrut(e)}
                      />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="Structure"
                name="Structure"
                // defaultValue=' '
                // value={profileDat e?.Structure}
                // defaultValue={{id:5,Nom_struc:"tarek"}}
                value={defaultStructure}
                options={structure}
                getOptionLabel={(option) => option.Nom_struc} // Specify how to display the label in the Autocomplete dropdown
                onChange={(e, selectedOption) => { getDepartement(selectedOption?.id) }}
                // sx={{ width: 300 }}
                renderInput={(params) => <TextField  {...params} name="Structure" label="Structure" />}
              />
              </Grid>

              <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="Id_dep"
                // defaultValue=' ' 
                // value={profileDate?.Departement} 
                name="Departement"
                value={defaultDepartement}
                options={departement}
                getOptionLabel={(option) => option.Nom_dep} // Specify how to display the label in the Autocomplete dropdown
                 onChange={(e, selectedOption) => { setDepartementId(selectedOption?.id) }}
                // sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} name="Departement" label="Departement" />}
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
                  defaultValue=' ' 
                  value={username} 
                  onChange={(e)=>setusername(e.target.value)}
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
                  defaultValue=' ' 
                  value={emailPers} 
                  onChange={(e)=>setemailPers(e.target.value)}
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
                  defaultValue=' ' 
                  value={emailProf} 
                  onChange={(e)=>setemailProf(e.target.value)}
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
                    // defaultValue=' ' 
                    // value={profileDate?profileDate.Photo:null} 
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
              Edit Profile
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default EditProfile


  


  


 




