import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import All from './Components/All';
import FullStack from './Components/FullStack';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import Careers from './Components/Careers';
import Error from './Components/Error';
import Detail from './Components/Detail';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar className="custom-navbar" bg="light" variant="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* Navbar collapse for hiding and showing links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex w-100 justify-content-center nav-gap">
              <Nav.Link as={NavLink} to="/" end>
                All
              </Nav.Link>
              <Nav.Link as={NavLink} to="/fullstackdevelopment">
                Full Stack Development
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cybersecurity">
                Cyber Security
              </Nav.Link>
              <Nav.Link as={NavLink} to="/datascience">
                Data Science
              </Nav.Link>
              <Nav.Link as={NavLink} to="/careers">
                Careers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstackdevelopment" element={<FullStack />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/details/:title" element={<Detail />} />  {/* Dynamic route for detail pages */}
          <Route path="*" element={<Error />} />  {/* Catch-all route for undefined paths */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
