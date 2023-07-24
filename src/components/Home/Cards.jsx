import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const BasicCard=({Diraction,Departement,PostFilier,nbrPost})=> {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
         Direction {Diraction}
        </Typography>
        <Typography variant="h6" component="div">
         Departement {Departement}
        </Typography>
        <Typography variant="h7" component="div">
         Le poste à filière: {PostFilier}
        </Typography>
        <Typography variant="h7" component="div">
         Nombre de poste: {nbrPost}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Voir plus</Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard