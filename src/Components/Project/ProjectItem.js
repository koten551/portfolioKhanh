import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';



function ProjectItem({ props, isRreverse }) {
    return (
        <div className="section_inner" 
            style={isRreverse ? {flexDirection: "row-reverse"} : {}}>
            <div className="project_preview" style={{ backgroundImage: props.image }}>
                <a target="_blank" rel="noopener noreferrer" href={props.projectLink} style={{color: "transparent"}}>/</a>
            </div>
            <div className="project_details_wrap">
                <div className="project_details"
                    style={isRreverse ? {left: "0", textAlign: "left"} : {}}>
                    <p className="project_overline">{props.overLine}</p>
                    <h3 className="project_title">{props.title}</h3>
                    <p className="project_decriptions">{props.description}</p>
                    <ul className="list-group">
                        {props.techList.map((tech, index) => {
                            return (
                            <li key={index}>{tech}</li>
                            )
                        })}
                    </ul>
                    <div className="project_link">
                        <p><a href={props.gitLink}><AiFillGithub/></a></p>
                        <p><a href={props.projectLink}><BiLinkExternal/></a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem