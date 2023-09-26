import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';


const FormChef=({users,setUserId})=>{
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choisir Chef de Commission
      </Typography>
      <Grid container spacing={3}>
       
        <Grid item xs={6}>
          <Autocomplete
            disablePortal
            id="Id_dep"
            
            name="Departement"
            options={users}
            getOptionLabel={(option) => option.first_name+' '+option.last_name} // Specify how to display the label in the Autocomplete dropdown
             onChange={(e, selectedOption) => { console.log(selectedOption?.id); setUserId(selectedOption?.id) }}
            // sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Commision" />}
          />
        </Grid>

        
      
      </Grid>
    </React.Fragment>
  );
}

export default FormChef;
