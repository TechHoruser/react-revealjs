import { ProjectCard } from "../../components/ProjectCartd"

interface Props {
  sectionKey: string;
  startIndex: number;
}


export const AisList = (props: Props) => {
  return (
    <section key={`${props.sectionKey}-${props.startIndex}`}>
      <h4 className="text-center text-primary mb-12">
        Catálogo de IAS
      </h4>
      <div
        className="flex justify-around items-center gap-4 max-w-full max-h-[70vh] flex-wrap"
      >
        <div className="w-2/5">
          <ProjectCard
            className="text-[1.1rem] bg-black/80 p-4 gap-[0.5rem] animate-fadeIn ease-in-out duration-150"
            title="AI Collection"
            description="EL PANORAMA DE LA IA GENERATIVA. Una colección de impresionantes aplicaciones de IA generativa"
            image="/ai-catalog.png"
            link="https://github.com/ai-collection/ai-collection/blob/main/README.es.md#index"
            techStack={["AI:#D53F8C", "awasome:#7c3158", "collection:#5555c7"]}
          />
        </div>
        <div className="w-1/5">
          <ProjectCard
            className="text-[1.1rem] bg-white text-black gap-[0.5rem] animate-fadeIn ease-in-out duration-150"
            title="1000 AI collection tools"
            description="Estas diapositivas están alojadas en GitHub. Puedes ver el código fuente en el siguiente enlace."
            image="/ai-catalog-2.png"
            link="https://github.com/yousefebrahimi0/1000-AI-collection-tools"
            techStack={["AI:#D53F8C", "awasome:#7c3158", "collection:#5555c7"]}
          />
        </div>
      </div>
    </section>
  )
}
