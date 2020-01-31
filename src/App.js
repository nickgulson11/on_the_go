import React from 'react';
import logo from './logo.svg';
import { Dropdown } from 'react-bootstrap';
import Background from './data/img.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var sectionStyle = {
  width: "100%",
  height: "2000px",
  backgroundImage: `url(${Background})`
};



const App = () =>  (
  <div>
    <section style={ sectionStyle }>
    <h1 align="center"> On The Go : Our Travel Expert </h1>
    
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </section>
  </div>
);

export default App;
