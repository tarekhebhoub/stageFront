import React from 'react'

// const Dashboard = React.lazy(() => import('./views/MainDash/MainDash'))
// const Orders = React.lazy(() => import('./views/Orders/Orders'))
const Home = React.lazy(()=>import('./components/Home/Home'))
const Fichier = React.lazy(()=>import('./components/Fichier/Fichier'))
const SignUp = React.lazy(()=>import('./components/Auth/SignUp'))
const Login = React.lazy(()=>import('./components/Auth/Login'))
const OffreDetail=React.lazy(()=>import('./components/Home/OffreDetail'))
const FichierForm=React.lazy(()=>import('./components/Fichier/FichierForm/FichierForm'))
const ProfileSubmit=React.lazy(()=>import('./components/Profile/ProfileSubmit'))
const ProfileDetail=React.lazy(()=>import('./components/Fichier/Profile/ProfileDetail'))
// const Facture = React.lazy(()=>import('./components/Orders/Facture/Facture'))
// const Dashboard=React.lazy(()=>import('./components/Dashboard/Dashboard'))
// const Stock=React.lazy(()=>import('./components/Stock/Stock'))
/*const Map = React.lazy(() => import('./views/map/map'))
const Users=React.lazy(()=>import('./views/users/users'))
const Velos =React.lazy(()=>import('./views/velos/velos'))
const Cards =React.lazy(()=>import('./views/cards/cards'))
const Stations =React.lazy(()=>import('./views/stations/stations'))*/
const routes = [
/*  { path: '/', name: 'Dashboard', element: Dashboard },
*//*  { path: '/orders', name: 'orders', element: Orders },

*/
    { path: '/', name: 'Home', element: Home },
    {path:'/Fichier',name:'FichierComm', element:Fichier},
    {path:'/Offre/:id/FichierForm',name:'FichierForm', element:FichierForm},
    { path: '/SignUp', name: 'SignUp', element: SignUp },
    {path:'/Login',name:'Login',element:Login},
    {path:'/Offre/:id',name:'OffreDetail',element:OffreDetail},
    {path:'/ProfileSubmit/:id',name:'ProfileSubmit',element:ProfileSubmit},
    {path: '/ProfileDetail/:id/:iduser', name: 'ProfileDetail', element: ProfileDetail }

/*  { path: '/users', name: 'users', element: Users },
  { path: '/velos', name: 'velos', element: Velos },
  { path: '/cards', name: 'cards', element: Cards },
  { path: '/stations', name: 'stations', element: Stations },*/
]

export default routes
