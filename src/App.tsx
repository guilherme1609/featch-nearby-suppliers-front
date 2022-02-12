import React from 'react';

import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import {BrowserRouter, BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
	  <Router>
	  	<Routes>
			<Route path='/' element={<LoginPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/home' element={<HomePage />} />
		</Routes>
	  </Router>
    // <LoginPage />
  );
}

export default App;
