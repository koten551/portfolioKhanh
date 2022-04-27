import './Body.css'

import Introduce from "../Introduce/Introduce"
import About from '../About/About'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

function Body() {
    return (
        <div className="wide">
            <div className="row">
                <div className="col l-1 m-1 c-1"></div>
                <div className="col l-10 l-10 c-10">
                    <Introduce />

                    <About />

                    <Project />

                    <Contact />
                </div>
                <div className="col l-1 m-1 c-1"></div>

            </div>

        </div>
    )
}

export default Body