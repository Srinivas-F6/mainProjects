import { ThemeToggle } from "../components/Themetoggle"
import { StarBackground } from "../components/StarBackground"
export function Home(){
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle/>
         
        {/* Background effects */}
        <StarBackground/>


        {/* Navbar */}


        {/* Main content */}


        </div>
    )
}