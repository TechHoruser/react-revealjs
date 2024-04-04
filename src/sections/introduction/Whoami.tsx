import { Theme, getDataBackground, getOpositeTheme } from "../../types/Theme"

interface WhoamiProps {
  theme: Theme
}

export const Whoami = ({
  theme,
}: WhoamiProps) => {
  return <>
    <section key="0-0" data-auto-animate data-background-color={getDataBackground(theme)}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
        <div style={{ position: "absolute", left: "-100vw", top: "0px", width: "70vw", zIndex: "3" }}></div>
        <h2
          style={{
            color: "#E20077",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "5vw",
            zIndex: "3",
            animation: "firstTitleIn 1s ease-in-out"
          }}
        >Francisco Ponce</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70vw", height: "0px", backgroundColor: "black", overflow: "hidden", borderRadius: "0rem", zIndex: "3" }}>
          <img src="big-ai.png" alt="big-ai.png" style={{ minWidth: "70vw", maxHeight: "unset" }} />
        </div>
      </div>
    </section>
    <section key="0-0-a" data-auto-animate>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "100vw", height: "100vh", backgroundColor: getDataBackground(getOpositeTheme(theme)), zIndex: "3", animation: "bgSlideInFromLeft 1.2s ease-in-out" }}></div>
        <h2 style={{
          color: "#E20077",
          opacity: 0,
          height: 0,
          fontFamily:
            "'Bebas Neue', sans-serif",
          fontSize: "5vw",
          zIndex: "3",
          animation: "firstTitleOut 1s ease-in-out",
        }}>Francisco Ponce</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "64vw", height: "32vw", backgroundColor: "black", overflow: "hidden", borderRadius: "1.2rem", animation: "growWindow 1s ease-in-out", zIndex: "3" }}>
          <img src="big-ai.png" alt="big-ai" style={{ minWidth: "64vw", maxHeight: "unset", animation: "imgZoomOut 2s ease-in-out" }} />
          <div style={{ opacity: 1, color: "#E20077", fontWeight: "700", fontSize: "5rem", position: "absolute", left: "50vw", transform: "translate(-50%, -64%)", animation: "fadeIn2 1.2s ease-in-out" }}>Hablando de IA</div>
          <div style={{ opacity: 1, color: "#E20077", fontWeight: "700", fontSize: "3.5rem", position: "absolute", left: "50vw", transform: "translate(-50%, 2%)", animation: "fadeIn2 1.2s ease-in-out" }}>(Inteligencia Artificial)</div>
        </div>
      </div>
    </section>
    <section key="0-1" data-background-color={getDataBackground(getOpositeTheme(theme))}>
      <p className="fragment fade-in-then-semi-out" data-fragment-index="0" style={{ lineHeight: "0.9" }}>¿Qué es la Inteligencia Artificial?</p >
      <p className="fragment fade-in-then-semi-out" style={{ lineHeight: "0.9" }}>Tipos de Inteligencia Artificial</p>
      <p className="fragment fade-in-then-semi-out" style={{ lineHeight: "0.9" }}>¿Cómo Funcionan las IAs?</p>
      <p className="fragment fade-in-then-semi-out" style={{ lineHeight: "0.9" }}>Aplicaciones de la Inteligencia Artificial</p>
      <p className="fragment fade-in-then-semi-out" style={{ lineHeight: "0.9" }}>Beneficios de Integrar IA en Procesos de Trabajo</p>
      <p className="fragment fade-in-then-semi-out" style={{ lineHeight: "0.9" }}>Desafíos y Limitaciones de las IAs</p>
      <p className="fragment fade-in-then-semi-out" style={{ lineHeight: "0.9" }}>Usando la IAs en el día a día</p>
    </section >
  </>
}
