import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';




const BasicCard=({Diraction,Departement,PostFilier,nbrPost,offre,id})=> {
  const url='http://127.0.0.1:8000/'
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/Offre/'+id)
  }
  const handleInfo=()=>{
     window.open(url+'fichier/2/FichierB/'); 
  }
  const handleFichier=()=>{

    navigate('FichierForm')
  }
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
        {!offre?<Button size="small" onClick={handleClick}>Voir plus</Button>:(
          <div>
            <Button size="small" onClick={handleInfo}>Exigences</Button>
            <Button size="small" onClick={handleFichier}>Inscrire</Button>
          </div>
          )
        }
      </CardActions>
    </Card>
  );
}

export default BasicCard