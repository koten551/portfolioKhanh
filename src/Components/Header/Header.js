import './Header.css'
import PrimaryBtn from '../Button/PrimaryBtn'

function NavList() {
    return (
        <ol className="nav-list">
            <li className="nav_bar__item"><a href="#about">About</a></li>
            <li className="nav_bar__item" ><a href="#project">Project</a></li>
            <li className="nav_bar__item" ><a href="#certification">Certifications</a></li>
            <li className="nav_bar__item" ><a href="#contact">Contact</a></li>
        </ol>)
}


function Header() {
    return (
        <div className="header">
            <a href="https://qkhanhh.netlify.app/"><img className="logo" src="./logo192.png" alt="logo" /></a>
            <div className="nav_bar">
                <NavList />
                <PrimaryBtn
                    title="Resume"
                    href="https://static.topcv.vn/topcv-cv-uploads/bff256ef24cab096b9959f35e3791dcd.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    newTab
                />
            </div>
        </div>
    )
}

export default Header