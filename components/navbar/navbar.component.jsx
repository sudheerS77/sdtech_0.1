import React, { useState } from "react";

import navcss from "@/styles/navbar.module.css";
// import logo from "../../assets/images/sdlogo.png";
import logo from "../../assets/logos/logo.png";
import Image from "next/image";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  const { type } = new URLSearchParams();
  // console.log(type);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(openMenu);
  };

  // const toggle = () => {
  //   setOpenMenu(!openMenu);

  //   const show_hide = document.getElementById("navMenu");

  //   if (show_hide.style.display == "" || show_hide.style.display == "none") {
  //     show_hide.style.display = "block";
  //     console.log(show_hide.style.display, "IF");
  //   } else {
  //     show_hide.style.display = "none";
  //     console.log(show_hide.style.display, "ELse");
  //   }
  // };

  return (
    <>
      {/* <nav className={styles.navbar}>
        <div className={styles.logo}>Your Logo</div>

        <div
          className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ""}`}
        >
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
           Add more nav items as needed 
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
      </nav> */}

      <nav className={navcss.nav_bar}>
        <div className={navcss.nav}>
          <div className={navcss.navbar}>
            <div className={navcss.navlogo}>
              <Link href="/">
                <Image src={logo} alt="SD" className={navcss.img} />
              </Link>
              <div
                className={navcss.hamburger}
                onClick={handleMobileMenuToggle}
              >
                {isMobileMenuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
              </div>
              {/* Tech Academy */}
            </div>
            <div
              className={`${navcss.menu}  ${
                isMobileMenuOpen ? navcss.open : ""
              }`}
            >
              {isMobileMenuOpen ? (
                <div className={navcss.nav_head}>
                  <div className={navcss.nav_logo}>
                    <Link href="/">
                      <Image src={logo} alt="SD" className={navcss.img} />
                    </Link>
                    <div
                      className={navcss.hamburger}
                      onClick={handleMobileMenuToggle}
                    >
                      {isMobileMenuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
                    </div>
                  </div>
                  {/* Tech Academy */}
                </div>
              ) : (
                ""
              )}
              <div className={navcss.menu_group}>
                <ul className={""}>
                  <Link href="/">
                    <li>Home</li>
                  </Link>
                  <Link href="/courses">
                    <li>Courses</li>
                  </Link>
                  <Link href="/about-us">
                    <li>About Us</li>
                  </Link>
                  {/* <Link href="#">
                <li>Blogs</li>
              </Link> */}
                  <Link href="/contactus">
                    <li>Contact Us</li>
                  </Link>
                  <Link href="/#faq">
                    <li>FAQ</li>
                  </Link>
                </ul>
                <div className={navcss.btn_group}>
                  <button className={navcss.signin_btn}>SignIn</button>
                  <button className={navcss.signup_btn}>SignUp</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// <nav className={navcss.nav}>
// <div className={navcss.navbar}>
//   <div className={navcss.navlogo}>
//     <Link href="/">
//       <Image src={logo} alt="SD" className={navcss.img} />
//     </Link>
//     Tech Academy
//   </div>
//   <div className={navcss.navMenu} id="navMenu">
//     <ul className={navcss.navItems}>
//       <Link href="/">
//         <li>Home</li>
//       </Link>
//       <Link href="/courses">
//         <li>Courses</li>
//       </Link>
//       <Link href="/about-us">
//         <li>About Us</li>
//       </Link>
//       {/* <Link href="#">
//         <li>Blogs</li>
//       </Link> */}
//       <Link href="/contactus">
//         <li>Contact Us</li>
//       </Link>
//       <Link href="/#faq">
//         <li>FAQ</li>
//       </Link>
//     </ul>
//     <div className={navcss.btn_group}>
//       <button>Join Your Trial Class</button>
//     </div>
//   </div>

//   <div className={navcss.menu} onClick={handleMobileMenuToggle}>
//     {openMenu ? <RiCloseFill /> : <RiMenu3Fill />}
//   </div>
// </div>
// </nav>
