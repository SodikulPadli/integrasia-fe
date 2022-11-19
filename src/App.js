import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import CreateUserPage from './pages/CreateUserPage';
import EditUsersPage from './pages/EditUsersPage';
import DetailUserPage from './pages/DetailUserPage';
import JumbotronComponent from './components/JumbotronComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateUserPage />} />
          <Route path="/detail/:id" element={<DetailUserPage />} />
          <Route path="/edit/:id" element={<EditUsersPage />} />
        </Routes>
      </div>
    );
  }
}
