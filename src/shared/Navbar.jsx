import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/reviews/create">Add a review</Link>
    </nav>
  );
};

export default NavBar;
