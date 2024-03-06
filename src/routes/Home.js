import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import homeimg from '../../src/assets/homeimg.jpg'
import ProductListing from "../components/ProductListing";
import ContactForm from "../components/ContactForm";


function Home (){
    return(
        <>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg = {homeimg}
                title="Unleash Your Engineering Imagination"
                text="Explore your knowledge with EngiReads"
                buttonText="Explore"
                url="/"
                btnClass="show"
            />
            
            <ProductListing/>
            <div className="design" style={{backgroundColor: '#01959a', height: '100vh', paddingTop: '20px', }}>
                <ContactForm/>
            </div>
        </>
    )
}
export default Home;