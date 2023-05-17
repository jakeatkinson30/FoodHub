import React from "react"
import { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar() {
        setShowSidebar(false);
    }
    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo">F<span>oo</span>d Hub</a>
                <div className="nav-links">
                    {links.map(link => (
                        <a href="#1" key={link.name}>{link.name}</a>
                    ))}
                </div>
                <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links}/> }
            
        </>
    )
}