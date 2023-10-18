import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
  <>
   <div>
    Welcome to the 0xCatchup Home Page!
    <Link to="/about" style={{ padding: 5 }}>About</Link>
    </div>
  </>

)}

export default HomePage;
