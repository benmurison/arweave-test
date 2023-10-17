import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
  <>
   <div>
    Home Page
    <Link to="/about" style={{ padding: 5 }}>About</Link>
    </div>
  </>

)}

export default HomePage;
