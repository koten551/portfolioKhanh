import './Project.css'
import ProjectItem from './ProjectItem'
import SectionHeader from '../SectionHeader/SectionHeader'
import PrimaryBtn from '../Button/PrimaryBtn'
import { useState } from 'react'

const MIN_ITEM = 2;
const projectList = [
    {
        image: "url(./foodpreview.png)",
        overLine: "Website & App",
        title: "Fresh Food",
        techList: ["HTML", "CSS", "Javascript"],
        gitLink: "http://github.com/",
        projectLink: "http://github.com",
        description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
    },
    {
        image: "url(./foodpreview.png)",
        overLine: "Website & App",
        title: "Fresh Food",
        techList: ["HTML", "CSS", "Javascript"],
        gitLink: "http://github.com/",
        projectLink: "http://github.com",
        description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
    },
    {
        image: "url(./foodpreview.png)",
        overLine: "Website & App",
        title: "Fresh Food",
        techList: ["HTML", "CSS", "Javascript"],
        gitLink: "http://github.com/",
        projectLink: "http://github.com",
        description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
    }
]

function Project() {

    const [itemCount, setItemCount] = useState(MIN_ITEM)
    const [btnTitle, setBtnTitle] = useState("Show More")
    const handleClick = () => {
        if(btnTitle === "Show More") {
            setBtnTitle("Show Less")
            setItemCount(projectList.length)
        } else {
            setBtnTitle("Show More")
            setItemCount(MIN_ITEM)
        }
    }
    
    return (
        <section className="project" id="project">
            <SectionHeader
                position="02"
                title="My Project"
            />
            {projectList.map((project, index) => {
                return (
                    index < itemCount ? 
                    <ProjectItem key={index} props={project} isRreverse={index % 2 === 1 ? true : false} /> : 
                    undefined
                )
            })}
            <div onClick= {handleClick}
            style={{ width: "fit-content", margin: "0 auto" }}>
                <PrimaryBtn title={btnTitle} />
            </div>
        </section>
    )
}

export default Project