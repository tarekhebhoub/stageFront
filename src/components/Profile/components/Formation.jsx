import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios'

import Grid from '@mui/material/Grid';

const Formation=({id})=>{
  // const url='http://127.0.0.1:8000/'
  const url = process.env.REACT_APP_API_URL;
  
  const token=localStorage.getItem('token')
  const [file,setFile]=useState('')
  const getFile=()=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.get(url+'fichier/'+id+'/',config)
      .then((res) => {
      const data = res.data
      console.log(data)
      setFile(data)
    })
    .catch((e) => {
      console.log(url)
    });
  }
  useEffect(()=>{
    getFile();
  },[])

  return (
    <>
      <Typography>Candidat pour le poste de: </Typography>
      <Typography>{file.PourPoste}</Typography>
      <Typography>Raisons qui vous incitent à vous porter candidat: </Typography>
      <Typography>{file.Raison_recrut}</Typography>
      <Typography>Formation de base / spécialité: </Typography>
      <Typography>{file.Specialite}</Typography>
      <Typography>Formations Complémentaires: </Typography>
      <Typography>{file.formation_comp}</Typography>
      <Typography>Séminaires et stages: </Typography>
      <Typography>{file.seminaire}</Typography>
              
  </>  
  );
}

export default Formation