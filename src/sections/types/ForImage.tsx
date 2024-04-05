interface Props {
  sectionKey: string;
  startIndex: number;
}

export const ForImage = (props: Props) => {
  return <>
    <section key={`${props.sectionKey}-${props.startIndex}`} data-auto-animate>
      <div className="flex flex-col justify-center align-middle">
        <h2>Imágenes</h2>
        <p className="fragment fade-in-then-semi-out font-normal text-[2rem]">El reconocimiento de imágenes es una de las aplicaciones más comunes de la inteligencia artificial. A través de redes neuronales, las computadoras pueden identificar objetos, rostros, paisajes y más.</p>
      </div>
    </section>
    <section key={`${props.sectionKey}-${props.startIndex + 1}`} data-auto-animate>
      <div className="flex flex-col justify-center align-middle">
        <h2>Imágenes</h2>
        <div className="fragment fade-in-then-semi-out flex justify-center">
          <img src="/neuronal-network.gif" alt="neuronal-network.gif" />
        </div>
      </div>
    </section>
    <section key={`${props.sectionKey}-${props.startIndex + 2}`} data-auto-animate>
      <div className="flex flex-col justify-center align-middle">
        <h2>Imágenes</h2>
        <div className="fragment fade-in-then-semi-out flex justify-center">
          <img src="/neuronal-network-2.gif" alt="neuronal-network-2.gif" />
        </div>
      </div>
    </section>
    <section key={`${props.sectionKey}-${props.startIndex + 3}`} data-auto-animate>
      <div className="flex flex-col justify-center align-middle">
        <h2>Imágenes</h2>
        <p className="fragment fade-in-then-semi-out font-normal text-[2rem]">La generación de imágenes por texto es otra aplicación de la inteligencia artificial que está en auge. A través de redes neuronales se pueden crear objetos, rostros, paisajes y más.</p>
      </div>
    </section>
  </>
}
