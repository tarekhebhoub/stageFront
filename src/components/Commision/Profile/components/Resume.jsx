import React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios'
import UserAvatar from 'react-user-avatar'
import Avatar from '@material-ui/core/Avatar';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@mui/material';

const useStyles = makeStyles({
    card: {
      width: "100%",
      minHeight: "150px",
      borderRadius: "0px",
    },
    title: {
      fontSize: 14,
      textAlign: "center"
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
      justifyContent: "center", display: "flex" 
    },
  });

const ActionAreaCard=({id})=>{


  

  const classes = useStyles();
  // const url='http://127.0.0.1:8000/'
  const url = process.env.REACT_APP_API_URL;
  const url2= process.env.REACT_APP_API_URL2;

  const token=localStorage.getItem('token')
  const [resume,setResume]=useState('')
  const getResume=()=>{
    const config = {
      headers: {
        'Authorization': `Token ${token}`,
      }
    }
    axios.get(url+'resume/'+id+'/',config)
      .then((res) => {
      const data = res.data
      setResume(data)
    })
    .catch((e) => {
      console.log(url)
    });
  }
  useEffect(()=>{
    getResume();
  },[])
 
  return (
    <Card >
      
        <CardContent>
          {/*<Avatar
            sx={{ width: 250, height: 100 }}
            alt={resume.first_name+' '+resume.last_name}
            src={`http://127.0.0.1:8000${resume.Photo}`} />
            */}
          <UserAvatar  size="200" name={resume.first_name+' '+resume.last_name}src={url2+resume.Photo} className={classes.avatar} />
          <Typography gutterBottom variant="h5" component="div">
            {resume.first_name} {resume.first_name}
          </Typography>
          <Grid container sx={{ color: 'text.primary' }}>
            {/*<Typography variant="body2" color="text.secondary">*/}



   {/* • Nom       :  …………………………………………………………………………………
    • Prénom      :  ………………………………………………………………………………………………
    • Date de naissance :  ………………………………………………………………………………………………
    • Adresse personnelle : ………………………………………………………………………………………………
    • Date recrutement SH : ………………………………………………………………………………………………
    • Poste actuel    : ………………………………………………………………………………………………
    • Echelle     : ………………………………………………………………………………………………
    • Structure
*/}

              <Grid item xs={4}>
                <Typography>Date de naissance: </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{resume.Date_Naiss}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Date recrutement SH: </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{resume.Date_Recrut}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Poste actuel: </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{resume.Poste_actuel}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Echelle: </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{resume.Echelle}</Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography>Département: </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{resume.Id_dep}</Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography>Structure: </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{resume.Id_struc}</Typography>
              </Grid>



              <Grid item xs={4}>
                <PhoneIcon/> 
              </Grid>
              <Grid item xs={8}>
                <Typography>{resume.Telephone}</Typography>
              </Grid>
              <Grid item xs={4}>
                <EmailIcon/>
              </Grid>
              <Grid item xs={8}>
                <Typography>{resume.email}</Typography>
              </Grid>

              <Grid item xs={4}>
                <OtherHousesIcon/>
              </Grid>
              <Grid item xs={8}>
                <Typography>{resume.Adresse_perso}</Typography>
              </Grid>

              
            {/*</Typography>*/}
          </Grid>
           {/* <Typography>
              <EmailIcon/>
            </Typography>
            <Typography>
              <OtherHousesIcon/>
            </Typography>*/}
      
        </CardContent>
{/*      </CardActionArea>*/}
    </Card>
  );
}

export default ActionAreaCard