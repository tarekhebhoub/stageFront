import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import axios from 'axios'

const FormChef=({checked,setChecked,id})=>{

  const token=localStorage.getItem('token')
  // const url='http://127.0.0.1:8000/'
  const url = process.env.REACT_APP_API_URL;
  
  const [file,setFile]=useState('')
  const getFile=()=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.get(url+'fichier/'+id+'/',config)
      .then((res) => {
      const data = res.data
      setFile(data)
      if(data.response_Dir==true){
        setChecked(true)
      }
    })
    .catch((e) => {
      console.log(url)
    });
  }
  useEffect(()=>{
    getFile();
  },[])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Acceptation
      </Typography>
      <FormGroup>
        <Grid container spacing={3}>
          <Grid item xs={6} >
            <TextField
              disabled
              id="NomRespo"
              name="NomRespo"
              label="Nom"
              fullWidth
              variant="standard"
              value={file.NomRespo}
              defaultValue=' '
              />
          </Grid>
          <Grid item xs={6} >
            <TextField
              disabled
              id="PrenomRespo"
              name="PrenomRespo"
              label="Prenom"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              value={file.PrenomRespo}
              defaultValue=' '
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled
              id="fanction"
              name="fanction"
              label="Fonction"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              value={file.fanction}
              defaultValue=' '
              />
          </Grid>
          <Grid item xs={12} >
            <TextField
              disabled
              id="CompetanceRespo"
              name="CompetanceRespo"
              label="Quelles sont les compétences que vous remarquez chez le candidat:"
              fullWidth
              autoComplete="CompetanceRespo"
              variant="standard"
              value={file.CompetanceRespo}
              defaultValue=' '
            />
          </Grid>
         <Grid item xs={12}>
            <TextField
              disabled
              id="Commentaire"
              name="Commentaire"
              label="Commentez"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              value={file.Commentaire}
              defaultValue=' '
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)} />} label="Acceptable" />
          </Grid>
        </Grid>
      </FormGroup>
    </React.Fragment>
  );
}

export default FormChef;
