import React from 'react';
import { Route, Navigate } from 'react-router-dom';
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const isAuthenticated = true; // Replace this with your actual authentication check

const ProtectedRoute = () => {
  if(isAuthenticated){
    return(
      <Route path="*" name="Home" element={<DefaultLayout />} />
    )
  }
  return(
    <Navigate to="/login" />
  )
};

export default ProtectedRoute;