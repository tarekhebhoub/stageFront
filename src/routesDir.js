import React from 'react'

// const Dashboard = React.lazy(() => import('./views/MainDash/MainDash'))
// const Orders = React.lazy(() => import('./views/Orders/Orders'))
const Home = React.lazy(()=>import('./components/Diraction/Home/Home'))
const ProfileDetail=React.lazy(()=>import('./components/Diraction/Profile/ProfileSubmit'))
const FileChefDep=React.lazy(()=>import('./components/Diraction/FileChefDep/Home/Home'))
const ProfileDetail1=React.lazy(()=>import('./components/Diraction/FileChefDep/Profile/ProfileSubmit'))

const routes = [

    { path: '/', name: 'Home', element: Home },
    { path: '/ProfileDetail/:id/:iduser', name: 'ProfileDetail', element: ProfileDetail },
    { path: '/fileChefDep', name: 'FileChefDep', element: FileChefDep },
    { path: '/ProfileDetail1/:id/:iduser', name: 'ProfileDetail1', element: ProfileDetail1 },


    
    // {path:'/FichierComm',name:'FichierComm', element:Fichier},
    // {path:'/FichierForm',name:'FichierForm', element:FichierForm},
    // {path:'/EtatFichier',name:'EtatFichier', element:EtatFichier},
    // { path: '/SignUp', name: 'SignUp', element: SignUp },
    // {path:'/Login',name:'Login',element:Login},
    // {path:'/OffreDetail',name:'OffreDetail',element:OffreDetail},
    // {path:'/ProfileSubmit/:id',name:'ProfileSubmit',element:ProfileSubmit}

]

export default routes
