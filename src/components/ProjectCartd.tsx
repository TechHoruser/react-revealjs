interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  gif?: string
  techStack: string[]
  className: string
}

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  gif,
  techStack,
  className,
}: ProjectCardProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
      <div
        className={`
          project-card
          w-full
          h-full
          flex
          flex-col
          justify-start
          items-center
          overflow-hidden
          rounded-md
          ${className}
        `}
      >
        <div className="card-image" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "55%", width: "100%", overflow: "hidden" }}>
          <div style={{ position: "relative", height: "100%", width: "100%" }}>
            {gif && <img src={gif} alt={title} style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} />}
            <img className={gif ? "cover-image" : "sole-image"} src={image} alt={title} style={{ position: "relative", top: gif ? "-100%" : "0", maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
        <div className="card-content" style={{ display: "flex", justifyContent: "start", alignItems: "center", flexDirection: "column", gap: "0.5rem", marginTop: "1rem", flex: 1 }}>
          <h4 style={{ color: "#E20077", textAlign: "center", fontSize: "160%" }}>
            {title}
          </h4>
          <p style={{ textAlign: "center" }}>
            {description}
          </p>
        </div>
        <div className="card-tech" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "83%", padding: "0.8rem 0rem", gap: "0.3rem", flex: 0, flexFlow: "wrap", borderTop: "1px solid #eeeeee" }}>
          {techStack.map((tech, i) => (
            <div key={i} style={{ padding: "0.4rem 0.5rem 0.26rem 0.5rem", backgroundColor: tech.split(":").length > 1 ? tech.split(":")[1] : "#f17a52", color: "white", borderRadius: "0.35rem", fontSize: "85%" }}>{tech.split(":")[0]}</div>
          ))}
        </div>
      </div>
    </a>
  )
}
