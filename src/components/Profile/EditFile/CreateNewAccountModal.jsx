import React, { useState } from 'react';

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

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.id ?? ''] = null;
      return acc;
    }, {}),
  );
  
  const handleSubmit = () => {
  	// console.log(values)
      onSubmit(values);
      onClose();
  };

  return (

    <Dialog open={open}>

      <DialogTitle textAlign="center">Ajouter Nouveau Parcour</DialogTitle>

      <DialogContent>

        <form onSubmit={(e) => e.preventDefault()}>

        
          <Grid container spacing={3}>
            {columns.map((column) => {

              	if(column.id=='id'){
              		return(<div key={column.id}><br/></div>)
              	}else if(column.id=='date_deb'||column.id=='date_fin'){
                  return(
                    <Grid item key={column.id} xs={12} sm={6} >
                      <LocalizationProvider  key={column.id} dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker
                            key={column.id}
                            label={column.header}
                            name={column.id} 
                            format="YYYY-MM-DD"
                            onChange={(e)=>{
                              let x=e['$y']+'-'+parseInt(e['$M']+1)+'-'+e['$D']
                              setValues({...values,[column.id]:x})
                              // setValues({...values,[e.target.name]:e.target.value})
                            }} 
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                  )
                  }else{
              		return (
                  <Grid key={column.id} item xs={12} >
	                 <TextField
	                  key={column.id}
	                  label={column.header}
	                  name={column.id}
	                  onChange={(e) =>{
	                    setValues({ ...values, [e.target.name]: e.target.value})
	                  }
	              	  }
                    fullWidth
	                 />
                  </Grid>
            	)
              	}
              	
              }
              )}
          </Grid>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Ajouter Nouveau Parcour
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CreateNewAccountModal;