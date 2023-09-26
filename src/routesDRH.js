import React from 'react'

// const Dashboard = React.lazy(() => import('./views/MainDash/MainDash'))
// const Orders = React.lazy(() => import('./views/Orders/Orders'))
const Home = React.lazy(()=>import('./components/DRH/Home/Home'))
const Roles=React.lazy(()=>import('./components/DRH/Roles/Roles'))
const Files_For_Comm=React.lazy(()=>import('./components/DRH/Files_For_Comm/Home/Home'))
const Files_For_Satisfier=React.lazy(()=>import('./components/DRH/File_Satisfie/Home/Home'))
const ProfileDetail=React.lazy(()=>import('./components/DRH/Files_For_Comm/Profile/ProfileSubmit'))
const ProfileSatisfier=React.lazy(()=>import('./components/DRH/File_Satisfie/Profile/ProfileSubmit'))

const EtatFinal=React.lazy(()=>import('./components/DRH/EtatFinal/Home/Home'))
const ProfileEtat=React.lazy(()=>import('./components/DRH/EtatFinal/Profile/ProfileSubmit'))


const routes = [

    { path: '/', name: 'Home', element: Home },
    { path: '/Roles', name: 'Roles', element: Roles },
    {path:'/Files_For_Comm',name:'Fichier',element:Files_For_Comm},
    {path:'/ProfileDetail/:id/:iduser',name:'ProfileDetail',element:ProfileDetail},
    {path:'/ProfileSatisfier/:id/:iduser',name:'ProfileDetail',element:ProfileSatisfier},
    
    {path:'/Fichier_Satisfier',name:'Fichier',element:Files_For_Satisfier},
    {path:'/Etat_Final',name:'Rtat_Final',element:EtatFinal},
    {path:'/ProfileEtat/:id/:iduser',name:'ProfileEtat',element:ProfileEtat},




    
    // {path:'/FichierComm',name:'FichierComm', element:Fichier},
    // {path:'/FichierForm',name:'FichierForm', element:FichierForm},
    // {path:'/EtatFichier',name:'EtatFichier', element:EtatFichier},
    // { path: '/SignUp', name: 'SignUp', element: SignUp },
    // {path:'/Login',name:'Login',element:Login},
    // {path:'/OffreDetail',name:'OffreDetail',element:OffreDetail},
    // {path:'/ProfileSubmit/:id',name:'ProfileSubmit',element:ProfileSubmit}

]

export default routes
