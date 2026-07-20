import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import BrandPromise from "../components/sections/BrandPromise";
import StrategicPillars from "../components/sections/StrategicPillars"; 
import Method from "../components/sections/Method";
import Audience from "../components/sections/Audience";
import Difference from "../components/sections/Difference";
import Services from "../components/sections/Services";
import Transformation from "../components/sections/Transformation";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <BrandPromise />
            <StrategicPillars />
            <Method />
            <Audience />
            <Difference />
            <Services />
            <Transformation />
            <Blog />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;