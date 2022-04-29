import './Header.css'
import PrimaryBtn from '../Button/PrimaryBtn'
import { VscListFlat, VscClose } from 'react-icons/vsc'


import { useState } from 'react'
function NavList() {
    return (
        <ol className="nav-list">
            <li className="nav__item"><a href="#about">About</a></li>
            <li className="nav__item" ><a href="#project">Project</a></li>
            <li className="nav__item" ><a href="#certification">Certifications</a></li>
            <li className="nav__item" ><a href="#contact">Contact</a></li>
        </ol>)
}


function Header() {
    const [show, setShow] = useState(false)

    return (
        <div className="header">
            <a href="https://qkhanhh.netlify.app/"><img className="logo" src="./logo192.png" alt="logo" /></a>
            <div className="nav_bar">
                <div className="none-mobile">
                    <NavList />
                </div>
                <PrimaryBtn
                    title="Resume"
                    href="https://static.topcv.vn/topcv-cv-uploads/bff256ef24cab096b9959f35e3791dcd.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    newTab
                />
                <div onClick={() => setShow(!show)}
                    className="mobile_nav_btn">
                    <VscListFlat />
                </div>
                {show &&
                    <div className="mobile_nav" >
                        <div className="mobile_nav__close" onClick={() => setShow(!show)}><VscClose /></div>
                        <NavList />
                    </div>}
            </div>
        </div>
    )
}

export default Header