import React, { useState } from "react";

import navcss from "@/styles/navbar.module.css";
// import logo from "../../assets/images/sdlogo.png";
import logo from "../../assets/logos/logo.png";
import Image from "next/image";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(openMenu);
  };

  return (
    <>
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
                  <Link href="/contact-us">
                    <li>Contact Us</li>
                  </Link>
                  <Link href="/faqs">
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
