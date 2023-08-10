import React, { useState,useEffect} from 'react';
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

const DeleteValide = ({ open, onClose, handleDelete }) => {


  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Vous etes Sur</DialogTitle>
      <DialogContent>
       
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="error" onClick={handleDelete} variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>

  );
};
export default DeleteValide;