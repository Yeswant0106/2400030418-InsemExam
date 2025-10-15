import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Courses from './Courses';
import Contact from './Contact';
import NotFound from './NotFound'; // Optional

function App() {
  const linkStyle = ({ isActive }) => ({
    margin: '0 10px',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#007bff' : '#333',
  });

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', background: '#eee' }}>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/courses" style={linkStyle}>Courses</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Optional */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;