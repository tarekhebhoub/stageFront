import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import axios from 'axios'

const steps = ['Acceptation de Fichier', 'Observation de chef departement','Reponse de commesion','Reponse de chef de Structure','favorable'];

const EtatFichier=({id})=>{
	const [file,setFile]=useState()
	const [activeStep,setActiveStep]=useState(0)
	const [errorStep,setErrorStep]=useState(null)

	const url='http://127.0.0.1:8000/'
  	const token=localStorage.getItem('token')
  	const handleStep=(file)=>{

  		
  		if(file?.favorable==true){
  			setActiveStep(5)
  		}else if(file?.response_Dir==true){
  			setActiveStep(4)
  		}else if(file?.response_Dir==false){
  			setErrorStep(4)
  		}else if(file?.Reponse_commesion==true){
  			setActiveStep(3)
  		}else if(file?.Reponse_commesion==false){
  			setErrorStep(3)
  		}else if(file?.response_Dep==true){
  			setActiveStep(2)
  		}else if(file?.response_Dep==false){
  			setErrorStep(2)
  		}else if(file?.Reponse_DRH==true){
  			console.log('tarek')
  			setActiveStep(1)
  		}else if(file?.Reponse_DRH==false){
  			setErrorStep(1)
  		}else{
  			setActiveStep(0)
  		}

  	}
	const getFile=()=>{
		const config = {
	     	headers: {
	        	'Authorization': `Token ${token}`,
	      	}
	    }
	    axios.get(url+'fichier/'+id+'/',config)
	    .then((res) => {
	    	const data=res.data
	    	handleStep(data)
	        setFile(data)
	    })
	    .catch((e) => {
	      console.log(url)
	    });
	}
	useEffect(()=>{
		getFile()
	},[])
  	const isStepFailed = (step) => {
    	return step === errorStep-1;
  	};

  	return (
    <Box sx={{ width: '100%' }}>
	    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, width: '100%' }}>
	      	<Stepper activeStep={activeStep}>
		        {steps.map((label, index) => {
		          const labelProps = {};
		          if (isStepFailed(index)) {
		            labelProps.optional = (
		              <Typography variant="caption" color="error">
		                Alert message
		              </Typography>
		            );

		            labelProps.error = true;
		          }

		          return (
		            <Step key={label}>
		              <StepLabel {...labelProps}>{label}</StepLabel>
		            </Step>
		          );
		        })}
	      	</Stepper>
	    </Paper>
    </Box>
  );
}
export default EtatFichier