import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', background: '#eee' }}>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/courses" style={{ margin: '0 10px' }}>Courses</Link>
          <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
