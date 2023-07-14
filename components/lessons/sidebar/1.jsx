
import { useState } from 'react';
import l_sb from './sidebar.module.css';

// Icons
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import Link from 'next/link';
import { useEffect } from 'react';
const SideBarComponent = () => {
    const [active, setActive] = useState(false)

    const handleDropdownClick = (e) => {
       
        const acc_node = document.querySelector(`.${l_sb.dropdown_title}`);
        let acc_list = acc_node.nextElementSibling
        if (acc_list.style.display === 'none') {
            acc_list.style.display = 'block'
            acc_node.classList.add(`${l_sb.active}`)
        }
        else {
            acc_list.style.display = 'none'
            acc_node.classList.remove(`${l_sb.active}`)
        }
       
    }
    const handleclick = (e) => {
        e.target.parentElement.classList.add(`${l_sb.currentPage}`)
        const elements = document.querySelectorAll(`.${l_sb.currentPage}`)
        for(let i = 0; i<elements.length; i++) {
            elements[i].classList.remove(`${l_sb.currentPage}`)
            if(elements[i].querySelector('a').innerHTML ===  e.target.innerHTML) {
                elements[i].classList.add(`${l_sb.currentPage}`)
            }
        }
       
    }
    useEffect
    return (<>
        <div className={l_sb.sidebar_wrapper}>
            <div className={l_sb.sidebar}>
                <ul className={l_sb.sidebar_list}>
                    <div className={l_sb.leftBar_dropdown} >
                        <div className={l_sb.dropdown_title} onClick={handleDropdownClick}>
                            <h4>JS Basics</h4>
                            <span>
                                {active ? <HiChevronDown /> : <HiChevronUp />}
                            </span>
                        </div>
                        <ul style={{ display: 'none' }}>
                            <li><Link href="/js-intro" onClick={handleclick}>Introduction to JavaScript</Link></li>
                            <li><Link href="/js-full-form" onClick={handleclick}>JS Full Form</Link></li>
                            <li><Link href="#" onClick={handleclick}>Where to put JavaScript in an HTML Document ?</Link></li>
                            <li><Link href="#" onClick={handleclick}>JavaScript Statements</Link></li>
                            <li><Link href="#" onClick={handleclick}>JavaScript Basic Syntax</Link></li>
                            <li><Link href="#" onClick={handleclick}>JavaScript Output</Link></li>
                            <li><Link href="#" onClick={handleclick}>JavaScript Comments</Link></li>
                            <li><Link href="#" onClick={handleclick}>Variables and Datatypes in JavaScript</Link></li>
                            <li><Link href="#" onClick={handleclick}>Global and Local variables in JavaScript</Link></li>
                            <li><Link href="#" onClick={handleclick}>JavaScript Let</Link></li>
                            <li><Link href="#" onClick={handleclick}>JavaScript Const</Link></li>
                        </ul>
                    </div>
                </ul>
            </div>

        </div>
    </>)
}

export default SideBarComponent;