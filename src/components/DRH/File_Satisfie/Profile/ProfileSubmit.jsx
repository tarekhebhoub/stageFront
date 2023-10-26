import React,{useState,useEffect} from "react";
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
import FormChef from './FormChef/FormChef'

import axios from 'axios'
const ProfileSubmit= () => {
  // const [iduser,setIduser]=useState('')
  const {id,iduser}=useParams()
  
  const defaultTheme = createTheme();
  // const url='http://127.0.0.1:8000/'
  const url = process.env.REACT_APP_API_URL;
  const token=localStorage.getItem('token')
  const navigate=useNavigate()

  const [checked,setChecked]=useState(false)

  // const getUsers=()=>{
  //   const config = {
  //     headers: {
  //       'Authorization': `Token ${token}`,
  //     }
  //   }
  //   axios.get(url+'users_comm/',config)
  //     .then((res) => {
  //       setUsers(res.data)
  //   })
  //   .catch((e) => {
  //     console.log(url)
  //   });
  // }
  // useEffect(()=>{
  //   getUsers();
  // },[])

  const handleSubmitClick=()=>{
    const data={
     'Reponse_DRH':checked
    }
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.put(url+'set_satisfie/'+id+'/',{data},config)
      .then((res) => {
        console.log(res)
        navigate(-1)
    })
    .catch((e) => {
      console.log(url)
    });

  }
 // const getiduser=()=>{
 //  const config = {
 //      headers: {
 //        'Authorization': `Token ${token}`,
 //      }
 //    }
 //    axios.get(url+'fichier/'+id+'/',config)
 //      .then((res) => {
 //      const id=res.data.id_Emp
 //      setIduser(id)
 //      console.log(iduser)
 //    })
 //    .catch((e) => {
 //      console.log(url)
 //    });
 // }
 //  useEffect(()=>{
 //    getiduser()
 //  },[])

  return(
    <ThemeProvider theme={defaultTheme}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Resume id={iduser}/>
        </Grid>
        <Grid container spacing={1} item xs={7}>
          <Card >
            <CardContent>
                <Formation id={id}/>
                <Parcours id={iduser}/>
                
              </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card >
            <CardContent>
              <FormChef
                checked={checked}
                setChecked={setChecked}
              />
              </CardContent>
          </Card>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmitClick}
        >
          ENVOYER L'APPRECIATION
        </Button>
      </Grid>
    </ThemeProvider>
  )
};

export default ProfileSubmit;
