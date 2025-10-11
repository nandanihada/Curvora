import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'user' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'user' },
  { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
];

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);
  const [editingUser, setEditingUser] = useState<typeof mockUsers[0] | null>(null);

  const addUser = (user: Omit<typeof mockUsers[0], 'id'>) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser: typeof mockUsers[0]) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  return (
    <div className="mt-8 text-center">
      <h2 className="text-3xl font-semibold font-playfair text-secondary">User Management</h2>
      <p className="text-md text-foreground mt-2 mb-4">Here you can manage your users.</p>
      <UserForm addUser={addUser} editingUser={editingUser} updateUser={updateUser} />
      <UserList users={users} deleteUser={deleteUser} setEditingUser={setEditingUser} />
    </div>
  );
};

export default UserManagement;
