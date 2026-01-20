import { ArrowDown } from "lucide-react"

export const MainSection = () => {
  return (
    <section id="home">
      <div className="relative min-h-screen flex items-center px-4 pt-18 md:pt-0">
        
        <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">

          {/* LEFT: Image */}
          <div className="flex justify-center md:justify-start opacity-0 pb-30 animate-fade-in-delay-3 md:order-1 order-2">
            <img
              src="/23a91a61f6.png"
              alt="Srinivas"
              className="w-64 h-64 md:w-140 md:h-140  rounded-full object-cover shadow-lg"
            />
          </div>

          {/* RIGHT: Information */}
          <div className="text-center md:text-left space-y-6 md:order-2 order-1">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}I am
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}Srinivas
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
              I’m a passionate developer who enjoys building clean, user-friendly web applications.
              I like learning new technologies, solving real-world problems, and continuously improving my skills.
              My goal is to create efficient, scalable solutions with great user experience.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>

      </div>
    </section>
  )
}
