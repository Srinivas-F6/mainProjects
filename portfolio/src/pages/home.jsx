import { ThemeToggle } from "../components/Themetoggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { MainSection } from "../components/mainSection"
import { About } from "../components/About"
import { Skills } from "../components/skills"
import { Projects } from "../components/projects"
import { Contact } from "../components/contact"
import { Footer } from "../components/Footer"
export function Home(){
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle/>
         
        {/* Background effects */}
        <StarBackground/>


        {/* Navbar */}
        <Navbar/>


        {/* Main content */}

        <main>
            <MainSection/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </main>


        </div>
    )
}