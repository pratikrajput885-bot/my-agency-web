import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <header style={styles.navbar}>
        <h2 style={{ margin: 0 }}>RiseX Media</h2>
        <nav>
          <Link style={styles.link} to="/">Home</Link>
          <Link style={styles.link} to="/services">Services</Link>
          <Link style={styles.link} to="/about">About</Link>
          <Link style={styles.link} to="/contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#222",
    color: "white",
  },
  link: {
    margin: "0 10px",
    textDecoration: "none",
    color: "white",
  },
};

export default App;
