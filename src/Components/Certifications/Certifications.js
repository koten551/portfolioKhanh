import './Certifications.css'
import SectionHeader from '../SectionHeader/SectionHeader'

import {useRef, useState} from 'react'

const tabDataList = [
    {
        fieldName: 'Student',
        title: 'PTIT Ho Chi Minh',
        content: '2018/9 – 2023/2',
        listItem: ['Major: Information Technology', 'Software']
    },
    {
        fieldName: 'Certifications',
        title: 'Fullstack education',
        content: 'fullstack.edu.vn/',
        listItem: ['Javascript', 'ReactJS', 'Responsive Web design']
    },
    {
        fieldName: 'certifications',
        title: 'Fullstack education',
        content: 'fullstack.edu.vn/',
        listItem: ['Javascript', 'ReactJS', 'Responsive Web design']
    },
    {
        fieldName: 'certifications',
        title: 'Fullstack education',
        content: 'fullstack.edu.vn/',
        listItem: ['Javascript', 'ReactJS', 'Responsive Web design']
    },
]

function Study() {

    const lineElement = useRef()
    const tabList = useRef()
    const handleLine = (position, size) => {
        lineElement.current.style.top = position + 'px'
        lineElement.current.style.height = size + 'px'
    }

    const [tabData, setTabData] = useState(tabDataList[0])

    const handleSlide = (e) => {
        const activeElement = tabList.current.querySelector('.active')
        activeElement.classList.remove('active')
        e.target.classList.add('active')
        setTabData(tabDataList[e.target.dataset.tab])
        handleLine(e.target.offsetTop, e.target.offsetHeight)       
    }
    return(
        <section className="certification" id="certification">
            <SectionHeader title="Education" position="03"/>
            <div className="section_inner">
                <div ref={tabList} className="tab_list">
                    <div onClick={handleSlide} data-tab='0' className="tab_list_item active">{tabDataList[0].fieldName}</div>
                    <div onClick={handleSlide} data-tab='1' className="tab_list_item">{tabDataList[1].fieldName}</div>
                    <div onClick={handleSlide} data-tab='2' className="tab_list_item">{tabDataList[2].fieldName}</div>
                    <div onClick={handleSlide} data-tab='3' className="tab_list_item">{tabDataList[3].fieldName}</div>
                    <div ref={lineElement} className="line"></div>
                </div>
                <div className="tab_panel">
                    <h4>{tabData.title}</h4>
                    <p>{tabData.content}</p>
                    <ul className="list-group">
                        {tabData.listItem ? tabData.listItem.map((item, index) => <li key={index}>{item}</li>) : <></>}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Study