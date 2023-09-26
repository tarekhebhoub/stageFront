import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';




const BasicCard=({Employee,Post,Raison,id,EmployeeNom,reponseDep})=> {
  const url='http://127.0.0.1:8000/'
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/ProfileDetail/'+id+'/'+Employee)
  }
  const theme = createTheme({
    palette: {
      background: {
        paper:reponseDep==true? '#AFE1AF':reponseDep==false?'#FF4433' :'#FFFFFF', // your color
      },
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
           {EmployeeNom}
          </Typography>
          <Typography variant="h6" component="div">
           Post: {Post}
          </Typography>
          <Typography variant="h7" component="div">
           Raisons qui vous incitent à vous porter candidat:
          </Typography>
          <Typography variant="h7" component="div">
           {Raison}
          </Typography>
        </CardContent>
        <CardActions> 
          <Button size="small" onClick={handleClick}>Voir plus</Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default BasicCard