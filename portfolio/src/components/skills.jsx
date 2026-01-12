import React from "react";
import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    { name: "HTML", level: 44, category: "Front-end" },
    { name: "CSS", level: 44, category: "Front-end" },
    { name: "JavaScript", level: 44, category: "Front-end" },
    { name: "React.js", level: 44, category: "Front-end" },

    { name: "Spring Framework", level: 44, category: "Back-end" },
    { name: "Spring Boot", level: 44, category: "Back-end" },
    { name: "Spring Data JPA", level: 44, category: "Back-end" },
    { name: "Spring Security", level: 44, category: "Back-end" },
    { name: "REST APIs", level: 44, category: "Back-end" },

    { name: "Java", level: 94, category: "Programming Language" },
    { name: "Python", level: 74, category: "Programming Language" },
    { name: "C", level: 54, category: "Programming Language" },
    { name: "SQL", level: 84, category: "Programming Language" },

    { name: "Git", level: 44, category: "Tools" },
    { name: "GitHub", level: 44, category: "Tools" },
    { name: "VS Code", level: 44, category: "Tools" },
    { name: "Eclipse", level: 44, category: "Tools" },

    { name: "MySQL", level: 44, category: "Database" },
    { name: "MongoDB", level: 44, category: "Database" },
]

const categories = ["all", "Front-end", "Back-end", "Tools", "Programming Language", "Database"];

export function Skills() {

    const [activeCategoty, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategoty === "all" || skill.category === activeCategoty);



    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-13 text-center">
                    My{" "}<span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categories.map((category, key) => (
                            <button key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn("px-5 py-2 rounded-full transition-colors duration-100 capitalize",
                                    activeCategoty === category ? "bg-primary text-primary-foreground" : "bg-secondary/80 text-foreground hover:bd-secondary"
                                )}>{category}</button>
                        ))
                    }

                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        filteredSkills.map((skill, idx) => (
                            <div key={idx} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                </div>
                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                        style={{ width: skill.level + "%" }}
                                    />
                                </div>
                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground ">{skill.level}%</span>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    )
}