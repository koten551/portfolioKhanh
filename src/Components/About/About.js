import './About.css'
import SectionHeader from '../SectionHeader/SectionHeader'

function About() {
    return (
        <section className="about_me" id="about">
            <SectionHeader
                position="01"
                title="About Me"
            />

            <div className="section_inner">
                <div className="row">
                    <div className="col l-8 m-6 c-12">
                        <p>
                            With the knowledge of what's in the school and courses,
                            I've always wanted to become a Front-End Developer,
                            Having solid knowledge of HTML, CSS,
                            Javascript and ReactJS, plus skills I hone every day,
                            I always want to give my best to help the company grow and achieve for myself.
                        </p>
                        <p>
                            Strengths: Front-end technology and web application
                            development
                            <br />
                            - Proficiency in HTML, CSS, JavaScript
                            <br />
                            - Familiarity with popular React.js workflows
                            <br />
                            - Capability of Responsive Web Design
                            <br />
                            - Ability to learn and apply new technology quickly
                        </p>
                        <p>Here are my main skill:</p>
                        <ul className="list-group">
                            <li>ReactJS</li>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col l-4 m-6 c-12">
                        <div className="wrapper">
                            <div className="avatar_wrap">
                                <div className="avatar_border">

                                </div>
                                <img className="avatar" src="./avatar.jpg" alt="avatar"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About