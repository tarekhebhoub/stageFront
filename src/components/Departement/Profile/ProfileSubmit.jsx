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
  const url='http://127.0.0.1:8000/'
  const token=localStorage.getItem('token')
  const navigate=useNavigate()

  const [NomRespo,SetNomRespo]=useState('')
  const [PrenomRespo,SetPrenomRespo]=useState('')
  const [fanction,Setfanction]=useState('')
  const [CompetanceRespo,SetCompetanceRespo]=useState('')
  const [Commentaire,SetCommentaire]=useState('')
  const [checked,setChecked]=useState(false)
  const [responseDep,setReponseDep]=useState(false)
  const handleSubmitClick=()=>{
    const data={
      'NomRespo':NomRespo,
      'PrenomRespo':PrenomRespo,
      'fanction':fanction,
      'CompetanceRespo':CompetanceRespo,
      'Commentaire':Commentaire,
      'favorable':checked,
    }
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.put(url+'filePutDep/'+id+'/',{data},config)
      .then((res) => {
        console.log(res.data)
        navigate('/')
    })
    .catch((e) => {
      console.log(url)
    });

  }
 const getFile=()=>{
  const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.get(url+'fichier/'+id+'/',config)
      .then((res) => {
        const file=res.data
        SetNomRespo(file.NomRespo)
        SetPrenomRespo(file.PrenomRespo)
        Setfanction(file.fanction)
        SetCompetanceRespo(file.CompetanceRespo)
        SetCommentaire(file.Commentaire)
        setChecked(file.favorable)
        setReponseDep(file.response_Dep)
    })
    .catch((e) => {
      console.log(url)
    });
 }
  useEffect(()=>{
    getFile()
  },[])

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
                responseDep={responseDep}
                NomRespo={NomRespo}
                PrenomRespo={PrenomRespo}
                fanction={fanction}
                CompetanceRespo={CompetanceRespo}
                Commentaire={Commentaire}
                SetNomRespo={SetNomRespo}
                SetPrenomRespo={SetPrenomRespo}
                Setfanction={Setfanction}
                SetCompetanceRespo={SetCompetanceRespo}
                SetCommentaire={SetCommentaire}
                setChecked={setChecked}
                checked={checked}
              />
              </CardContent>
          </Card>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmitClick}
          disabled={responseDep?true:false}
        >
          ENVOYER L'APPRECIATION
        </Button>
      </Grid>
    </ThemeProvider>
  )
};

export default ProfileSubmit;
