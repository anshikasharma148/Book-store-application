import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../../src/assets/aboutimg.jpg"
import AboutUs from "../components/AboutUs"


function About (){
    return(
        <>
        <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg = {aboutimg}
                title="About EngiReads"
                
                
                btnClass="hide"
            />

            <AboutUs />
            
        </>
    )
}
export default About;