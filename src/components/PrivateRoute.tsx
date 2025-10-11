import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  // For now, we'll use a simple check. In a real app, you'd verify a token.
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
