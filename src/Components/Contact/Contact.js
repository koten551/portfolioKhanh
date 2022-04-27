import './Contact.css'
import PrimaryBtn from '../Button/PrimaryBtn'
import SectionHeader from '../SectionHeader/SectionHeader'
function Contact() {
    return (
        <section className="contact" id="contact">
            <SectionHeader position="03" title="Contact Me" />
            <form action="" method="post">
                <div className="row">
                    <div className="form-group col l-6 m-6 c-12">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="type your name..."></input>
                    </div>
                    <div className="form-group col l-6 m-6 c-12">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="type your email..."></input>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col l-12 m-12 c-12">
                        <label htmlFor="description">Content</label>
                        <textarea type="text" id="description" name="description" rows="4"></textarea>
                    </div>
                </div>
                <div style={{ width: "fit-content", margin: "0 auto", paddingTop: "20px" }}><PrimaryBtn title="Say Hello" /></div>
            </form>

        </section>
    )
}

export default Contact