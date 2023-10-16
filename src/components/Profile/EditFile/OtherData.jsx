import React, { useMemo,useCallback, useRef, useState, useEffect } from 'react';
import {
  MaterialReactTable,
  MRT_ToggleDensePaddingButton,
  MRT_FullScreenToggleButton,
} from 'material-react-table';
import Typography from '@mui/material/Typography';

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
  IconMenu,

  } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios'

import CreateNewAccountModal from './CreateNewAccountModal'


const OtherData=()=>{
  const token=localStorage.getItem('token')

  const [data,setData]=useState('')
  const url='http://127.0.0.1:8000/'
  const UpdateRow=(value,row,exitEditingMode)=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    let resultat;
    axios.put(url+'parcoursprof/'+value.id+'/',value,config)
    .then((res) => {
      data[row.index] = value;
      console.log("tarek")
      setData([...data]);
      exitEditingMode(); //required to exit editing mode and close modal
      resultat= true  
    })
    .catch((e) => {
      resultat= false
      alert(e)
    });
    return resultat;
  }
  

  const GetParcProf=()=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    let resultat;
    axios.get(url+'parcoursprof/',config)
    .then((res) => {
      setData(res.data);
    })
    .catch((e) => {
      alert(e)
    });
  }
  useEffect(()=>{
    GetParcProf();
  },[])





  const deleteParcProf=(ref,index)=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    let resultat;
    axios.delete(url+'parcoursprof/'+ref+'/',config)
      .then((res) => {
        resultat= true
        data.splice(index, 1);
        setData([...data]);
    })
    .catch((e) => {
      alert(e)
      resultat= false
    });
    return resultat;
  }

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = (values) => {
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.post(url+'parcoursprof/',values,config)
      .then((res) => {
        console.log(res.data)
        data.unshift(res.data)
        setData([...data])
    })
    .catch((e) => {
      alert(e)
    });
    console.log(values)

  };


  const handleSaveRowEdits =  ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      if(UpdateRow(values,row,exitEditingMode)==true){ 
      }
    }
  };
  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };
  const handleDeleteRow = useCallback(
    (row) => {
      const id=row.getValue('id')
      if (
        !window.confirm(`Are you sure you want to delete ${row.getValue('Poste_occup')}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      if(deleteParcProf(id,row.index)){
        console.log("tarek")
      }
    },
    [data],
  );
  const validateRequired = (value) => !!value.length;
  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid = validateRequired(event.target.value);
            
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if vali
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors],
  );
 

  const columns = useMemo(
    () => [
       {
        accessorFn: (row) => row.id, //alternate way
        id: 'id', //id required if you use accessorFn instead of accessorKey
        header: 'id',
        enableEditing: false,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorFn: (row) => row.Poste_occup, //alternate way
        id: 'Poste_occup', //id required if you use accessorFn instead of accessorKey
        header: 'Poste (s) occupé (s) / organismes ou Structures',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorFn: (row) => row.date_deb, //alternate way
        id: 'date_deb', //id required if you use accessorFn instead of accessorKey
        header: 'Date Deb',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorFn: (row) => row.date_fin, //alternate way
        id: 'date_fin', //id required if you use accessorFn instead of accessorKey
        header: 'Date Fin',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorFn: (row) => row.Travaux_realises, //alternate way
        id: 'Travaux_realises', //id required if you use accessorFn instead of accessorKey
        header: 'Principaux travaux réalisés',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
    ],
    [],
  );
  /*const columns=useMemo(
    ()=>(data.map((key,value)=>{
      return {
        accessorKey: key, //simple recommended way to define a column
        header: key,
      }
    })
  )*/

  //optionally, you can manage any/all of the table state yourself



  //Or, optionally, you can get a reference to the underlying table instance
  const tableInstanceRef = useRef(null);

  const someEventHandler = () => {
    //read the table state during an event from the table instance ref
    console.log(tableInstanceRef.current.getState().sorting);
  }

 
  
  
  return (
  <>
    <Typography variant="h6" gutterBottom>
      Parcours Professionnel
    </Typography>
    <MaterialReactTable 
      columns={columns} 
      data={data} 
      enableColumnOrdering={false} //enable some features
      /*enableRowSelection*/ 
      enablePagination={false} //disable a default feature
      // onRowSelectionChange={setRowSelection} //hoist internal state to your own state (optional)
      // state={{ rowSelection }} //manage your own state, pass it back to the table (optional)
      tableInstanceRef={tableInstanceRef} //get a reference to the underlying table instance (optional)
      // enableRowVirtualization
      // enableRowActions
      initialState={{ columnVisibility: {id:false} }}
      editingMode="modal" //default
      enableEditing
      onEditingRowSave={handleSaveRowEdits}
      onEditingRowCancel={handleCancelRowEdits}
/*      positionToolbarAlertBanner="bottom"
*/      
      renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem',marginRight:'10px' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
       renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Ajouter Votre Parcour
          </Button>
        )}
      />
    <CreateNewAccountModal
      columns={columns}
      open={createModalOpen}
      onClose={() => setCreateModalOpen(false)}
      onSubmit={(values)=>handleCreateNewRow(values)}
      
    />
  </>
  );
}




export default OtherData;




