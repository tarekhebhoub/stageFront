import React from 'react'

// const Dashboard = React.lazy(() => import('./views/MainDash/MainDash'))
// const Orders = React.lazy(() => import('./views/Orders/Orders'))
const Home = React.lazy(()=>import('./components/Departement/Home/Home'))
const Fichier = React.lazy(()=>import('./components/Fichier/Fichier'))
const EtatFichier = React.lazy(()=>import('./components/Fichier/EtatFichier'))
const SignUp = React.lazy(()=>import('./components/Auth/SignUp'))
const Login = React.lazy(()=>import('./components/Auth/Login'))
const OffreDetail=React.lazy(()=>import('./components/Home/OffreDetail'))
const FichierForm=React.lazy(()=>import('./components/Fichier/FichierForm/FichierForm'))
const ProfileSubmit=React.lazy(()=>import('./components/Profile/ProfileSubmit'))

const routes = [

    { path: '/', name: 'Home', element: Home },
    // {path:'/FichierComm',name:'FichierComm', element:Fichier},
    // {path:'/FichierForm',name:'FichierForm', element:FichierForm},
    // {path:'/EtatFichier',name:'EtatFichier', element:EtatFichier},
    // { path: '/SignUp', name: 'SignUp', element: SignUp },
    // {path:'/Login',name:'Login',element:Login},
    // {path:'/OffreDetail',name:'OffreDetail',element:OffreDetail},
    // {path:'/ProfileSubmit/:id',name:'ProfileSubmit',element:ProfileSubmit}

]

export default routes
