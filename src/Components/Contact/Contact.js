import './Contact.css'
import { useRef, useMemo, useState } from 'react'
import PrimaryBtn from '../Button/PrimaryBtn'
import SectionHeader from '../SectionHeader/SectionHeader'
import emailjs from 'emailjs-com'
function Contact() {
    const form = useRef()
    const statusElement = useRef()
    const messageElement = useRef()
    const emailElement = useRef() 
    const [status, setStatus] = useState()
    const contactMe = useMemo(e => (e) => {
        e.preventDefault()
        if((messageElement.current.value.length !== 0) && (emailElement.current.value.length !== 0)) {
            emailjs.sendForm('ContactMe', 'template_mv2pwem', form.current, 'fXltcBGvtXPBXMjqA')
                .then((result) => {
                    setStatus({message: "Success!", type: true})
                }, (error) => {
                    setStatus({message: "Failed! please check your network and try again", type: false})    
                })
            e.target.reset()
        } else {
            setStatus({message: "Failed! Email and message are required", type: false})   
        }
    }, [])
    setTimeout(() => {
        if(statusElement.current) {
            setStatus(undefined)
        } 
    }, 2000)
    return (
        <section className="contact" id="contact">
            <SectionHeader position="04" title="Contact Me" />
            <form ref={form} method="post" onSubmit={contactMe}>
                <div className="row">
                    <div className="form-group col l-6 m-6 c-12">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="type your name..."></input>
                    </div>
                    <div className="form-group col l-6 m-6 c-12">
                        <label htmlFor="email">Email</label>
                        <input ref={emailElement} type="email" id="email" name="email" placeholder="type your email..."></input>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col l-12 m-12 c-12">
                        <label htmlFor="message">Message</label>
                        <textarea ref={messageElement} type="text" id="message" name="message" rows="4"></textarea>
                    </div>
                </div>
                <button><PrimaryBtn title="Say Hello" /></button>
            </form>
            {status ? <div ref={statusElement} className="status_message" style={status.type ? {} : {color: "red"}}>{status.message}</div> : <></>}
        </section>
    )
}

export default Contact