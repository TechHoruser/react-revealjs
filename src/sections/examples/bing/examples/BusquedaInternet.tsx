interface BingExample1Props {
  sectionKey: string
}

export const EdgeCopilotBusquedaInternet = ({
  sectionKey,
}: BingExample1Props) =>
  <section key={`${sectionKey}-0`}>
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-3/5">
        <h3 className="fragment">Copilot - Busca en Internet</h3>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <p>El mismo modelo de datos que ChatGPT pero integrado en el navegador de Edge</p>
        </div>
        <div className="fragment fade-in-then-semi-out w-full flex flex-col font-medium text-[1.125rem] text-left ">
          <h4>Interactua con la página</h4>
        </div>
      </div>
    </div>
  </section>
