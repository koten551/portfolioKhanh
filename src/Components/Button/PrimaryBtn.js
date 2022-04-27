import './Button.css';

function PrimaryBtn({href, title}) {
    return(
        <>
         { href ? <a href={href} style={{textDecoration: 'none'}}><div className="primary_btn">{title}</div></a> :
          <div className="primary_btn">{title}</div> }               
        </>
    )
}

export default PrimaryBtn