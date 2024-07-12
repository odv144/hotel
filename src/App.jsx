import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ReservationForm from './components/ReservationForm';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/reservation" element={<ReservationForm />} />
    <Route path="/login" element={<Login />} />
    <Route
        path="/admin"
        element={<PrivateRoute element={AdminDashboard} />}
      />
  </Routes>
);

export default App;
