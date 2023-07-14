import React, { useState } from "react";

import navcss from "@/styles/navbar.module.css";
// import logo from "../../assets/images/sdlogo.png";
import logo from "../../assets/logos/logo.png";
import Image from "next/image";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggle = () => {
    setOpenMenu(!openMenu);
    const show_hide = document.getElementById("navMenu");
    console.log(show_hide.style.display);
    if (show_hide.style.display == "" || show_hide.style.display == "none") {
      show_hide.style.display = "block";
      console.log(show_hide.style.display, "IF");
    } else {
      show_hide.style.display = "none";
      console.log(show_hide.style.display, "ELse");
    }
  };

  return (
    <>
      <nav className={navcss.nav}>
        <div className={navcss.navbar}>
          <div className={navcss.navlogo}>
            <Image src={logo} alt="SD" className={navcss.img} />
            {/* Tech Academy */}
          </div>
          <div className={navcss.navMenu} id="navMenu">
            <ul className={navcss.navItems}>
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
              <button>Join Your Trial Class</button>
              {/* <button>sign in</button> */}
            </div>
          </div>
          <div className={navcss.menu} onClick={toggle}>
            {openMenu ? <RiCloseFill /> : <RiMenu3Fill />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
