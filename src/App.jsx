import React, {Suspense,useEffect } from 'react'
import { HashRouter, Route, Routes,Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import axios from 'axios'
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const SignUp = React.lazy(()=>import('./components/Auth/SignUp'))
const Login = React.lazy(()=>import('./components/Auth/Login'))

// Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const App=()=> {
    const url='http://127.0.0.1:8000/';
    const token = localStorage.getItem('token');
    let isAuthenticated=true;
     if(token==null || token=='null' ){
        isAuthenticated=false;
     }

    const testToken=()=>{
      const config = {
        headers: {
          'Authorization': `Token ${token}`,
        }
      }
      axios.get(url+'/tryToken',config)
      .then((res)=>{
      })
      .catch((e)=>{
        isAuthenticated=false;
        localStorage.removeItem('token')
        window.location.reload()
      })
    }
    if(isAuthenticated==true){
        testToken();
    }


    useEffect(()=>{
        // testToken();
    },[])
    return (
      <HashRouter>
        <Suspense >
          <Routes>
            <Route path="*" name="Home" element={isAuthenticated?<DefaultLayout />:<Navigate to="/login" />} />
            <Route exact path='/login' name="Login" element={!isAuthenticated?<Login />:<Navigate to="/" />} />
            <Route exact path='/signUp' name="SignUp" element={!isAuthenticated?<SignUp />:<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  
}

export default App;
