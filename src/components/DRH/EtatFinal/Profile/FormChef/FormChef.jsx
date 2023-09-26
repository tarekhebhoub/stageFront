import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'

const FormChef=({checked,setChecked,id})=>{
  const token=localStorage.getItem('token')
  console.log('________________________________________________')
  console.log('tarek')
  const url='http://127.0.0.1:8000/'
  const [file,setFile]=useState('')
    
  const [Reponse_DRH,setReponse_DRH]=useState(false)
  const [Reponse_commesion,setReponse_commesion]=useState(false)
  const [response_Dir,setresponse_Dir]=useState(false)
  const [favorable,setfavorable]=useState(false)
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
      console.log(data)
      if(data.Reponse_DRH!=null){
        setReponse_DRH(data.Reponse_DRH)
      }
      if(data.Reponse_commesion!=null){
        setReponse_commesion(data.Reponse_commesion)

      }
      if(data.response_Dir!=null){
        setresponse_Dir(data.response_Dir)
      }
      if(data.favorable!=null){
        setfavorable(data.favorable)
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
        Fichier Satisfaire!!!?
      </Typography>
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
          <FormControlLabel control={<Checkbox disabled checked={Reponse_DRH}  />} label="Satisfaire" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox disabled checked={Reponse_commesion}  />} label="ShortList" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox disabled checked={response_Dir}  />} label="Acceptable" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox disabled checked={favorable}  />} label="Favorable" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default FormChef;
