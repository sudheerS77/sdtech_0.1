import React from "react";

import footer from "./footer.module.css";
import logo from "../../assets/logos/logo.png";
import Image from "next/image";
import {
  BsInstagram,
  BsLinkedin,
  BsPhoneFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={footer.footer_section}>
          <div className={footer.footer_header}>
            <div className={footer.logo}>
              <Image src={logo} alt="image" />
            </div>
            <div className={footer.social_links}>
              <a href="#">
                <MdFacebook className={footer.social_links_icon} />
              </a>
              <a href="#">
                <BsInstagram className={footer.social_links_icon} />
              </a>
              <a href="#">
                <BsTwitter className={footer.social_links_icon} />
              </a>
              <a href="#">
                <BsLinkedin className={footer.social_links_icon} />
              </a>
              <a href="#">
                <BsYoutube className={footer.social_links_icon} />
              </a>
            </div>
          </div>
          <div className={footer.company_info}>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About us</a>
              </li>
              <li>
                <a href="/faqs">FAQ's</a>
              </li>
              <li>
                <a href="/contact-us">contact us</a>
              </li>
            </ul>
          </div>
          <div className={footer.terms}>
            <h4>Terms</h4>
            <ul>
              <li>
                <a href="#">Refund and Cancellation policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={footer.quick_links}>
            <h4>Quick Contact</h4>
            <ul>
              <li>
                <a href="">
                  <span className={footer.quick_links_icon}>
                    <BsPhoneFill />
                  </span>
                  <p>+91 98598 59852</p>
                </a>
              </li>
              <li>
                <a href="">
                  <span className={footer.quick_links_icon}>
                    <IoLogoWhatsapp />
                  </span>
                  <p>+91 98598 59852</p>
                </a>
              </li>
              <li>
                <a href="">
                  <span className={footer.quick_links_icon}>
                    <MdEmail />
                  </span>
                  <p>info@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
{
  /* Quick Links 
1.About US 
2.FAQ's 
3.Carrers

Refund and Cancellation policy 
Privacy Policy
Terms and conditions 

Quick Contact
m, w, E 
Social Links  */
}
