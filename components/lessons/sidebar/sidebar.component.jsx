
import { useState } from 'react';
import l_sb from './sidebar.module.css';

// Icons
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import Link from 'next/link';
import { useEffect } from 'react';
const SideBarComponent = () => {
    const [active, setActive] = useState(false)

    const handleDropdownClick = (e,header_text) => {

        const acc_node = document.querySelectorAll(`.${l_sb.dropdown_title}`);

        for(let i=0; i<acc_node.length; i++) {
            if(header_text === acc_node[i].children[0].innerHTML) {
                let acc_list = acc_node[i].nextElementSibling
                console.log(acc_list);
                if (acc_list.style.display === 'none') {
                    acc_list.style.display = 'block'
                    acc_node[i].classList.add(`${l_sb.active}`)
                }
                else {
                    acc_list.style.display = 'none'
                    acc_node[i].classList.remove(`${l_sb.active}`)
                }
            }
           
        }

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

    return (<>
        <div className={l_sb.sidebar_wrapper}>
            <div className={l_sb.sidebar}>
                <ul className={l_sb.sidebar_list}>
                    {
                        data[0].children?.map((data, indx) => (
                            <div className={l_sb.leftBar_dropdown} key={indx} >
                                <div className={l_sb.dropdown_title} onClick={(e) => handleDropdownClick(e,data.topic_header)}>
                                    <h4>{data.topic_header}</h4>
                                    <span>
                                        {active ? <HiChevronDown /> : <HiChevronUp />}
                                    </span>
                                </div>
                                <ul style={{ display: 'none' }}>
                                    {data.sub_topics.length > 1 ? (
                                        data?.sub_topics?.map((st, indx) => (
                                            <li key={indx}><Link href={`/${st}`} onClick={handleclick} className={l_sb.page_link}>{st}</Link></li>
                                        ))
                                    ) :
                                        (
                                            <li><Link href="/js-intro" onClick={handleclick}>{data.sub_topics}</Link></li>
                                        )}


                                </ul>
                            </div>
                        ))
                    }
                </ul>
            </div>

        </div>
    </>)
}

export default SideBarComponent;