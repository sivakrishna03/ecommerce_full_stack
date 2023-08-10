import React, { useState } from 'react';
import './index.css';
import { VscThreeBars } from "react-icons/vsc";

import { Link } from 'react-router-dom';


const navlist_data = [
    {
        id: 1,
        list: 'Home',
        path: '/',
        isActive: true,
    },
    {
        id: 2,
        list: 'Login',
        path: '/Login',
        isActive: false,
    },
    {
        id: 3,
        list: 'Signup',
        path: '/Signup',
        isActive: false,
    },
    {
        id: 4,
        list: 'Contact',
        path: '/Contact',
        isActive: false,
    },
];

const HomeNavbar = () => {
    const [tabs, setTab] = useState(navlist_data);
    console.log(tabs)

    const isActiveTab = (event) => {
        const clickedItemId = parseInt(event.target.id);
        const updatedTabs = tabs.map((eachItem) => ({
            ...eachItem,
            isActive: eachItem.id === clickedItemId,
        }));
        setTab(updatedTabs);
    };

    return (
        <div className='nav-container'>
            <div className='web-view'>
                <img
                    src='https://images.saatchiart.com/saatchi/1781609/art/9001697/8065065-WPUEGDXD-7.jpg'
                    alt='company-logo'
                    className='logo-icon'
                />
                <ul className='navulist'>
                    {tabs.map((eachItem, index) => (
                        <li
                            className={`listitems ${eachItem.isActive ? 'active' : ''}`}
                            id={eachItem.id}
                            key={eachItem.id}
                            onClick={isActiveTab}
                        >

                            {eachItem.list}
                            {/* Not Working */}
                            {/* <Link to={eachItem.path}>{eachItem.list}</Link> */}

                            {/* {eachItem.list} */}
                        </li>

                    ))}

                </ul>

                <div className='mobile-view'>
                    <div>
                        <VscThreeBars className='bars' />
                        <div>
                            <h1>Home Page</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HomeNavbar;
