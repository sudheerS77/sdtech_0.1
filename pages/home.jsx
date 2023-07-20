import HomeLayout from "@/Layout/Home.layout";
import React, { useState } from "react";

import Link from "next/link";
import styles from "./Navbar.module.css"; // Import the CSS module for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Your Logo</div>

      <div className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ""}`}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        {/* Add more nav items as needed */}
      </div>

      <div className={styles.hamburger} onClick={handleMobileMenuToggle}>
        <div
          className={`${styles.icon} ${isMobileMenuOpen ? styles.open : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  return <HomeLayout></HomeLayout>;
};

export default Home;
