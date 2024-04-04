import { ProjectCard } from "../../components/ProjectCartd"

export const TechSlide = () => {
  return (
    <>
      <h4 className="text-center text-primary mb-12">
        Cosillas de tecnología
      </h4>
      <div
        className="flex justify-around items-center gap-4 max-w-full max-h-[70vh] flex-wrap"
      >
        <div className="w-2/5">
          <ProjectCard
            className="text-[1.1rem] bg-black/80 p-4 gap-[0.5rem] animate-fadeIn ease-in-out duration-150"
            title="RevealJS"
            description="RevealJS es una librería de JavaScript que permite crear presentaciones de diapositivas interactivas."
            image="https://static.slid.es/reveal/logo-v1/reveal-white-text.svg"
            link="https://revealjs.com/"
            techStack={["Reveal.js:#D53F8C"]}
          />
        </div>
        <div className="w-2/5">
          <ProjectCard
            className="text-[1.1rem] bg-white text-black gap-[0.5rem] animate-fadeIn ease-in-out duration-150"
            title="GitHub"
            description="Estas diapositivas están alojadas en GitHub. Puedes ver el código fuente en el siguiente enlace."
            image="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
            link="https://github.com/TechHoruser/react-revealjs"
            techStack={["React:#149ECA", "Reveal.js:#D53F8C", "TypeScript:#2F74C0", "Tailwind:#2E83C6"]}
          />
        </div>
        <div className="w-2/5">
        </div>
      </div>
    </>
  )
}
