import './FixedBar.css'
import { AiFillGithub, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'



function FixedBar() {

    return (
        <>
            <div className="vertical_bar" style={{ left: "50px" }}>
                <ul>
                    <li><a href=""><AiFillGithub /></a></li>
                    <li><a href=""><AiOutlineInstagram /></a></li>
                    <li><a href=""><AiOutlineFacebook /></a></li>
                    <li><a href=""><FiTwitter /></a></li>
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