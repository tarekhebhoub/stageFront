import React,{useState} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import MainListItems from './listItems';
import { AppContent,DepContent ,StrContent,ComContent,DRHContent} from '../components/index'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
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

const DefaultLayout=()=> {
  const navigate = useNavigate();

  const is_superuser=localStorage.getItem('is_superuser')
  const is_departement=localStorage.getItem('is_departement')
  const is_stricture=localStorage.getItem('is_stricture')
  const is_commission=localStorage.getItem('is_commission')
  const token = localStorage.getItem('token');
  

  const api_url='http://127.0.0.1:8000/logout/'
  const handleLogout=()=>{
    console.log('ibrahim')
    const config = {
      headers: {
        "Authorization": `Token ${token}`
      }
    };
    axios.post(api_url,null,config)
    .then((res)=> {
  
      localStorage.setItem("token", null);
      
      window.location.reload();
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const Content=()=>{
    if(is_departement=='true'){
      console.log('tarek')
      return <DepContent/>
    }else if(is_stricture=='true'){
      return <StrContent/>
    }else if(is_commission=='true'){
      return <ComContent/>
    }else if(is_superuser=='true'){
      return <DRHContent/>
    }
      console.log('tarek')

    return <AppContent/>
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              ACTIVITE TRANSPORT PAR CANALISATIONS
            </Typography>
            
            <ListItemButton  onClick={()=>handleLogout()}>
                <LogoutIcon />
            </ListItemButton>

          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>

          <Divider />
          <List component="nav">
            <MainListItems/>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {/*{Content}*/}

          {is_departement=='true'?<DepContent/>:is_stricture=='true'?<StrContent/>:is_commission=='true'?<ComContent/>:is_superuser=='true'?<DRHContent/>:<AppContent/>}
          


        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DefaultLayout;