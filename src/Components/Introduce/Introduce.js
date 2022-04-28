import './Introduce.css'
import PrimaryBtn from "../Button/PrimaryBtn"

function Introduce() {
    return (
        <section className="introduce">
            <h4>Hi, my name is</h4>
            <h1 className="big_heading">Khánh Hoàng</h1>
            <h2 className="big_heading">I'm Frontend Developer.</h2>
            <p>With logical thinking skills & a creative mindset, I want to
                become one of the key members who bring an effective
                IT solution to the customers.</p>
            <PrimaryBtn title="Check out my course!" href="https://github.com/koten551?tab=repositories" newTab/>
        </section>
    )
}

export default Introduce