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

  } from '@mui/material';


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

          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => {
              	if(column.id=='id'){
              		return(<div key={column.id}></div>)
              	}else if(column.id=='date_deb'){
                  
                  }else{
              		return (
	                <TextField
	                  key={column.id}
	                  label={column.header}
	                  name={column.id}
	                  onChange={(e) =>{
	                    setValues({ ...values, [e.target.name]: e.target.value})
	                  }
	              	  }
	                />
            	)
              	}
              	
              }
              )}
          </Stack>
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