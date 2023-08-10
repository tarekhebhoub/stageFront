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
  return(
    <React.Fragment>
    {
      is_departement=='true'?
      (<ListItemButton onClick={()=>handleClick('Home')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>):is_stricture=='true'?
      (<ListItemButton onClick={()=>handleClick('Home')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>):is_superuser=='true'?(
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
        
        <ListItemButton onClick={()=>handleClick('Fichier')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Fichiers" />
        </ListItemButton>
      </>

      ):is_commission=='true'?(
      <>
        <ListItemButton onClick={()=>handleClick('FichierComm')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="FichierComm" />
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
          <ListItemButton onClick={()=>handleClick('EtatFichier')}>
            <ListItemIcon>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText primary="EtatFichier" />
          </ListItemButton>
        </>
      )

    }
    </React.Fragment>
  )
}


export default MainListItems