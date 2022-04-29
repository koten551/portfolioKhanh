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
        gitLink: "https://github.com/koten551/webNongSan",
        projectLink: "https://nongsansach.netlify.app/",
        description: "Website bán nông sản sạch, hữu cơ, chuyên cung cấp các sản phẩm sạch, chất lượng và an toàn cho người tiêu dùng."
    },
    {
        image: "url(./tiktok.png)",
        overLine: "Theme Clone",
        title: "Tiktok",
        techList: ["ReactJS"],
        gitLink: "https://github.com/koten551/tiktokThemeClone",
        projectLink: "https://deluxe-druid-0f0867.netlify.app/",
        description: "Sử dụng ReactJS tạo giao diện của Tiktok, dự án đang trong thời gian phát triển."
    },
    {
        image: "url(./theband.png)",
        overLine: "Website",
        title: "The Band",
        techList: ["HTML", "CSS", "Javascript"],
        gitLink: "https://github.com/koten551/theband",
        projectLink: "https://magnificent-fox-2c9df9.netlify.app/",
        description: "Thực hành dự án cắt HTML, CSS the Band của w3schools với giao diện responsive."
    },
    {
        image: "url(./musicApp.png)",
        overLine: "Website & App",
        title: "Fresh Food",
        techList: ["HTML", "CSS", "Javascript"],
        gitLink: "https://github.com/koten551/musicAppF8",
        projectLink: "https://lucky-empanada-db1b3d.netlify.app/",
        description: "Trình phát nhạc tự code xịn xò, thỏa mãn đam mê nghe nhạc của bạn."
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