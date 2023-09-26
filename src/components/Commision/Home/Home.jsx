import React,{useState,useEffect} from 'react'
import BasicCard from './Cards'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios'
import Stack from '@mui/material/Stack';
import SearchField from './SearchField'
const Home=()=>{
  const url='http://127.0.0.1:8000/'
  const [files,setFiles]=useState([])
  const token=localStorage.getItem('token')
  const [data,setData]=useState([])
  const getFiles=()=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.get(url+'fileforCom/',config)
      .then((res) => {
      const data = res.data
      console.log(data)
      setFiles(data)
      setData(data)
    })
    .catch((e) => {
      console.log(url)
    });
  }
  useEffect(()=>{
    getFiles()
  },[])
  const searchOffre=(e)=>{
    console.log(e)
    const searchString = e; // Replace this with the characters or substring you want to filter by.
    const filteredfiles = files.filter(file => file.id_Emp.toLowerCase().includes(searchString.toLowerCase()));
    if(e){
      console.log("ziad")

      setData(filteredfiles)
    }else{
      console.log("tarek")
      setData(files)
    }
  }
  const Files=data.map((fils,index)=>{
    return(
      <Grid key={index} item xs={4}>
        <BasicCard Employee={fils.id_Emp} EmployeeNom={fils.nom} id={fils.id} Post={fils.PourPoste} Raison={fils.Raison_recrut} shortList={fils.Reponse_commesion}/>
      </Grid>
      )
    })

  return(
    
    <Stack spacing={2}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SearchField onChange={(e)=>searchOffre(e)}/>
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Files}
      </Grid>
    </Stack>
  )
}
export default Home