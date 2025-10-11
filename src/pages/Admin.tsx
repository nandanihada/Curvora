import React from 'react';
import ProductManagement from './admin/ProductManagement';
import UserManagement from './admin/UserManagement';

const Admin: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    window.location.href = '/admin/login';
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative text-center mb-8">
        <h1 className="text-4xl font-bold font-playfair text-primary">Admin Panel</h1>
        <p className="text-lg text-foreground mt-2">Welcome to the admin panel. Here you can manage your application.</p>
        <button onClick={handleLogout} className="absolute top-0 right-0 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Logout
        </button>
      </div>
      <ProductManagement />
      <UserManagement />
    </div>
  );
};

export default Admin;
