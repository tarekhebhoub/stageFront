import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArchiveIcon from '@mui/icons-material/Archive';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useNavigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const MainListItems =()=> {

  const is_superuser=localStorage.getItem('is_superuser')
  const is_departement=localStorage.getItem('is_departement')
  const is_stricture=localStorage.getItem('is_stricture')
  const is_commission=localStorage.getItem('is_commission')

  const navigate = useNavigate();
  const handleClick=(name)=>{
    switch (name) {
      case 'Home':
        navigate('/');
        break;
      default:
        navigate('/'+name);
    }
  }

  const defaultTheme = createTheme({
   palette: {
    primary: {
      light: '#757ce8',
      main: '#f79845',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

  return(
    <ThemeProvider theme={defaultTheme}>

    <React.Fragment>
    {
      is_departement=='true'?
      (
        <>
          <ListItemButton onClick={()=>handleClick('Home')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={()=>handleClick('Offers')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Offers" />
          </ListItemButton>
          <ListItemButton onClick={()=>handleClick('Fichier')}>
            <ListItemIcon>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText primary="Fichier" />
          </ListItemButton>

        </>
      ):is_stricture=='true'?
      (
        <>
          <ListItemButton onClick={()=>handleClick('Home')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={()=>handleClick('fileChefDep')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Chef Departement File" />
          </ListItemButton>
        </>
      ):is_superuser=='true'?(
      <>
        <ListItemButton onClick={()=>handleClick('Home')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={()=>handleClick('Roles')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Roles" />
        </ListItemButton>
        <ListItemButton onClick={()=>handleClick('Fichier_Satisfier')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Fichiers Satisfier" />
        </ListItemButton>
        <ListItemButton onClick={()=>handleClick('Files_For_Comm')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Fichiers Pour Commission" />
        </ListItemButton>

        <ListItemButton onClick={()=>handleClick('etat_final')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Etat Final" />
        </ListItemButton>

      </>

      ):is_commission=='true'?(
      <>
        <ListItemButton onClick={()=>handleClick('Home')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </>
      ):(
        <>
          <ListItemButton onClick={()=>handleClick('Home')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={()=>handleClick('Fichier')}>
            <ListItemIcon>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText primary="Fichier" />
          </ListItemButton>
        </>
      )

    }
    </React.Fragment>
    </ThemeProvider>

  )
}


export default MainListItems