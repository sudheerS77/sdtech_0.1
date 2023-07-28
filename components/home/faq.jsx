import React, { useState } from "react";

import hf from "./faq.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";

const Accordion = ({ data, count }) => {
  const [clicked, setClicked] = useState(false);
  console.log(data, count);
  return (
    <>
      <div className={hf.f_accordion}>
        <div>
          <div className={hf.f_acc_head} onClick={() => setClicked(!clicked)}>
            <div className={hf.f_acc_icon}>
              {" "}
              {clicked === true ? <BiMinus /> : <BiPlus />}
            </div>
            <h4>{data.title}</h4>
          </div>
          {clicked ? (
            <div className={hf.f_acc_body}>
              {data.description.map((a_body, indx) => (
                <p key={indx}>{a_body}</p>
              ))}
              <dl>
                {data?.children.length > 0 ? (
                  data.children.map((c_data, index) => (
                    <>
                      <dt>{c_data?.title}</dt>
                      {c_data?.data?.map((c_data, ind) => (
                        <dd key={ind}> - {c_data}</dd>
                      ))}
                    </>
                  ))
                ) : (
                  <></>
                )}
              </dl>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

const FAQ = () => {
  const faqs = [
    {
      title: "What is SD tech academy?",
      description: [
        "SD Tech Academy is an international education and tech research company.",
        "The teachers and staff of this company have several years of experience in teaching and working in this field.",
      ],
      children: [null],
    },
    {
      title: "Tell us more about your academy?",
      description: [
        "We are a team of senior programmers and engineers who have taught for years in the field of robotics, programming, Web development, industrial design, etc., and have carried out various industrial projects nationally and internationally, and members of this team have more than 12 international positions and awards In international competitions.",
      ],
      children: [null],
    },
    {
      title: "What is the purpose of SD Tech Academy?",
      description: [
        "Our purpose is to create an international and safe platform for learning everything you want to learn with guaranteed quality and expertise. Also, our guidance and support team will be by your side in this learning path to make the path smoother and clear for you and we prepare you to enter the job market and the real world.",
      ],
      children: [null],
    },
    {
      title:
        "Do I need any existing skills or knowledge to join SD tech academy courses?",
      description: [
        "No, you will be taught all the knowledge and background needed for each course. You can also see its prerequisites in each course. All you need is interest and persistence and leave the rest to us.",
      ],
      children: [null],
    },
    {
      title:
        "If I don&#39;t have any previous background, can I use SD Tech Academy courses?",
      description: [
        "Yes, The course is designed and leveled in such a way that it will match your age and level. Even if you are a beginner or zero-beginner we have courses that suits you.",
      ],
      children: [null],
    },
    {
      title: "Can I take this course if I am from non-technical background?",
      description: [
        "Yes, most of our courses start from the very basic and since it is a technology anybody and everyone can take part in it. (However please check course pre-requisites once before enrolling)",
      ],
      children: [null],
    },
    {
      title: "How do I know that this course is right for me?",
      description: [
        "If you don&#39;t know which course is right for you or if you have doubts about your interests, our expert team is here to help you and you can use our free consultation. We are always here to help and guide you.",
      ],
      children: [null],
    },
    {
      title: "7.How are the courses held?",
      description: [
        "Our courses are divided into two categories that you can customize according to your needs.",
      ],
      children: [
        {
          title: "Online classes:",
          data: [
            "Online group classes (7 to 13 students)",
            "1:1 private live classes (1 to 1 classes)",
            "Semi-private live classes (2 to 5 students)",
          ],
        },
        {
          title: "Offline classes:",
          data: [
            "Face-to-face offline classes (in person)",
            "Recorded offline classes (video)",
            "Educational packages",
          ],
        },
      ],
    },
    {
      title: "How can I contact you (real person)?",
      description: [
        "You can contact us through the contact section on the site or by email or contact number, and our support team is ready to answer your questions.",
      ],
      children: [null],
    },
    {
      title: "How can I communicate with you (business and cooperation)?",
      description: [
        "Please fill out the relevant form in the contact section or via email or contact number. We are ready to cooperate with universities, schools and institutes",
      ],
      children: [null],
    },
    {
      title: "Is there a section to order a project in SD Tech Academy?",
      description: [
        "Yes, but currently this section is not active on the site and you can send your request to do this through the contact form.",
      ],
      children: [null],
    },
    {
      title: "How to check the information of each course?",
      description: [
        "Enter the page of your desired course, All the contents are completely detailed and exclusive to SD Tech Academy.",
        "You can also refer to the specific roadmap of each course and watch the course introduction video.",
      ],
      children: [null],
    },
    {
      title: "Are sd tech academy courses suitable for freshers?",
      description: [
        "Yes, most of our courses have no pre-requisite until and unless it is specifically mentioned in the course description. And in most courses, we teach everything that is needed.",
      ],
      children: [null],
    },
    {
      title: "Can we contact the trainer directly?",
      description: [
        "Unfortunately, that cannot be done. We monitor each and every student and teacher to maintain quality and educational and moral evaluation , so all the work is done through our communication.",
      ],
      children: [null],
    },
    {
      title: "Does SDTechAcademy only provide online classes?",
      description: [
        "No, we hold online and offline classes in several models so that you can find the course that suits your needs.",
      ],
      children: [null],
    },
    {
      title: "What is the age group for which SDTechAcademy offers classes?",
      description: [
        "The courses are completely assigned for each age group, which can be seen in the description of each course.",
        "But in general, we have classes for all age groups according to their language and learning level and learningmethod.",
      ],
      children: [null],
    },
    // {
    //   title: "How to register for courses?",
    //   description: ["???idk"],
    //   children: [null],
    // },
    // {
    //   title: "What is the price of the classes and how to pay?",
    //   description: ["??"],
    //   children: [null],
    // },
    {
      title:
        "Why Choose SD tech academy?/ How is SDTechAcademy different from other Online Coding Class Companies?",
      description: [
        "High and guaranteed quality of our education",
        "Experienced and expert seniors in our team",
        "practical and project-oriented courses",
        "Support and permanent access to the course",
        "Experience in an international environment",
        "Experienced and expert trainers from all over the world in our team",
        "Preparing you to participate in national and international competitions",
        "Numerous evaluations and tests of Learners and trainers to maintain and increase quality",
        "Updating and preparing content and educational materials in accordance with the global educational standard",
        "The existence of a support team for each course",
        "Free consultation, leveling and guidance",
        "Diversity in how to hold classes according to your needs",
        "The ability to build a team and communicate with the international scientific community",
      ],
      children: [null],
    },
  ];
  return (
    <>
      <div className={hf.f_container} id="faq">
        <div className={hf.f_header}>
          <h1>FAQ</h1>
          <p>
            Got questions? Check out our FAQ section Or contact us via email or
            live-chat.
          </p>
        </div>
        <div className={hf.f_acc_container}>
          {faqs.length > 0 ? (
            faqs.map((data, indx) => (
              <Accordion data={data} key={indx} count={indx} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default FAQ;
