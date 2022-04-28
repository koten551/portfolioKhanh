import './FixedBar.css'
import { AiFillGithub, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'



function FixedBar() {

    return (
        <>
            <div className="vertical_bar" style={{ left: "50px" }}>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/koten551"><AiFillGithub /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/h2khanh/"><AiOutlineInstagram /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/koten551"><AiOutlineFacebook /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/koten551"><FiTwitter /></a></li>
                </ul>
            </div>
            <div className="vertical_bar" style={{ right: "50px" }}>
                <p className="my_gmail"
                    onClick={(e) => navigator.clipboard.writeText(e.target.innerText)}>
                    koten551@gmail.com</p>
            </div>
        </>


    )
}

export default FixedBar