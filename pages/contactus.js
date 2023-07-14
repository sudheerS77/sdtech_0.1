import React from "react";

// Layout
import HomeLayout from "@/Layout/Home.layout";

// Components
import ContactBanner from "@/components/contact/contactBanner";
import ContactForm from "@/components/contact/contactForm";

const ContactUs = () => {
  return (
    <HomeLayout>
      <ContactBanner />
      <ContactForm />
    </HomeLayout>
  );
};

export default ContactUs;
