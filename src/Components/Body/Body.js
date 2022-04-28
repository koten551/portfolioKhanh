import './Body.css'

import Introduce from "../Introduce/Introduce"
import About from '../About/About'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import Certifications from '../Certifications/Certifications'
function Body() {
    return (
        <div className="wide">
            <div className="row">
                <div className="col l-1 m-1 c-0"></div>
                <div className="col l-10 m-10 c-12">
                    <Introduce />

                    <About />

                    <Project />

                    <Certifications />

                    <Contact />
                </div>
                <div className="col l-1 m-1 c-0"></div>

            </div>

        </div>
    )
}

export default Body