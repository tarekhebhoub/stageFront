import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';


const FormChef=({checked,setChecked})=>{
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Fichier Satisfaire!!!?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox checked={checked} onChange={(e)=>setChecked(e.target.checked)} />} label="Satisfaire" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default FormChef;
