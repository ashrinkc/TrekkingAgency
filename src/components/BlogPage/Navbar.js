import React from "react";
import "./new.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <a>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Home
        </Link>
      </a>
      <a>
        <Link style={{ textDecoration: "none", color: "black" }} to="/itenary">
          Trekking
        </Link>
      </a>
      <a>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/heliCharter"
        >
          Helicharter
        </Link>
      </a>
      <a>
        <Link style={{ textDecoration: "none", color: "black" }} to="/covid">
          Gallery
        </Link>
      </a>
      <a>
        <Link style={{ textDecoration: "none", color: "black" }} to="/contact">
          Contact
        </Link>
      </a>
      <a>
        <Link style={{ textDecoration: "none", color: "black" }} to="/blog">
          About
        </Link>
      </a>
    </div>
  );
};

export default Navbar;
