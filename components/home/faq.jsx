import React, { useState } from "react";

import hf from './faq.module.css';
import { BiPlus, BiMinus } from 'react-icons/bi'

const Accordion = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <div className={hf.f_accordion}>
                <div >
                    <div className={hf.f_acc_head} onClick={() => setClicked(!clicked)}>
                        <div className={hf.f_acc_icon}> {clicked === true ? <BiMinus /> : <BiPlus />}</div>
                        <h4>What do we do?</h4>
                    </div>
                    {clicked ? (
                        <div className={hf.f_acc_body}>
                            <p>We are a champion team of IIT, Harvard, NYU, and IIM alumni, as well as Ph.D holders and ISRO scientists providing 1:1 live classes to children aimed at arming them with the power of technology creation and mathematical thinking. We have our own proprietary teaching platforms apart from the ones from Google, MIT, Autodesk, and others.</p>
                        </div>
                    ) : (<></>)

                    }
                </div>
            </div>
        </>
    )
}

const FAQ = () => {
    return (
        <>
            <div className={hf.f_container} id="faq">
                <div className={hf.f_header}>
                    <h1>FAQ</h1>
                    <p>Got questions? Check out our FAQ section Or contact us via email or live-chat.</p>
                </div>
                <div className={hf.f_acc_container}>
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                    <Accordion />
                </div>
            </div>
        </>
    )
}

export default FAQ;