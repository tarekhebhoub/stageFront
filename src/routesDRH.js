import React from 'react'

// const Dashboard = React.lazy(() => import('./views/MainDash/MainDash'))
// const Orders = React.lazy(() => import('./views/Orders/Orders'))
const Home = React.lazy(()=>import('./components/DRH/Home/Home'))
const Roles=React.lazy(()=>import('./components/DRH/Roles/Roles'))
const Files=React.lazy(()=>import('./components/DRH/Files/Home/Home'))

const routes = [

    { path: '/', name: 'Home', element: Home },
    { path: '/Roles', name: 'Roles', element: Roles },
    {path:'/Fichier',name:'Fichier',element:Files}
    
    // {path:'/FichierComm',name:'FichierComm', element:Fichier},
    // {path:'/FichierForm',name:'FichierForm', element:FichierForm},
    // {path:'/EtatFichier',name:'EtatFichier', element:EtatFichier},
    // { path: '/SignUp', name: 'SignUp', element: SignUp },
    // {path:'/Login',name:'Login',element:Login},
    // {path:'/OffreDetail',name:'OffreDetail',element:OffreDetail},
    // {path:'/ProfileSubmit/:id',name:'ProfileSubmit',element:ProfileSubmit}

]

export default routes
