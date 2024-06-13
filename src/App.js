import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  // const title="Welcome to Dojo Blog";
  // const visit=50;
  // const link="https://www.google.com";
  return (
    <div className="App">
      <Navbar />
     <div className='content'>
      {/* <h1>{title}</h1> */}
      {/* <p>Visited {visit} Times</p>
      <p>{"Lorem ipsum dolor sit amet consectetur adipisicing elit."}</p>
      <p>{"Lorem ipsum dolor sit amet consectetur adipisicing elit."}</p>
      <p>{Math.random()*10}</p>
      <a href={link}>Google Com</a> */}

     <Home />
     </div>
    </div>
  );
}

export default App;
