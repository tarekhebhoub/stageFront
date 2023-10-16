import React,{useState,useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import DataGeneral from './DataGeneral';
import OtherData from './OtherData';
// import Review from './Review';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
       HEBHOUB & KHELILI {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const EditFile=()=> {
  const [activeStep, setActiveStep] = useState(0);
  const [dataGeneralRes,setDataGeneralRes]=useState(null)
  const navigate = useNavigate();
  const [PourPoste,SetRaPourPoste]=useState('')
  const [Raison_recrut,SetRaison_recrut]=useState('')
  const [Specialite,SetSpecialite]=useState('')
  const [formation_comp,Setformation_comp]=useState('')
  const [seminaire,Setseminaire]=useState('')
  const [id_Offre,SetId_Offre]=useState('')


  const url='http://127.0.0.1:8000/';
  const token=localStorage.getItem('token')

  const steps = ['Informations Generales', 'Parcours Professionnel'];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <DataGeneral 
          PourPoste={PourPoste} 
          Raison_recrut={Raison_recrut} 
          Specialite={Specialite} 
          formation_comp={formation_comp} 
          seminaire={seminaire}
          SetRaPourPoste={SetRaPourPoste}
          SetRaison_recrut={SetRaison_recrut}
          SetSpecialite={SetSpecialite}
          Setformation_comp={Setformation_comp}
          Setseminaire={Setseminaire}
          />;
      case 1:
        return <OtherData />;
      default:
        throw new Error('Unknown step');
    }
  }

  const {id}=useParams()
  
  const getFile=()=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.get(url+'fichier/'+id+'/',config)
    .then((res)=>{
      const data=res.data
        SetRaPourPoste(data.PourPoste)
        SetRaison_recrut(data.Raison_recrut)
        SetSpecialite(data.Specialite)
        Setformation_comp(data.formation_comp)
        Setseminaire(data.seminaire)
        SetId_Offre(data.id_Offre)
        setDataGeneralRes(data)
      })
      .catch((e)=>{
        console.log(e);
      }) 
  }


  const PutDataGenerale=(id)=>{
    const dataGeneral={
      'id_Offre':id_Offre,
      'PourPoste':PourPoste,
      'Raison_recrut':Raison_recrut,
      'Specialite':Specialite,
      'formation_comp':formation_comp,
      'seminaire':seminaire,
      
    }
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.put(url+'fichier/'+id+'/',dataGeneral,config)
      .then((res) => {
      const data = res.data
      setDataGeneralRes(data)
      console.log(dataGeneralRes)
      setActiveStep(activeStep + 1);
    })
    .catch((e) => {
      console.log(url)
    });
  }
  const handleNext = () => {

    if(activeStep==0){
      PutDataGenerale(dataGeneralRes.id)
    }else{
      navigate('/ProfileSubmit/'+dataGeneralRes.id)
    }

    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(()=>{
    getFile();
  },[])

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        {/*<Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>*/}
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Next
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}

export default EditFile;

