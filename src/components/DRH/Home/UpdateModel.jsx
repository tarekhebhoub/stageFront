import React, { useState,useEffect } from 'react';
import axios from 'axios'

import {  
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Grid

  } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const UpdateModal = ({ open, onClose,id,Diraction,Departement,PostFilier,nbrPost,file }) => {
  
  const url='http://127.0.0.1:8000/'
  const token=localStorage.getItem('token')
  const [structure,setStrucutre]=useState([])
  const [departement,setDepartement]=useState([])
  const [departementId,setDepartementId]=useState([])
  const [structureId,setStructureId]=useState([])

  const [selectedFile,setSelectedFile]=useState(null)

  

  const getStructure=()=>{
    const config = {
      headers: {
        //'Authorization': `Token ${token}`,
      }
    }
    axios.get(url+'structure/')
      .then((res) => {
      const data = res.data
      console.log(data)
      setStrucutre(data)
    })
    .catch((e) => {
      console.log(url)
    });
  }
  useEffect(()=>{
    getStructure()
  },[])
  const getDepartement=(str)=> {
    setStructureId(str)

    const config = {
      headers: {
        //'Authorization': `Token ${token}`,
        "Content-Type": "multipart/form-data",
      }
    }
    axios.get(url+'structure/'+str+'/')
      .then((res) => {
      const data = res.data
      console.log(data)
      setDepartement(data)
    })
    .catch((e) => {
      console.log(url)
    });
  }


  // const [values, setValues] = useState(() =>
  //   columns.reduce((acc, column) => {
  //     acc[column.id ?? ''] = null;
  //     return acc;
  //   }, {}),
  // );
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const formElement = document.getElementById('myForm');
    const formData = new FormData(formElement);


    // const formData = new FormData(event.target);
    let data={}
    let form_data = new FormData();
    for (let [key, value] of formData.entries()) { 
      console.log(key,value)
      if(key=='Structure'){
        form_data.append('Id_struc',structureId);
      }else if(key=='Departement'){
        form_data.append('Id_dep',departementId);
      }
      else{
        form_data.append(key,value);
      }

      
      }
    
    console.log(formData)
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
       "Content-Type": "multipart/form-data"
      }
    }
    axios.post(url+'OffreEmp/',form_data,config)
      .then((res) => {
        console.log(res)
        onClose(true)
    })
    .catch((e) => {
      console.log(url)
    });
  };



  const handlefileChange=(event)=>{
    const file = event.target.files[0];
    setSelectedFile(file);
  }


  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Ajouter Nouveau Parcour</DialogTitle>
      <DialogContent>
        <Box component="form" id='myForm' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <div><br/></div>
          </Grid>
          <Grid item xs={12} >
            <TextField
            key='TitreOffre'
            label={'Titre d\'Offre'}
            name='TitreOffre'
            value={PostFilier}
            // onChange={(e) =>{
            //   setValues({ ...values, [e.target.name]: e.target.value})
            // }
           // }
            fullWidth
           />
          </Grid>
          <Grid item xs={12} >
            <TextField
            key='NombrePoste'
            label='Numéro des post Disponible'
            name='NombrePoste'
            value={nbrPost}
            // onChange={(e) =>{
            //   setValues({ ...values, [e.target.name]: e.target.value})
            //   }
            // }
            fullWidth
            />
          </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="Structure"
                name="Structure"
                key='Structure'
                options={structure}
                value={Diraction}
                getOptionLabel={(option) => option.Nom_struc} // Specify how to display the label in the Autocomplete dropdown
                onChange={(e, selectedOption) => { getDepartement(selectedOption?.id) }}
                // sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} id="Structure"
                key='Structure'
                name="Structure" label="Structure" />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="Departement"
                key='Departement'
                name="Departement"
                value={Diraction}
                options={departement}
                getOptionLabel={(option) => option.Nom_dep} // Specify how to display the label in the Autocomplete dropdown
                 onChange={(e, selectedOption) => { setDepartementId(selectedOption?.id) }}
                // sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} id="Departement"
                key='Departement'
                name="Departement" label="Departement" />}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
              >
                Ajouter un Fichier
                <input
                  type="file"
                  hidden
                  // value={file}
                  onChange={handlefileChange}
                  id="Description"
                  name="Description"
                  required
                />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Update Offre
        </Button>
      </DialogActions>
    </Dialog>

  );
};
export default UpdateModal;