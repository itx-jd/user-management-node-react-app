import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();
    
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      fetchUsers();
      fetchUserInfo();
    }, users);

    const fetchUsers = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch users');
          }
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error(error);
        }
    };

    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${localStorage.getItem('id')}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const currentUserData = await response.json();
        setCurrentUser(currentUserData);
      } catch (error) {
        console.error(error);
      }
  };

      const logout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        navigate("/login");
      }

  return (
    <div>
      <h1>Welcome{currentUser ? `, ${currentUser.username}` : ''}!</h1>
      <button onClick={logout}>Logout</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
