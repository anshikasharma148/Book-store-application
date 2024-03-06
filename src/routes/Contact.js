import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactimg from "../../src/assets/contactimg.jpg"
import ContactForm from "../components/ContactForm";



function Contact (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg = {contactimg}
                title="Contact"
                
                
                btnClass="hide"
            />
            <ContactForm/>
        </>
    )
}
export default Contact;