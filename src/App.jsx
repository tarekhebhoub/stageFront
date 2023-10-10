import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes,Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const SignUp = React.lazy(()=>import('./components/Auth/SignUp'))
const Login = React.lazy(()=>import('./components/Auth/Login'))
// Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
class App extends Component {
  render() {
    const token = localStorage.getItem('token');
    let isAuthenticated=false;
    console.log(token)
     if(token!='null' ){
       isAuthenticated=true;
     }
    
    console.log("tarek")
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
}

export default App;
