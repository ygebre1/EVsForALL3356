import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (jwtToken) => {
    localStorage.setItem('token', jwtToken);
    // Set user details as needed (you can also store more user details if required)
    setUser({ token: jwtToken });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const isUserLoggedIn = () => {
    return localStorage.getItem('token') != null;
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

