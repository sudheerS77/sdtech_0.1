import React, { useState } from "react";

import navcss from "@/styles/navbar.module.css";
// import logo from "../../assets/images/sdlogo.png";
// import logo from "../../assets/logos/logo.png";
import logo from "../../assets/logos/sd_logo.png";
import Image from "next/image";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={navcss.nav_bar}>
        <div className={navcss.nav}>
          <div className={navcss.navbar}>
            <div className={navcss.navlogo}>
              <Link href="/">
                {/* <Image src={logo} alt="SD" className={navcss.img} /> */}
                {/* <img src="https://ik.imagekit.io/zygrsqfyt/img/gskimg.png" alt="SD" className={navcss.img} /> */}
                {/* <img src="https://ik.imagekit.io/zygrsqfyt/img/SD2.png" alt="SD" className={navcss.img} /> */}
                {/* <img src="https://ik.imagekit.io/zygrsqfyt/img/SD3.png" alt="SD" className={navcss.img} /> */}
                {/* <img src="https://ik.imagekit.io/zygrsqfyt/img/SD4.png" alt="SD" className={navcss.img} /> */}
                {/* <img src="https://ik.imagekit.io/zygrsqfyt/img/sd5.png" alt="SD" className={navcss.img} /> */}
                {/* <img src="https://ik.imagekit.io/zygrsqfyt/img/sd6.png" alt="SD" className={navcss.img} /> */}
                {/* <img
                  src="https://ik.imagekit.io/zygrsqfyt/img/sd7.png"
                  alt="SD"
                  className={navcss.img}
                /> */}
                {/* <img
                  src="https://ik.imagekit.io/zygrsqfyt/img/sd8.png"
                  alt="SD"
                  className={navcss.img}D
                /> */}
                {/* <img
                  src="https://ik.imagekit.io/zygrsqfyt/img/sd9.png"
                  alt="SD"
                  className={navcss.img}
                /> */}
                {/* <img
                  src="https://ik.imagekit.io/zygrsqfyt/img/sd10.png"
                  alt="SD"
                  className={navcss.img}
                /> */}
                {/* <img
                  src="https://ik.imagekit.io/zygrsqfyt/img/sd11.png?updatedAt=1693310544579"
                  alt="SD"
                  className={navcss.img}
                /> */}
                {/* <img
                  src="https://ik.imagekit.io/zygrsqfyt/img/s12.png?updatedAt=1693311108227"
                  alt="SD"
                  className={navcss.img}
                /> */}
                <img
                  src="https://ik.imagekit.io/zygrsqfyt/img/sd13.png"
                  alt="SD"
                  className={navcss.img}
                />
              </Link>
              <Link href="/">
                <Image src={logo} alt="SD" className={navcss.mimg} />
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
                      <img
                        src="https://ik.imagekit.io/zygrsqfyt/img/sd7.png"
                        alt="SD"
                        className={navcss.img}
                      />
                      {/* <Image src={logo} alt="SD" className={navcss.img} /> */}
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
                  <Link href="/contact-us">
                    <li>Contact Us</li>
                  </Link>
                  <Link href="/faqs">
                    <li>FAQ</li>
                  </Link>
                  <Link href="/roadMaps">
                    <li>RoadMaps</li>
                  </Link>

                </ul>
                <div className={navcss.btn_group}>
                  {/* <button className={navcss.signin_btn}>SignIn</button>
                  <button className={navcss.signup_btn}>SignUp</button> */}
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
