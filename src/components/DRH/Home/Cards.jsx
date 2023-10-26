import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import axios from 'axios'
import DeleteValide from './DeleteValide'
// import UpdateModel from './UpdateModel'

const BasicCard=({Diraction,Departement,PostFilier,nbrPost,id,getOffers,file})=> {
  // const url='http://127.0.0.1:8000/'
  const url = process.env.REACT_APP_API_URL;
  const token=localStorage.getItem('token')
  const navigate = useNavigate();
  const [deleteModalOpen,setDeleteModalOpen]=useState(false)
  const [updateModelOpen,setUpdateModalOpen]=useState(false)

  const handleDeleteClick=()=>{
    setDeleteModalOpen(true)
  }
  const handleUpdateClick=()=>{
    setUpdateModalOpen(true)
  }
  const handleInfo=()=>{
     window.open(url+'fichier/'+id+'/FichierB/'); 
  }
  const handleFichier=()=>{
    navigate('/FichierForm')
  }
  const handleUpdate=()=>{

  }
  const handleDelete=()=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.delete(url+'OffreEmp/'+id+'/',config)
    .then((res)=>{
      setDeleteModalOpen(false)
      getOffers()
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
         Direction {Diraction}
        </Typography>
        <Typography variant="h6" component="div">
         Departement {Departement}
        </Typography>
        <Typography variant="h7" component="div">
         Le poste à filière: {PostFilier}
        </Typography>
        <Typography variant="h7" component="div">
         Nombre de poste: {nbrPost}
        </Typography>
      </CardContent>
      <CardActions> 
        <Grid 
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          container>
          <Grid item >
            <Button size="small" onClick={handleInfo}>Exigences</Button>
          </Grid>
          <Grid item >
             {/*<Stack direction="row" spacing={2}>*/}
                <Button variant="contained" onClick={handleDeleteClick} color="error">
                  Delete
                </Button>
                {/*<Button variant="contained" onClick={handleUpdateClick} color="warning">
                  Update
                </Button>*/}
            {/*</Stack>*/}
          </Grid>
        </Grid>
      </CardActions>

      <DeleteValide
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        handleDelete={handleDelete}
      />

     {/* <UpdateModel
        open={updateModelOpen}
        onClose={() => setUpdateModalOpen(false)}
        Diraction={Diraction}
        Departement={Departement}
        PostFilier={PostFilier}
        nbrPost={nbrPost}
        file={file}
        id={id}
      />*/}

    </Card>
  );
}

export default BasicCard