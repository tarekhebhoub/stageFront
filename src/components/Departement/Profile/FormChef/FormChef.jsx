import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const FormChef=({NomRespo,SetNomRespo,PrenomRespo,SetPrenomRespo,fanction,Setfanction,CompetanceRespo,SetCompetanceRespo,Commentaire,SetCommentaire})=>{
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        FICHE D’APPRECIATION
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} >
          <TextField
            required
            id="NomRespo"
            name="NomRespo"
            label="Nom"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={NomRespo}
            onChange={(e)=> SetNomRespo(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} >
          <TextField
            required
            id="PrenomRespo"
            name="PrenomRespo"
            label="Prenom"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={PrenomRespo}
            onChange={(e)=> SetPrenomRespo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="fanction"
            name="fanction"
            label="Fonction"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={fanction}
            onChange={(e)=> Setfanction(e.target.value)}
          />
        </Grid>

        
        <Grid item xs={12} >
          <TextField
            required
            id="CompetanceRespo"
            name="CompetanceRespo"
            label="Quelles sont les compétences que vous remarquez chez le candidat:"
            fullWidth
            autoComplete="CompetanceRespo"
            variant="standard"
            value={CompetanceRespo}
            onChange={(e)=> SetCompetanceRespo(e.target.value)}
          />
        </Grid>
       <Grid item xs={12}>
          <TextField
            id="Commentaire"
            name="Commentaire"
            label="Commentez"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={Commentaire}
            onChange={(e)=> SetCommentaire(e.target.value)}
          />
        </Grid>
     
      </Grid>
    </React.Fragment>
  );
}

export default FormChef;
