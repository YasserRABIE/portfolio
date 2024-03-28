import { useRef } from "react";
import Card from "../components/Card";
import AnimatedSectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";
import { useScroll } from "framer-motion";

function Projects({ setHoveringProject }: { setHoveringProject: Function }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });
    return (
        <div id="Projects" className="flex flex-col items-center selection:bg-dark-2">
            <AnimatedSectionTitle Title="projects" />
            <div ref={container} className="main h-[310vh]">
                {projects.map((project, index) => {
                    const targetScale = 1 - (projects.length - index) * 0.05;
                    return (
                        <Card
                            setHoveringProject={setHoveringProject}
                            key={index}
                            {...project}
                            progress={scrollYProgress}
                            range={[index * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;
