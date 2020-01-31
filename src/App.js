import React from 'react';
import logo from './logo.svg';
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
    <h1> On The Go : Our Travel Expert </h1>
    <section style={ sectionStyle }>
      </section>
  </div>
);

export default App;
