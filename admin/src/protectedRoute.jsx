import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/authContext'; // Import the custom hook

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
