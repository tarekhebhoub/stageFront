import React from "react";
import Resume from './components/Resume'
import Formation from './components/Formation'
import Parcours from './components/Parcours'
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
const ProfileSubmit= () => {
  const {id}=useParams()
  console.log(id)
  const defaultTheme = createTheme();
  const url='http://127.0.0.1:8000/'
  const token=localStorage.getItem('token')
  const navigate=useNavigate()
  const handleSubmitClick=()=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.put(url+'submitFile/'+id+'/',{},config)
      .then((res) => {
      navigate('/')
    })
    .catch((e) => {
      console.log(url)
    });
  }
  const handleModifieClick=()=>{
    console.log("tarek")
  }

  return(
    <ThemeProvider theme={defaultTheme}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Resume/>
        </Grid>
        <Grid container spacing={1} item xs={7}>
          <Card >
            <CardContent>
                <Formation id={id}/>
                <Parcours />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleModifieClick}
                >
                  Modifie Formations
                </Button>
              </CardContent>
          </Card>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmitClick}
        >
          Submit Profile
        </Button>
      </Grid>
    </ThemeProvider>
  )
};

export default ProfileSubmit;
