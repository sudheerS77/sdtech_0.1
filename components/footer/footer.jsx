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
import Link from "next/link";

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
              <Link href="#">
                <MdFacebook className={footer.social_links_icon} />
              </Link>
              <Link href="#">
                <BsInstagram className={footer.social_links_icon} />
              </Link>
              <Link href="#">
                <BsTwitter className={footer.social_links_icon} />
              </Link>
              <Link href="#">
                <BsLinkedin className={footer.social_links_icon} />
              </Link>
              <Link href="#">
                <BsYoutube className={footer.social_links_icon} />
              </Link>
            </div>
          </div>
          <div className={footer.company_info}>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/faqs">FAQ&apos;s</Link>
              </li>
              <li>
                <Link href="/contact-us">contact us</Link>
              </li>
            </ul>
          </div>
          <div className={footer.terms}>
            <h4>Terms</h4>
            <ul>
              <li>
                <Link href="#">Refund and Cancellation policy</Link>
              </li>
              <li>
                <Link href="#">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className={footer.quick_links}>
            <h4>Quick Contact</h4>
            <ul>
              <li>
                <Link href="">
                  <span className={footer.quick_links_icon}>
                    <BsPhoneFill />
                  </span>
                  <p>+91 98598 59852</p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span className={footer.quick_links_icon}>
                    <IoLogoWhatsapp />
                  </span>
                  <p>+91 98598 59852</p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <span className={footer.quick_links_icon}>
                    <MdEmail />
                  </span>
                  <p>info@gmail.com</p>
                </Link>
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
