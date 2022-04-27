import './Introduce.css'
import PrimaryBtn from "../Button/PrimaryBtn"

function Introduce() {
    return (
        <section className="introduce">
            <h4>Hi, my name is</h4>
            <h1>Khánh Hoàng</h1>
            <h2>I'm Frontend Developer.</h2>
            <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
                Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
            <PrimaryBtn title="Check out my course!"/>    
        </section>
    )
}

export default Introduce