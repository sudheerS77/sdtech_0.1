
import { useState } from 'react';
import l_sb from './sidebar.module.css';

// Icons
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import Link from 'next/link';
import { useEffect } from 'react';
const AccordionComponent = ({ data }) => {

    const [active, setActive] = useState(false)

    const handleDropdownClick = (e) => {
        console.log(e.target.value);









        // e.target.parentElement.classList.add(`${l_sb.currentPage}`)
        // const elements = document.querySelectorAll(`.${l_sb.currentPage}`)
        const acc_nodes = document.querySelectorAll(`.${l_sb.dropdown_title}`);
        // console.log(acc_nodes);
        for (let i = 0; i < acc_nodes.length; i++) {
            // console.log(acc_nodes[i].classList);
            acc_nodes[i].classList.forEach((ee) => {
                // console.log(ee);
            })
        }
        // let acc_list = acc_node.nextElementSibling
        // if (acc_list.style.display === 'none') {
        //     acc_list.style.display = 'block'
        //     acc_node.classList.add(`${l_sb.active}`)
        // }
        // else {
        //     acc_list.style.display = 'none'
        //     acc_node.classList.remove(`${l_sb.active}`)
        // }
    }

    const handleclick = (e) => {
        e.target.parentElement.classList.add(`${l_sb.currentPage}`)
        const elements = document.querySelectorAll(`.${l_sb.currentPage}`)
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(`${l_sb.currentPage}`)
            if (elements[i].querySelector('a').innerHTML === e.target.innerHTML) {
                elements[i].classList.add(`${l_sb.currentPage}`)
            }
        }
    }

    return (<>
        <div className={l_sb.leftBar_dropdown} >
            <div className={l_sb.dropdown_title} onClick={handleDropdownClick}>
                <h4>{data.topic_header}</h4>
                <span>
                    {active ? <HiChevronDown /> : <HiChevronUp />}
                </span>
            </div>
            <ul style={{ display: 'none' }}>
                {data.sub_topics.length > 1 ? (
                    data?.sub_topics?.map((st, indx) => (
                        <li key={indx}><Link href="/js-intro" onClick={handleclick}>{st}</Link></li>
                    ))
                ) :
                    (
                        <li><Link href="/js-intro" onClick={handleclick}>{data.sub_topics}</Link></li>
                    )
                }

            </ul>
        </div>
    </>)
}

const SideBarComponent = () => {
    const data = [
        {
            tile: "",
            children: [
                {
                    "topic_header": "Introduction",
                    "sub_topics": [
                        "Python Programming Language",
                        "Introduction To Python",
                        "Python Programming Language1",
                        "Introduction To Python1",
                        "Python Programming Language2",
                        "Introduction To Python2",
                        "Python Programming Language3",
                        "Introduction To Python3",
                        "Python Programming Language4",
                        "Introduction To Python4",
                        "Python Programming Language5",
                        "Introduction To Python5",
                        "Python Programming Language6",
                        "Introduction To Python6"
                    ]
                },
                {
                    "topic_header": "control structure",
                    "sub_topics": ["for", "while", "do-while", "for", "while", "do-while"]
                },
                {
                    "topic_header": "Strings",
                    "sub_topics": [
                        "Python Programming Language",
                        "Introduction To Python",
                        "Python Programming Language1",
                        "Introduction To Python1",
                        "Python Programming Language2",
                        "Introduction To Python2",
                        "Python Programming Language3",
                        "Introduction To Python3",
                        "Python Programming Language4",
                        "Introduction To Python4",
                        "Python Programming Language5",
                        "Introduction To Python5",
                        "Python Programming Language6",
                        "Introduction To Python6"
                    ]
                },
                {
                    "topic_header": "List",
                    "sub_topics": ["for", "while", "do-while", "for", "while", "do-while"]
                },
                {
                    "topic_header": "tuples",
                    "sub_topics": ["for", "while", "do-while", "for", "while", "do-while"]
                },
                {
                    "topic_header": "tuples",
                    "sub_topics": ["for", "while", "do-while", "for", "while", "do-while"]
                },
                {
                    "topic_header": "dictionary",
                    "sub_topics": ["for", "while", "do-while", "for", "while", "do-while"]
                },
                {
                    "topic_header": "classes and objects",
                    "sub_topics": [
                        "Python Programming Language",
                        "Introduction To Python",
                        "Python Programming Language1",
                        "Introduction To Python1",
                        "Python Programming Language2",
                        "Introduction To Python2",
                        "Python Programming Language3",
                        "Introduction To Python3",
                        "Python Programming Language4",
                        "Introduction To Python4",
                        "Python Programming Language5",
                        "Introduction To Python5",
                        "Python Programming Language6",
                        "Introduction To Python6"
                    ]
                },


            ]
        },
    ]

    return (
        <>
            <div className={l_sb.sidebar_wrapper}>
                {
                    data[0].children?.map((data, indx) => (
                        <AccordionComponent data={data} key={indx} />
                    ))
                }
                <div className={l_sb.sidebar}>
                    <ul className={l_sb.sidebar_list}>
                    </ul>
                </div>
            </div>
        </>
    )
}

