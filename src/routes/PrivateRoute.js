import React from 'react';
import { Navigate } from 'react-router-dom';  // Use Navigate in v6
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;  // Redirect to /login if not authenticated
  }

  return children;  // Return the protected content if authenticated
};

export default PrivateRoute;
