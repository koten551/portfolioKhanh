import './Button.css';

function PrimaryBtn({href, title, newTab}) {
    return(
        <>
         { href ? <a target={newTab ? "_blank" : ""} rel="noopener noreferrer" href={href} style={{textDecoration: 'none'}}><div className="primary_btn">{title}</div></a> :
          <div className="primary_btn">{title}</div> }               
        </>
    )
}

export default PrimaryBtn