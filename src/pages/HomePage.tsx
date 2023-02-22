import About from "../components/AboutInfo"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Home from "../components/Home"
import NavBar from "../components/NavBar"
import Portfolio from "../components/Portfolio"
import SocialLinks from "../components/SocialLinks"

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <Home/>
            <About/>
            <Portfolio/>
            <Experience/>
            <Contact/>
            <SocialLinks/>
        </>
        ) 
}

export default HomePage;