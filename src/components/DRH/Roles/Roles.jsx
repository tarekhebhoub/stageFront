import React,{useState,useEffect,useCallback,useRef} from 'react'
import axios from 'axios'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const Roles=()=>{
	const url='http://127.0.0.1:8000/'
	const token=localStorage.getItem('token')
	const config={
		headers:{
			'Authorization':`Token ${token}`,
		}
	}

	const [users,setUsers]=useState([])
	const GetUsers=()=>{
		axios.get(url+'users/',config)
		.then((res)=>{
			setUsers(res.data)
		})
		.catch((e)=>{
			console.log(e)
		})
	}
	useEffect(()=>{
		GetUsers();
	},[])

	useEffect(()=>{
		console.log(users)
	},[users])

  const columns = React.useMemo(
    () => [
      { field: 'first_name', headerName:'Nom',type: 'string' },
      { field: 'last_name', headerName:'Prenom',type: 'string' },
      { field: 'email', headerName:'Email',type: 'email',width:150 },
      { field: 'is_superuser', headerName:'isDrh',editable:true,type: 'boolean', width: 200 },
      { field: 'is_departement', headerName:'is Chef Departement',editable:true,type: 'boolean', width: 200 },
      { field: 'is_stricture', headerName:'is Chef Diraction',editable:true,type: 'boolean', width: 200 },
      { field: 'is_commission', headerName:'is Commision',type: 'boolean', editable:true,width: 200 },

	    ],
  );

	const useFakeMutation = () => {
	  return useCallback(
	    (user) =>
	      new Promise((resolve, reject) => {
	        setTimeout(() => {
	          if (user.name?.trim() === '') {
	            reject();
	          } else {
	            resolve(user);
	          }
	        }, 200);
	      }),
	    [],
	  );
	};

  const mutateRow = useFakeMutation();
  const noButtonRef = useRef(null);
  const [promiseArguments, setPromiseArguments] = useState(null);

  const [snackbar, setSnackbar] = useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  

  function computeMutation(newRow, oldRow) {
	  if (newRow.is_superuser !== oldRow.is_superuser) {
	  	if(newRow.is_superuser==true){
	  		newRow.is_departement=false
	  		newRow.is_stricture=false
	  		newRow.is_commission=false
	    	return `change ${oldRow.first_name} ${oldRow.last_name} to DRH`;
	  	}
	  	if(newRow.is_superuser==false){
	  		return `remove ${oldRow.first_name} ${oldRow.last_name} from DRH`;
	  	}
	  }
	  if (newRow.is_departement !== oldRow.is_departement) {
	    if(newRow.is_departement==true){
	    	newRow.is_superuser=false
	  		newRow.is_stricture=false
	  		newRow.is_commission=false

	    	return `change ${oldRow.first_name} ${oldRow.last_name} to Chef Departement`;
	  	}
	  	if(newRow.is_departement==false){
	  		return `remove ${oldRow.first_name} ${oldRow.last_name} from Chef Departement`;
	  	}
	  }
	  if (newRow.is_stricture !== oldRow.is_stricture) {
	    if(newRow.is_stricture==true){
	    	newRow.is_superuser=false
	  		newRow.is_departement=false
	  		newRow.is_commission=false
	  		
	    	return `change ${oldRow.first_name} ${oldRow.last_name} to Chef Diraction`;
	  	}
	  	if(newRow.is_stricture==false){
	  		return `remove ${oldRow.first_name} ${oldRow.last_name} from Chef Diraction`;
	  	}
	  }
	  if (newRow.is_commission !== oldRow.is_commission) {
	    if(newRow.is_commission==true){
	    	newRow.is_superuser=false
	  		newRow.is_departement=false
	    	return `change ${oldRow.first_name} ${oldRow.last_name} to Chef Commission`;
	  	}
	  	if(newRow.is_commission==false){
	  		return `remove ${oldRow.first_name} ${oldRow.last_name} from Chef Commission`;
	  	}
	  }
	  return null;
	}

  const processRowUpdate = useCallback(
	  (newRow, oldRow) =>
	    new Promise((resolve, reject) => {
	      const mutation = computeMutation(newRow, oldRow);
	      if (mutation) {
	        // Save the arguments to resolve or reject the promise later
	        setPromiseArguments({ resolve, reject, newRow, oldRow });
	      } else {
	        resolve(oldRow); // Nothing was changed
	      }
	    }),
	  [],
  );

  const handleNo = () => {
    const { oldRow, resolve } = promiseArguments;
    resolve(oldRow); // Resolve with the old row to not update the internal state
    setPromiseArguments(null);
  };

  const handleYes = async () => {
    const { newRow, oldRow, reject, resolve } = promiseArguments;

      // Make the HTTP request to save in the backend
      axios.put(url+'userID/'+newRow.id+'/',newRow,config)
      .then((res)=>{
      	console.log(res)
      	// const response = await mutateRow(newRow);
	      setSnackbar({ children: 'User successfully saved', severity: 'success' });
	      resolve(newRow);
	      setPromiseArguments(null);
      })
      .catch((e)=>{
      	console.log(e)
				setSnackbar({ children: "Name can't be empty", severity: 'error' });
	      reject(oldRow);
	      setPromiseArguments(null);
      })
      
  };

  const handleEntered = () => {
    // The `autoFocus` is not used because, if used, the same Enter that saves
    // the cell triggers "No". Instead, we manually focus the "No" button once
    // the dialog is fully open.
    // noButtonRef.current?.focus();
  };


  const renderConfirmDialog = () => {
    if (!promiseArguments) {
      return null;
    }

    const { newRow, oldRow } = promiseArguments;
    const mutation = computeMutation(newRow, oldRow);

    return (
      <Dialog
        maxWidth="xs"
        TransitionProps={{ onEntered: handleEntered }}
        open={!!promiseArguments}
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent dividers>
          {`Pressing 'Yes' will ${mutation}.`}
        </DialogContent>
        <DialogActions>
          <Button ref={noButtonRef} onClick={handleNo}>
            No
          </Button>
          <Button onClick={handleYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    );
  };
	
	return(
		<div style={{ height: 400, width: '100%' }}>
      {renderConfirmDialog()}
      <DataGrid rows={users} columns={columns} processRowUpdate={processRowUpdate} />
      {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </div>
  )
}

export default Roles














