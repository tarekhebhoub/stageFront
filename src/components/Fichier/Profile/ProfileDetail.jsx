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
import EtatFichier from './EtatFichier/EtatFichier'

import axios from 'axios'
const ProfileSubmit= () => {
  // const [iduser,setIduser]=useState('')
  const {id,iduser}=useParams()
  
  const defaultTheme = createTheme();
  // const url='http://127.0.0.1:8000/'
  const url = process.env.REACT_APP_API_URL;
  const token=localStorage.getItem('token')
  const navigate=useNavigate()
  const [NomRespo,SetNomRespo]=useState('')
  const [PrenomRespo,SetPrenomRespo]=useState('')
  const [fanction,Setfanction]=useState('')
  const [CompetanceRespo,SetCompetanceRespo]=useState('')
  const [Commentaire,SetCommentaire]=useState('')
  const [checked,setChecked]=useState(false)


  const handleSubmitClick=()=>{
    const data={
      'Reponse_commesion':checked,
    }
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.put(url+'filePutCom/'+id+'/',{data},config)
      .then((res) => {
        console.log(res.data)
        navigate('/')
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
              <EtatFichier
                id={id}
              />
              </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </ThemeProvider>
  )
};

export default ProfileSubmit;
