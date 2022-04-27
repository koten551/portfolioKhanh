import './SectionHeader.css'

function SectionHeader({position, title}) {
    return (
        <h2 className="section_header">
            <span>{position}.</span>
            <p>{title}</p>
        </h2>
    )
}

export default SectionHeader