import './Header.css'
import PrimaryBtn from '../Button/PrimaryBtn'
function Header() {
    return (
        <div className="header">
            <a href="#1"><img className="logo" src="./logo192.png" alt="logo" /></a>
            <div className="nav_bar">
                <ol>
                    <li className="nav_bar__item"><a href="#about">About</a></li>
                    <li className="nav_bar__item" ><a href="#project">Project</a></li>
                    <li className="nav_bar__item" ><a href="#c">Work</a></li>
                    <li className="nav_bar__item" ><a href="#contact">Contact</a></li>
                </ol>
                 <PrimaryBtn 
                 title="Resume"
                 href="#abc"
                  />
            </div>
        </div>
    )
}

export default Header