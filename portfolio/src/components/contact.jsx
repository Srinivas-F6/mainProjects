import { Instagram, Linkedin, Mail, MapPin, Phone,Send } from "lucide-react"
import { cn } from "../lib/utils"
export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-sxl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In<span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collabrate? Feel free to reach out.
                    I'm always open to discussing new oppurtunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-semibold ">
                            Contact Information
                        </h3>

                        <div className="space-y-6 ">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:glsrinivas1819@gmail.com"
                                        aria-label="Send email"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        glsrinivas1819@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 9505691379
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        kakinada, East Godavari, Andhra Pradesh
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 ">
                            <h4 className="font-medium mb-4">Connect with me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a>
                                    <Linkedin />
                                </a>
                                <a>
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                         <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                         <form className="space-y-6" >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">{" "}Your Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary" 
                                       placeholder="Srinivas"
                                required/>

                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">{" "}Email</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary" 
                                       placeholder="Srinivas1819@gmail.com"
                                required/>

                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">{" "}Your Message</label>
                                <textarea type="message" id="message" name="message" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none" 
                                       placeholder="message.."
                                required/>
                            </div>
                            <button type="submit" className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-3"
                            )}>
                                 Send Message <Send size={17}/>
                            </button>
                         </form>
                    </div>
                </div>
            </div>

        </section>
    )
}