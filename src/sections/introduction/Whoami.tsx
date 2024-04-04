export const Whoami = () => {
  return <>
    <section key="0-0" data-auto-animate data-background-color="#0c1821">
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
        <div style={{ position: "absolute", left: "-100vw", top: "0px", width: "100vw", height: "100vh", backgroundColor: "#e9e7e6", zIndex: "3" }}></div>
        <h2 style={{ color: "#E7AD52", opacity: 1, height: "5.8vw", fontFamily: "'Bebas Neue', sans-serif", fontSize: "5vw", zIndex: "3" }}>react-reveal-slides</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "0px", backgroundColor: "black", overflow: "hidden", borderRadius: "0rem", zIndex: "3" }}>
          <img src="man-walking.jpg" alt="man-walking" style={{ filter: "brightness(0.75)", maxWidth: "unset", minWidth: "100vw", maxHeight: "unset" }} />
        </div>
      </div>
    </section>
    <section key="0-0-a" data-auto-animate data-background-color="#0c1821">
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "100vw", height: "100vh", backgroundColor: "#e9e7e6", zIndex: "3", animation: "bgSlideInFromLeft 1.2s ease-in-out" }}></div>
        <h2 style={{ color: "#E7AD52", opacity: 0, height: 0, fontFamily: "'Bebas Neue', sans-serif", fontSize: "5vw", zIndex: "3", animation: "firstTitleOut 1s ease-in-out" }}>react-reveal-slides</h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "64vw", height: "32vw", backgroundColor: "black", overflow: "hidden", borderRadius: "1.2rem", animation: "growWindow 1s ease-in-out", zIndex: "3" }}>
          <img src="man-walking.jpg" alt="man-walking" style={{ filter: "brightness(0.75)", maxWidth: "unset", minWidth: "90vw", maxHeight: "unset", animation: "imgZoomOut 1s ease-in-out" }} />
          <div style={{ opacity: 1, color: "#E7AD52", fontWeight: "700", fontSize: "12vmin", position: "absolute", left: "50vw", transform: "translate(-50%, -64%)", animation: "fadeIn2 1.2s ease-in-out" }}>REACT</div>
          <div style={{ opacity: 1, color: "#E7AD52", fontWeight: "700", fontSize: "12vmin", position: "absolute", left: "50vw", transform: "translate(-50%, 2%)", animation: "fadeIn2 1.2s ease-in-out" }}>+</div>
          <div style={{ opacity: 1, color: "#E7AD52", fontWeight: "700", fontSize: "12vmin", position: "absolute", left: "50vw", transform: "translate(-50%, 70%)", animation: "fadeIn2 1.2s ease-in-out" }}>REVEAL.JS</div>
        </div>
      </div>
    </section>
    <section data-background-color="#222222" key="0-1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "5vw" }}>
      <p className="fragment fade-in-then-semi-out" data-fragment-index="0" style={{ lineHeight: "0.9" }}>ADD PRESENTATIONS TO REACT APPS</p>
      <p className="fragment fade-in-then-semi-out" style={{ lineHeight: "0.9" }}>ADD REACT COMPONENTS TO PRESENTATIONS</p>
      <p className="fragment fade-in-then-semi-out" style={{ lineHeight: "0.9" }}>MAKE REVEAL PRESENTATIONS EVEN MORE DYNAMIC</p>
    </section>
  </>
}
