import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/">Homeee</Link>
      <Link to="about">Aboutt</Link>
    </div>
  );
}

export default HomePage;
