import React,{useState,useEffect} from 'react'
import BasicCard from './Cards'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios'

const Fichier=()=>{

	// const url='http://127.0.0.1:8000/'
	const url = process.env.REACT_APP_API_URL;
  	const [files,setFiles]=useState([])
  	const token=localStorage.getItem('token')
  	console.log(token)
  	const getFiles=()=>{
	    const config = {
	     	headers: {
	        	'Authorization': `Token ${token}`,
	      	}
	    }
	    axios.get(url+'file_for_emp/',config)
	    .then((res) => {
	      	const data = res.data
	      	console.log(data)
	      	setFiles(data)
	    })
	    .catch((e) => {
	      	console.log(url)
	    });
  	}
  	useEffect(()=>{
    	getFiles()
  	},[])
  	const Files=files.map((fils,index)=>{
    return(
      <Grid key={index} item xs={4}>
        <BasicCard Employee={fils.id_Emp} EmployeeNom={fils.nom} id={fils.id} Post={fils.PourPoste} Raison={fils.Raison_recrut}/>
      </Grid>
      )
    })

	return(
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
		    {Files}
		</Grid>
	)
}
export default Fichier



