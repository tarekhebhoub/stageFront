import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const DataGeneral=({PourPoste,SetRaPourPoste,Raison_recrut,SetRaison_recrut,Specialite,SetSpecialite,formation_comp,Setformation_comp,seminaire,Setseminaire})=>{
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informations Generales/Formation
      </Typography>
      <Typography variant="h6" gutterBottom>
        Post :{PourPoste}
      </Typography>
      <Grid container spacing={3}>
      {/*  <Grid item xs={12} >
          <TextField
            required
            id="PourPoste"
            name="PourPoste"
            // label="Condidat pour le poste de:"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={PourPoste}
            // defaultValue={PourPoste}
            disabled
            onChange={(e)=> SetRaPourPoste(e.target.value)}
          />
        </Grid>*/}
        <Grid item xs={12} >
          <TextField
            required
            id="Raison_recrut"
            name="Raison_recrut"
            label="Raison qui vous incitent à vous porter candidat:"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={Raison_recrut}
            onChange={(e)=> SetRaison_recrut(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Specialite"
            name="Specialite"
            label="formation de base:"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={Specialite}
            onChange={(e)=> SetSpecialite(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="formation_comp"
            name="formation_comp"
            label="Formation complémentaires"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={formation_comp}
            onChange={(e)=> Setformation_comp(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="seminaire"
            name="seminaire"
            label="Séminaires et stages"
            fullWidth
            autoComplete="seminaire"
            variant="standard"
            value={seminaire}
            onChange={(e)=> Setseminaire(e.target.value)}
          />
        </Grid>
       
     
      </Grid>
    </React.Fragment>
  );
}

export default DataGeneral;
