import React from 'react'

// const Dashboard = React.lazy(() => import('./views/MainDash/MainDash'))
// const Orders = React.lazy(() => import('./views/Orders/Orders'))
const Home = React.lazy(()=>import('./components/Departement/Home/Home'))
const ProfileDetail=React.lazy(()=>import('./components/Departement/Profile/ProfileSubmit'))
const Offers=React.lazy(()=>import('./components/Departement/Offers/Home'))
const OffreDetail=React.lazy(()=>import('./components/Departement/Offers/OffreDetail'))
const FichierForm=React.lazy(()=>import('./components/Fichier/FichierForm/FichierForm'))
const ProfileSubmit=React.lazy(()=>import('./components/Profile/ProfileSubmit'))

const routes = [

    { path: '/', name: 'Home', element: Home },
    { path: '/Offers', name: 'Offers', element: Offers },
    { path: '/ProfileDetail/:id/:iduser', name: 'ProfileDetail', element: ProfileDetail },
    {path:'/Offer/:id',name:'OffreDetail',element:OffreDetail},
    {path:'/Offer/:id/FichierForm',name:'FichierForm', element:FichierForm},
    {path:'/ProfileSubmit/:id',name:'ProfileSubmit',element:ProfileSubmit},

    
    // {path:'/FichierComm',name:'FichierComm', element:Fichier},
    // {path:'/FichierForm',name:'FichierForm', element:FichierForm},
    // {path:'/EtatFichier',name:'EtatFichier', element:EtatFichier},
    // { path: '/SignUp', name: 'SignUp', element: SignUp },
    // {path:'/Login',name:'Login',element:Login},
    // {path:'/OffreDetail',name:'OffreDetail',element:OffreDetail},
    // {path:'/ProfileSubmit/:id',name:'ProfileSubmit',element:ProfileSubmit}

]

export default routes
